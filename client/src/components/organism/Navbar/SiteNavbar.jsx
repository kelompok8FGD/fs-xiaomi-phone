import React, { useState } from 'react';
import Icon from '../../Atoms/Icon';
import Logo from '../../Atoms/Logo';
import List from '../../Atoms/Global/ListItem';
import SearchButton from '../../Atoms/Buttons/SearchButton';
import { useLogout } from '../../../hooks/useLogout';
import ThemeSwitch from '../../molecule/ThemeSwitch';
import { useSelector } from 'react-redux';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { calculateTotal } from '../../../redux/cart/cartUtils';
import { Link } from 'react-router-dom';
const SiteNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cart = useSelector((state) => state.cart);
  const { totalQuantity } = calculateTotal(cart);

  const { logout } = useLogout()
  const { user } = useAuthContext()
  const handleClick = () => {
    logout()
  }

  return (
    <nav className="relative h-full w-full flex mx-auto items-center justify-between">
      <ul id='nav-link' className="relative flex w-full h-full items-center gap-2 flex-wrap">
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
        <List redirect="/support" text="Support" className="h-full px-[8px] lg:px-[16px]" title="Support" />
        </div>
        <SearchButton />
        <div id='cartamount' className='relative'>
          <Icon redirect="/cart" classname="shopping-cart" />
          <div className="absolute top-[-10px] right-0 h-auto bg-accent px-2 py-1 rounded-full">
  <p className="mx-auto text-text text-xs">{user ? totalQuantity : 0}</p>
</div>
        </div>  
        <ThemeSwitch />
          {/* User login/logout */}   
          <div className="flex justify-center items-center gap-4">
          {!user ? (
        <Icon redirect="/account" classname="account only-medium" />
      ) : (
        <>
          <button className='only-medium' onClick={handleClick}>Log out</button>
        </>
      )}
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
                <div className='px-[16px]  py-[16px] gap-4 flex justify-between' >
                  <div className='w-max rounded-lg bg-neutral-300 text-white flex items-center justify-center'>
                <Icon redirect="/account" classname="account" /></div>
                {user ? (
        <div className='flex flex-col items-start w-full'>
          <span>{user.email}</span>
          <button onClick={handleClick}>Log out</button>
        </div>
      ) : (
        <List
          className="w-full justify-start  mr-10 inline-block text-text px-[8px] lg:px-[16px]"
          redirect="/account"
          text="Account"
          title="Login/Register"
        />
      )}           </div>
                <div className='py-5 border-b-gray-100 border-t-gray-100 border-b-[1px] border-t-[1px]'>
                <List className="text-text px-[8px] lg:px-[16px]" redirect="/store" text="Store" title="Store" />
                <List className="text-text px-[8px] lg:px-[16px]" redirect="/smartphone" text="Smartphone" title="Smartphone" />
                <List redirect="/support" text="Support" className="px-[8px] lg:px-[16px]" title="Support" />
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