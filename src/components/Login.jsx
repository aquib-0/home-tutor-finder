import React from 'react'
import LoginStudent from './authentication-components/LoginStudent'
import LoginTutor from './authentication-components/LoginTutor'
import RegisterStudent from './authentication-components/RegisterStudent'
import RegisterTutor from './authentication-components/RegisterTutor'
import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
    const navigate = useNavigate();
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

    const handleGoogleLogin = async() => {
    window.open(`${import.meta.env.VITE_API_BASE_URL}/auth/google`, '_self');
  };

  return (
    <div className="w-[100vw] h-[100vh] flex flex-col md:flex-row md:justify-between items-center px-2 md:px-8 overflow-y-scroll overflow-x-hidden" id="login-bg">
      <div className="w-full md:w-[40%] md:h-[80%] rounded-md flex flex-col items-center p-3 mt-24 md:mt-12 backdrop-blur-[150px] border">
        <div className="w-full h-fit flex justify-center mb-10 md:mb-16">
          <h1 className="text-3xl font-bold text-white">
            {student ? "Student Login" : "Tutor Login"}
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          {student ? <LoginStudent /> : <LoginTutor />}
        </div>
        <div className="w-full h-fit flex justify-center mt-8">
          <button className="bg-white text-black font-medium py-2 px-6 rounded-md shadow-md hover:bg-gray-200 transition-all flex items-center gap-3 hover:cursor-pointer" onClick={handleGoogleLogin} disabled={loading}>
            {loading ? "Redirecting..." : "Login with Google"}
          </button>
        </div>
      </div>

      <div className="w-[80%] md:w-0 md:h-[70%] border border-white md:border-gray-400 mt-8"></div>

      <div className="w-full md:w-[40%] md:h-[80%] rounded-md flex flex-col items-center p-3 my-6 md:my-0 md:mt-12 backdrop-blur-[150px] border">
        <div className="w-full h-fit flex justify-center mb-10 md:mb-16">
          <h1 className="text-3xl font-bold text-white">
            {student ? "Student Register" : "Tutor Register"}
          </h1>
        </div>
        <div className="w-full flex justify-center items-center">
          {student ? <RegisterStudent /> : <RegisterTutor />}
        </div>
      </div>
    </div>
  );
}

export default Login
