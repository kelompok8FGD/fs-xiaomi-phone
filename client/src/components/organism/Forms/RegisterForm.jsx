import React, { useState } from 'react';
import { useRegister } from '../../../hooks/useRegister';
import CustomInput from '../../Atoms/CustomInput';
import CustomLabel from '../../Atoms/CustomLabel';
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

    <CustomInput intent="form" type="text" onChange={(e) => setFullName(e.target.value)} value={fullname} placeholder="Full Name"/>

    <CustomInput intent="form" type="email" onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email"
      />
    <CustomInput intent="form" type="password" placeholder="Setel sandi"
       />
    <CustomInput intent="form" type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Masukan sandi Anda lagi"
       />
    <p className="text-[13px] text-text leading-tight">Sandi harus terdiri dari 8-16 karakter dan
      mencakup angka dan huruf</p>
    <div>
      <div className='flex items-start space-x-2 py-4'>
        <CustomInput
type="checkbox"
checked={isChecked}
onChange={handleCheckboxChange}
intent="checkbox"
/>

<CustomLabel intent="checkbox" text="Saya telah membaca dan menyetujui Perjanjian Pengguna dan Kebijakan Privasi Xiaomi." htmlFor="checkbox" />
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