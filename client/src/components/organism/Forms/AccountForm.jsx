// TabbedInterface.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const TabbedInterface = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const activeTabFromQuery = searchParams.get("activeTab") || 'register';

  const [activeTab, setActiveTab] = useState(activeTabFromQuery);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

 
  
  return (
    <div className="mi-layout__card bg-formBackground container px-[50px] py-8 border-formBackground mx-auto mt-[-50px]">
          <Link to="#register"   onClick={() => handleTabClick('register')}>Daftar</Link>

      <ul id='account-form-navigation' className="flex gap-4">
        <li id='login'
          onClick={() => handleTabClick('login')}
          className={`cursor-pointer  ${activeTab === 'login' ? ' text-text border-b-[5px] border-b-accent' : 'text-gray-300'
            }`}
        >

          Masuk

        </li>
        <li id='register'
          onClick={() => handleTabClick('register')}
          className={`cursor-pointer px-4 ${activeTab === 'register' ? 'text-text border-b-[5px] border-b-accent' : 'text-gray-300'
            }`}
        >
          Daftar
        </li>
      </ul>

      <div id='account-forms'>
        {activeTab === 'login' && (
          <div>
            {/* Login form */}
            <LoginForm/>
          </div>
        )}

        {activeTab === 'register' && (
          <div>
            {/* Registration form */}
            <RegisterForm/>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedInterface;
