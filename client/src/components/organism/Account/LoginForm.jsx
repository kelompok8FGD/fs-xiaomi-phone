import React, { useState } from 'react';
import { useLogin } from '../../../hooks/useLogin';
import FB from '/account/facebook-svgrepo-com.png'
import { GithubAuth, GoogleAuth, FacebookAuth} from '../../../firebase/firebase'


const LoginForm = () => {

    const { login, error, isLoading } = useLogin()
    const  [email, setEmail] = useState('')
    const  [password, setPassword] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault()
    
        await login(email, password)
      }

      async function FacebookAuthButtonClicked() {
        const user = await FacebookAuth();
        console.log ("facebook user: ", user);
      }

  return (
    <form className='bg-formBackground' onSubmit={handleSubmit}>
    <div className='flex flex-col space-y-5'>
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email"
        />
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password"
        className="" /></div>
    <div className='mt-4 flex flex-col space-y-4'>
      <button type="submit"
        disabled={isLoading}
        className="disabled w-full text-center p-4 bg-[#ffbe99] text-white">Masuk</button>
        {error && <div className="text-red-500">{error}</div>}
      <button id="google-button" type="submit"
        className="border w-full text-center flex items-center bg-[#ffffff] text-white">
        <span className="google-btn__icon bg-white h-full w-[70px] flex items-center justify-center"><svg className="h-auto w-[30px]" viewBox="0 0 46 46" xmlns="http://www.w3.org/2000/svg" aria-label="google"><g fillRule="nonzero" fill="none"><path d="M9.577 23.156c0-1.504.253-2.946.702-4.299L2.4 12.9A22.958 22.958 0 000 23.156c0 3.686.863 7.162 2.397 10.25l7.875-5.97a13.57 13.57 0 01-.695-4.28" fill="#FBBC05"></path><path d="M23.415 9.476a13.627 13.627 0 018.62 3.05l6.81-6.735c-4.15-3.576-9.47-5.788-15.43-5.788C14.162.003 6.209 5.243 2.4 12.9l7.883 5.959c1.815-5.458 6.99-9.383 13.133-9.383" fill="#EA4335"></path><path d="M23.515 36.532c-6.176 0-11.376-3.9-13.202-9.324L2.395 33.13c3.826 7.609 11.82 12.814 21.12 12.814 5.738 0 11.216-1.994 15.33-5.734l-7.517-5.69c-2.12 1.308-4.791 2.013-7.814 2.013" fill="#34A853"></path><path d="M45.975 22.938c0-1.36-.215-2.824-.535-4.184H23.513v8.89h12.62c-.629 3.031-2.346 5.361-4.804 6.877l7.516 5.69c4.32-3.925 7.13-9.773 7.13-17.273" fill="#4285F4"></path></g></svg></span>
        <span className=" py-4 text-black  text-center justify-center items-center flex w-full">Masuk dengan
          Google</span>
      </button></div>

    <a className="block text-accent" href="">Lupa Sandi?</a>

    <div>
      <div className="text-center text-[#797979] text-[17px] leading-[40px]">Pilihan lainnya</div>
      <div className="m-[10px] flex justify-center"><button onClick={FacebookAuthButtonClicked}>
        <img className="w-[70px] h-[70px] "
        src={FB} alt="" />
        </button></div>
    </div>
  </form>
  )
}

export default LoginForm