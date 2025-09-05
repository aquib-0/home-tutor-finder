import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const RegisterTutor = () => {
  const navigate = useNavigate();
      const [username, setUsername] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const registerSubmit = async(e)=>{
          e.preventDefault();
          try{
              //some logic to be added here
              if(confirmPassword !== password){
                  alert('Confirm password error');
                  return;
              }
              const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/register`, {
                  method: 'POST',
                  headers: {'Content-Type': 'application/json'},
                  body: JSON.stringify({username, email, password, role:"tutor"})
              });
  
              const data = await res.json();
              if(res.ok){
                  localStorage.setItem('user', JSON.stringify(data));
                  navigate('/dashboard-tutor');
              }
              else{
                  alert(data.message || 'Register Failed');
              }
          } catch(err){
              console.log(err);
              alert('An error occurred');
          }
      };

  return (
    <div className='w-full h-fit flex flex-col gap-y-8'>
        <input type="text" placeholder='enter your username: Henry-cavill' value={username} onChange={(e)=> setUsername(e.target.value)} required className='h-[40px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight' />
        <input type="email" placeholder='enter your email: xyz@gmail.com' value={email} onChange={(e)=> setEmail(e.target.value)} required className='h-[40px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight' />
        <input type="text" placeholder='enter password: 12**cvx' value={password} onChange={(e)=> setPassword(e.target.value)} required className='h-[40px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight' />
        <input type="password" placeholder='confirm password: 12**cvx' value={confirmPassword} onChange={(e)=> setConfirmPassword(e.target.value)} required className='h-[40px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight' />
        <button onClick={registerSubmit} className='h-[50px] rounded-md bg-black text-white text-lg font-bold hover:cursor-pointer'>Register me</button>
    </div>
  )
}

export default RegisterTutor
