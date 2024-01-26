import React, { useState } from 'react';
import Icon from '../../Atoms/Icon';
import { useAuthContext } from '../../../hooks/useAuthContext';
import { useLogout } from '../../../hooks/useLogout';
const Dropdown = () => {

  
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };
  const { logout } = useLogout()
    const { auth } = useAuthContext()
    const handleClick = () => {
      logout()
    }
  return (
    <div className="only-medium relative inline-block" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
         
        
      <button
        id="dropdownHoverButton"
        className="text-text  focus:outline-none focus:ring-accent font-medium rounded-lg text-sm px-0 py-1.5 text-center inline-flex items-center justify-center only-medium"
        type="button"
      >
         {auth && (
        <div className='flex justify-center items-center w-full'>
          <span className='text-text'>{auth.fullname}</span>
         
        </div>
      )} 
      <Icon redirect="/account?activeTab=login" classname="account only-medium px-0 lg:px-1 w-auto" />
      <svg
        className={`w-2.5 h-2.5 only-medium transition-transform transform ${
          isDropdownOpen ? 'rotate-180' : ''
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
       
      </button>
 <div className="flex justify-center items-center gap-4">
    
      </div>
      <div
        className={`${
          isDropdownOpen ? 'block' : 'hidden'
        } z-10 absolute top-full left-0 bg-white divide-y divide-gray-100 rounded-lg shadow w-max transition-transform transform origin-top`}
      >

      {!auth ? (
             <ul className="py-2 text-sm text-gray-700 " aria-labelledby="dropdownHoverButton">
             <li>
                
             </li>
             <li>
               <a
                 href="/account?activeTab=login"
                 className="block px-4 py-2 hover:underline"
               >
                 Masuk
               </a>
             </li>
             <li>
               <a
                 href="/account?activeTab=register"
                 className="block px-4 py-2 hover:underline"
               >
                 Daftar
               </a>
             </li>
           </ul>
      ) : (
        <ul className="py-2 text-sm text-gray-700" aria-labelledby="dropdownHoverButton">
       <li>
          <a
            href="/profile"
            className="block px-4 py-2 hover:underline"
          >
            My Account
          </a>
        </li>
        <li>
        <button className='block px-4 py-2 hover:underline' onClick={handleClick}>Log out</button>
        </li>
        
      </ul>
       
      )}


  
      </div>
    </div>
  );
};

export default Dropdown;
