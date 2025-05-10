import React from 'react'
import LoginStudent from './authentication-components/LoginStudent'
import LoginTutor from './authentication-components/LoginTutor'
import RegisterStudent from './authentication-components/RegisterStudent'
import RegisterTutor from './authentication-components/RegisterTutor'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import './login.css'

const Login = () => {
    const [student, setStudent] = useState(false);
    const [loading, setLoading] = useState(false);

    const path = window.location.pathname;
    useEffect(()=>{
        console.log(path);
        if(path === '/student-login')
        {
            setStudent(true);
        }
        else if(path === '/tutor-login')
        {
            setStudent(false);
        }
    }, [path]);

    const handleGoogleLogin = () => {
    setLoading(true);
    window.open('http://localhost:5000/auth/google', '_self'); // Make sure backend route exists
  };

  return (
    <div className='w-[100vw] h-[100vh] flex justify-between items-center px-8 flex-wrap overflow-y-scroll overflow-x-hidden' id='login-bg'>
            <div className='w-[40%] h-[80%] rounded-md flex flex-col items-center p-3 mt-12 backdrop-blur-[150px] border'>
                <div className='w-full h-fit flex justify-center mb-16'>
                    <h1 className='text-3xl font-bold text-white'>{student? "Student Login": "Tutor Login"}</h1>
                </div>
                <div className='w-full flex justify-center items-center'>
                    {
                        student? (<LoginStudent />) : (<LoginTutor />)
                    }
                </div>
                <div className='w-full h-fit flex justify-center mt-8'>
          <button
            className='bg-white text-black font-medium py-2 px-6 rounded-md shadow-md hover:bg-gray-200 transition-all flex items-center gap-3 hover:cursor-pointer'
            onClick={handleGoogleLogin}
            disabled={loading}
          >
            {/* <img
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png'
              alt='Google Icon'
              className='w-5 h-5'
            /> */}
            {loading ? 'Redirecting...' : 'Login with Google'}
          </button>
        </div>

                {/* <div className='w-full h-fit flex justify-center mt-8'>
                    <button className='bg-white rounded-md py-3 px-8 hover:cursor-pointer' onClick={handleGoogleLogin}>Login with google</button>
                </div> */}
            </div>
            
            <div className='h-[70%] border border-gray-400 mt-8'></div>

            <div className='w-[40%] h-[80%] rounded-md flex flex-col items-center p-3 mt-12 backdrop-blur-[150px] border'>
                <div className='w-full h-fit flex justify-center mb-12'>
                    <h1 className='text-3xl font-bold text-white'>{student? "Student Register" : "Tutor Register"}</h1>
                </div>
                <div className='w-full flex justify-center items-center'>
                    {
                        student? (<RegisterStudent />): (<RegisterTutor />)
                    }
                </div>
            </div>
    </div>
  )
}

export default Login
