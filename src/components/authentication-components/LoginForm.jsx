import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {jwtDecode} from 'jwt-decode';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setLoginEmail] = useState('');
  const [password, setLoginPassword] = useState('');

  const loginSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      if (res.ok) {
        const data = await res.json();
        const token = data.token;

        // ✅ decode properly
        const userPayload = jwtDecode(token);

        // ✅ use your AuthContext login()
        login(token, userPayload);

        console.log("Login successful, token stored.");
        if(userPayload.user.role == 'Student')
        {
            navigate('/dashboard');
        }
        else if(userPayload.user.role == 'Tutor')
        {
            navigate('/dashboard-tutor');
        }
      } else {
        const errorData = await res.json();
        console.error('Login failed:', errorData.msg);
        alert(errorData.msg || 'An error occurred. Please try again.');
      }
    } catch (err) {
      console.error(err);
      alert('An error occurred');
    }
  };

  return (
    <div className='w-full h-fit flex flex-col gap-y-6 md:gap-y-12'>
      <input
        type="email"
        placeholder='enter your email: xyz@gmail.com'
        value={email}
        onChange={(e) => setLoginEmail(e.target.value)}
        required
        className='h-[50px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight'
      />
      <input
        type="password"
        placeholder='enter password: 12**cvx'
        value={password}
        onChange={(e) => setLoginPassword(e.target.value)}
        required
        className='h-[50px] border border-black rounded-md p-4 placeholder:text-gray-200 text-white font-extralight'
      />
      <button
        onClick={loginSubmit}
        className='h-[50px] rounded-md bg-black text-white text-lg font-bold hover:cursor-pointer'
      >
        Login
      </button>
      <span className='self-center text-white'>
        <Link to='/register' className='underline'>Don't have an account? SignUp</Link>
      </span>
    </div>
  )
}

export default LoginForm;
