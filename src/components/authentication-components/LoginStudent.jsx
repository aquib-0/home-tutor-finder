import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginStudent = () => {
    const navigate = useNavigate();
    const [email, setLoginEmail] = useState('');
    const [password, setLoginPassword] = useState('');
    const loginSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            });

            const data = await res.json();
            if(res.ok){
                localStorage.setItem('user', JSON.stringify(data));
                navigate('/dashboard');
            }
            else{
                alert(data.message || 'Login Failed');
            }
        } catch(err){
            console.log(err);
            alert('AN error occurred');
        }
    };

  return (
    <div className='w-full h-fit flex flex-col gap-y-6 md:gap-y-12'>
      <input type="email" placeholder='enter your email: xyz@gmail.com' value={email} onChange={(e)=> setLoginEmail(e.target.value)} required className='h-[50px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight' />
      <input type="password" placeholder='enter password: 12**cvx' value={password} onChange={(e)=> setLoginPassword(e.target.value)} required className='h-[50px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight' />
      <button onClick={loginSubmit} className='h-[50px] rounded-md bg-black text-white text-lg font-bold hover:cursor-pointer'>Login</button>
    </div>
  )
}

export default LoginStudent;
