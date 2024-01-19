import React, { useState } from 'react';
import { useRegister } from '../../../hooks/useRegister';

const RegisterForm = () => {

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
{error && <div className="text-red-500">{error}</div>}
</div>

  </form>
  )
}

export default RegisterForm