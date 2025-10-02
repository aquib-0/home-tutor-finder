import './App.css'
import { FaGraduationCap } from "react-icons/fa";
import { Link, Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import HamburgerMenu from './components/HamburgerMenu';
import Home from './components/Home';
import Contact from './components/Contact';
import Feature from './components/Feature';
import Login from './components/Login';
import Register from './components/Register';
import Dashboard from './components/Dashboard';
import DashboardTutor from './components/DashboardTutor';
// import CourseDetail from './components/dashboard-components/CourseDetail';
import CourseDetailStudent from './components/dashboard-components/CourseDetailStudent';
import CourseDetailTutor from './components/dashboard-components/CourseDetailTutor';
import Connect from './components/Connect';
import PrivateRoutes from './components/PrivateRoutes';
import { useAuth } from './context/AuthContext';

function App() {
  const navigate = useNavigate();

  const {isAuthenticated, logout} = useAuth();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = async ()=>{
    logout();
  };
  return (
    <>
      <div className='w-[100vw] h-[100vh] flex flex-col relative'>
        <div className='w-full h-[10vh] bg-white flex justify-between items-center px-3 absolute top-0 z-10'>
          <div className='text:md md:text-2xl font-bold text-neutral-600 flex items-center gap-x-2'>
            <FaGraduationCap size={32} fill='#8482e6' /> Home Tutor Finder
          </div>
          <div className='items-center gap-x-8 hidden lg:flex'>
            <Link to='/' className='hover:text-purple-500 transition-all ease-in-out'>Home</Link>
            <Link to='/feature' className='hover:text-purple-500 transition-all ease-in-out'>Feature</Link>
            <Link to='/connect' className='hover:text-purple-500 transition-all ease-in-out'>Connect</Link>
            <Link to='/contact' className='hover:text-purple-500 transition-all ease-in-out'>Contact Us</Link>
            {
              isAuthenticated? (
              <>
                <button className='hover:cursor-pointer bg-purple-400 text-white rounded-xl px-10 py-2' onClick={handleLogout}>Logout</button>
              </>
              ) : (
              <>
                <button className='hover:cursor-pointer bg-purple-400 text-white rounded-xl px-10 py-2' onClick={()=>{navigate('/register')}}>Register</button>
                <button className='hover:cursor-pointer bg-gray-300 text-purple-400 rounded-xl px-10 py-2' onClick={()=>{navigate('/login')}}>Sign in</button>
              </>)
            }
          </div>
          <HamburgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} handleLogout={handleLogout} />
        </div>

        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/feature' element={<Feature />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/connect' element={<Connect />} />
            <Route path='/dashboard' element={<PrivateRoutes><Dashboard /></PrivateRoutes>} /> 
            <Route path='/dashboard-tutor' element={<PrivateRoutes><DashboardTutor /></PrivateRoutes>} />
            <Route path='/tutor/my-course/:id' element={<PrivateRoutes><CourseDetailTutor /></PrivateRoutes>} />
            <Route path='/student/course/:id' element={<PrivateRoutes><CourseDetailStudent /></PrivateRoutes>} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
