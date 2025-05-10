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
    }, []);

    // const handleGoogleLogin = ()=>{
    //     window.open('http://localhost:5000/auth/google', "_self");
    // };

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
