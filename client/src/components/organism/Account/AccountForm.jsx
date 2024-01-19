// TabbedInterface.js

import React, { useState } from 'react';
import { useRegister } from '../../../hooks/useRegister';
import FB from '/account/facebook-svgrepo-com.png'
import QrButton from '../../Atoms/Account/QrButton';
import CountrySelector from '../../Atoms/Account/CountrySelector'

const TabbedInterface = () => {
  const [activeTab, setActiveTab] = useState('login');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const  [email, setEmail] = useState('')
  const  [password, setPassword] = useState('')
  const  [fullname, setFullName] = useState('')
  const { error, isLoading, register } = useRegister()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await register(email, password, fullname)
  }

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className="mi-layout__card bg-formBackground container px-[50px] py-8 border-formBackground mx-auto mt-[-50px]">
      <QrButton />
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
            <form className='bg-formBackground' onSubmit={handleSubmit}>
              <div className='flex flex-col space-y-5'>
                <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email"
                  />
                <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"
                  className="" /></div>
              <div className='mt-4 flex flex-col space-y-4'>
                <button type="submit"
                  className="disabled w-full text-center p-4 bg-[#ffbe99] text-white">Masuk</button>
                <button id="google-button" type="submit"
                  className="border w-full text-center flex items-center bg-[#ffffff] text-white">
                  <span className="google-btn__icon bg-white h-full w-[70px] flex items-center justify-center"><svg className="h-auto w-[30px]" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg" aria-label="google"><g fillRule="nonzero" fill="none"><path d="M9.577 23.156c0-1.504.253-2.946.702-4.299L2.4 12.9A22.958 22.958 0 000 23.156c0 3.686.863 7.162 2.397 10.25l7.875-5.97a13.57 13.57 0 01-.695-4.28" fill="#FBBC05"></path><path d="M23.415 9.476a13.627 13.627 0 018.62 3.05l6.81-6.735c-4.15-3.576-9.47-5.788-15.43-5.788C14.162.003 6.209 5.243 2.4 12.9l7.883 5.959c1.815-5.458 6.99-9.383 13.133-9.383" fill="#EA4335"></path><path d="M23.515 36.532c-6.176 0-11.376-3.9-13.202-9.324L2.395 33.13c3.826 7.609 11.82 12.814 21.12 12.814 5.738 0 11.216-1.994 15.33-5.734l-7.517-5.69c-2.12 1.308-4.791 2.013-7.814 2.013" fill="#34A853"></path><path d="M45.975 22.938c0-1.36-.215-2.824-.535-4.184H23.513v8.89h12.62c-.629 3.031-2.346 5.361-4.804 6.877l7.516 5.69c4.32-3.925 7.13-9.773 7.13-17.273" fill="#4285F4"></path></g></svg></span>
                  <span className=" py-4 text-black  text-center justify-center items-center flex w-full">Masuk dengan
                    Google</span>
                </button></div>

              <a className="block text-accent" href="">Lupa Sandi?</a>

              <div>
                <div className="text-center text-[#797979] text-[17px] leading-[40px]">Pilihan lainnya</div>
                <div className="m-[10px] flex justify-center"><img className="w-[70px] h-[70px] "
                  src={FB} alt="" /></div>
              </div>
            </form>
          </div>
        )}

        {activeTab === 'register' && (
          <div>
            {/* Registration form */}
            <form onSubmit={handleSubmit}>

              <input type="text" onChange={(e) => setFullName(e.target.value)} value={fullname} placeholder="Full Name"/>

              <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email"
                />
              <input type="password" placeholder="Setel sandi"
                 />
              <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Masukan sandi Anda lagi"
                 />
              <p className="text-[13px] text-text leading-tight">Sandi harus terdiri dari 8-16 karakter dan
                mencakup angka dan huruf</p>
              <div>
                <div className='flex items-start space-x-1 py-4'>
                  <input className=''
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      
      <label className='flex flex-row space-x-4' htmlFor="checkbox"><span className="text-[13px] text-[#999]">
                  Saya telah membaca dan menyetujui Perjanjian Pengguna dan Kebijakan Privasi Xiaomi.
                </span></label>
                </div>
      

      <div>
        <button
          type="submit"
          disabled={isLoading}
          className={`w-full text-center p-4 ${
            isChecked ? 'bg-[#ff5c00] text-white' : 'bg-[#ffbe99] text-white'
          }`}
        >
          Berikutnya
        </button>
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
};

export default TabbedInterface;
