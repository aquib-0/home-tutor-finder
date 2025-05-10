import './App.css'
import { FaGraduationCap } from "react-icons/fa";
import { Link, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Connect } from './components/Connect';
import PrivateRoutes from './components/PrivateRoutes';
import DashboardTutor from './components/DashboardTutor';
// import { useAuth } from './context/AuthContext';

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  // const {user, loading, logout} = useAuth();
  const user = localStorage.getItem('user');
  const handleLogout = async ()=>{
    localStorage.removeItem('user');
    navigate('/');
  }
  return (
    <>
      <div className='w-[100vw] h-[100vh] flex flex-col relative'>
        <div className='w-full h-[10vh] bg-white flex justify-between items-center px-3 absolute top-0 z-10'>
          <div className='text-2xl font-bold text-neutral-600 flex items-center gap-x-2'>
            <FaGraduationCap size={32} fill='#8482e6' /> Home Tutor Finder
          </div>
          <div className='flex items-center gap-x-8'>
            <Link to='/' className='hover:text-purple-500 transition-all ease-in-out'>Home</Link>
            <Link to='/feature' className='hover:text-purple-500 transition-all ease-in-out'>Feature</Link>
            <Link to='/connect' className='hover:text-purple-500 transition-all ease-in-out'>Connect</Link>
            <Link to='/contact' className='hover:text-purple-500 transition-all ease-in-out'>Contact Us</Link>
            {
              user? (
              <>
                <button className='hover:cursor-pointer bg-purple-400 text-white rounded-xl px-10 py-2' onClick={handleLogout}>Logout</button>
              </>
              ) : (
              <>
                <button className='hover:cursor-pointer bg-purple-400 text-white rounded-xl px-10 py-2' onClick={()=>{navigate('/student-login')}}>Register</button>
                <button className='hover:cursor-pointer bg-gray-300 text-purple-400 rounded-xl px-10 py-2' onClick={()=>{navigate('/student-login')}}>Sign in</button>
              </>)
            }
          </div>
        </div>

        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/feature' element={<Feature />} />
            <Route path='/student-login' element={<Login />} />
            <Route path='/tutor-login' element={<Login />} />
            <Route path='/connect' element={<Connect />} />
            <Route path='/dashboard' element={<PrivateRoutes><Dashboard /></PrivateRoutes>} />
            <Route path='/dashboard-tutor' element={<PrivateRoutes><DashboardTutor /></PrivateRoutes>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
