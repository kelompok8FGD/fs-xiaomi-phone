// TabbedInterface.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

 
  
  return (
    <div className="mi-layout__card bg-formBackground container px-[50px] py-8 border-formBackground mx-auto mt-[-50px]">
      <ul id='account-form-navigation' className="flex gap-4">
        <li
          onClick={() => handleTabClick('login')}
          className={`cursor-pointer  ${activeTab === 'login' ? ' text-text border-b border-b-[5px] border-b-accent' : 'text-gray-300'
            }`}
        >

          Masuk

        </li>
        <li
          onClick={() => handleTabClick('register')}
          className={`cursor-pointer px-4 ${activeTab === 'register' ? 'text-text border-b border-b-[5px] border-b-accent' : 'text-gray-300'
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
