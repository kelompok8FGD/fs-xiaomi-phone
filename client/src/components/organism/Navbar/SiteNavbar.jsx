import React, { useState } from 'react';
import Icon from '../../Atoms/Icon';
import Logo from '../../Atoms/Logo';
import List from '../../Atoms/Global/ListItem';
import SearchButton from '../../molecule/Search/SearchButton';
import { useLogout } from '../../../hooks/useLogout';
import ThemeSwitch from '../../molecule/ThemeSwitch';
import { useSelector } from 'react-redux';
import { calculateTotal } from '../../../redux/cart/cartUtils';
const SiteNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cart = useSelector((state) => state.cart);
  const { totalQuantity } = calculateTotal(cart);

  const { logout } = useLogout()
  const handleClick = () => {
    logout()
  }

  return (
    <nav className="relative h-full w-full flex mx-auto items-center justify-between">
      <ul id='nav-link' className="relative flex w-full h-full items-center">
        <Logo />
        <div className='only-medium'>
        <List redirect="/store" text="Store" className="h-full px-[8px] lg:px-[16px]" title="Store" />
        <List
          redirect="/smartphone"
          text="SmartPhone"
          className="h-full px-[8px] lg:px-[16px]"
          title="SmartPhone"
        /></div>
        <div className="grow h-full"></div>
        <div className='only-medium'>
        <List redirect="#" text="Discover" className="h-full px-[8px] lg:px-[16px]" title="Discover" />
        <List redirect="#" text="Support" className="h-full px-[8px] lg:px-[16px]" title="Support" />
        </div>
        <SearchButton />
        <div id='cartamount' className='relative'>
          <Icon redirect="/cart" classname="shopping-cart" />
        <div className="absolute top-[-10px] right-0 h-auto bg-accent px-2 py-1 rounded-full">
                        <p className="mx-auto text-text text-xs">{totalQuantity}</p>
                    </div>
        </div>
        
        <div className="only-medium flex items-center">
          <Icon redirect="/account" classname="account" />
        </div>
        <ThemeSwitch />
        {/* Logout Button */}
        <div>
          <button onClick={handleClick}>Log out</button>
        </div>


        {/* Toggle button for the menu */}
        <button
          className="relative ml-4 text-text p-2 focus:outline-none  flex md:hidden z-[1001]"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <Icon classname="close" /> : <Icon classname="menu" />}
        </button>

        {/* Full-height div with new list items */}
        {isMenuOpen && (
          <div className="only-phone fixed top-0 left-0 w-screen bg-background h-screen z-[80] py-10">
            <div className="relative max-w-full w-full z-[1001] flex flex-col">
              {/* Your new list items */}
              <div className='text-text relative mt-10'>
                <div className='px-[16px]  py-[16px]  flex' >
                  <div className='w-max rounded-lg bg-neutral-300 text-white flex items-center justify-center'>
                <Icon redirect="/account" classname="account" /></div>
                <List className="mr-10 inline-block text-text px-[8px] lg:px-[16px]" redirect="/account" text="Account" title="Login/Register" />
                </div>
                <div className='py-5 border-b-gray-100 border-t-gray-100 border-b-[1px] border-t-[1px]'>
                <List className="text-text px-[8px] lg:px-[16px]" redirect="/store" text="Store" title="Store" />
                <List className="text-text px-[8px] lg:px-[16px]" redirect="/smartphone" text="Smartphone" title="Smartphone" />
                <List redirect="#" text="Discover" className="px-[8px] lg:px-[16px]" title="Discover" />
                <List redirect="#" text="Support" className="px-[8px] lg:px-[16px]" title="Support" />
                </div>
                <List className="text-text p-2" redirect="/about" text="About" title="About" />
               
 

              </div>
              {/* Add more list items as needed */}
            </div>
          </div>
        )}
      </ul>
    </nav>
  );
};

export default SiteNavbar; 