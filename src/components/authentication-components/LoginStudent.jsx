import React, { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const LoginStudent = () => {
    const navigate = useNavigate();
    const { login } = useAuth();
    const [email, setLoginEmail] = useState('');
    const [password, setLoginPassword] = useState('');
    const loginSubmit = async(e)=>{
        e.preventDefault();
        try{
            const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({email, password})
            });

            if(res.ok){
                const data = await res.json();
                const token = data.token;
                localStorage.setItem('token', token);

                const userPayload = JSON.parse(atob(data.token.split('.')[1]));
                localStorage.setItem('user', userPayload);
                login(userPayload);

                console.log("Login successfull, token stored.");
                navigate('/dashboard');
            }
            else {
      // ---- HANDLE FAILED LOGIN ----
      const errorData = await res.json(); // Get the error message from the body
      console.error('Login failed:', errorData.msg);
      // Display an error message to the user (e.g., in an alert or a div)
      alert(errorData.msg || 'An error occurred. Please try again.');
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
