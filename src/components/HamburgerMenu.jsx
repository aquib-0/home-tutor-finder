import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";

const HamburgerMenu = ({menuOpen, setMenuOpen, user, handleLogout}) => {

    const navigate = useNavigate();
  return (
    <>
    <div className='lg:hidden z-10 h-full flex flex-col justify-center'>
        <button onClick={() => setMenuOpen(!menuOpen)} className='z-20 fixed right-5'>
            {menuOpen ? <IoCloseOutline size={28} /> : <RxHamburgerMenu size={28} />}
        </button>
        
        {menuOpen && (
        <div className='flex flex-col w-[100vw] justify-center items-center gap-y-10 p-8 text-xl lg:text-2xl bg-fuchsia-100 absolute top-20 left-0'>
            <Link to='/' onClick={()=>setMenuOpen(false)} className='hover:text-purple-500 transition-all ease-in-out'>Home</Link>
            <Link to='/feature' onClick={()=>setMenuOpen(false)} className='hover:text-purple-500 transition-all ease-in-out'>Feature</Link>
            <Link to='/connect' onClick={()=>setMenuOpen(false)} className='hover:text-purple-500 transition-all ease-in-out'>Connect</Link>
            <Link to='/contact' onClick={()=>setMenuOpen(false)} className='hover:text-purple-500 transition-all ease-in-out'>Contact Us</Link>
            {
              user? (
              <>
                <button className='hover:cursor-pointer bg-purple-400 text-white rounded-xl px-10 py-2' onClick={()=>{handleLogout(); setMenuOpen(false);}}>Logout</button>
              </>
              ) : (
              <>
                <button className='hover:cursor-pointer bg-purple-400 text-white rounded-xl px-10 py-2' onClick={()=>{navigate('/student-login'); setMenuOpen(false);}}>Register</button>
                <button className='hover:cursor-pointer bg-gray-300 text-purple-400 rounded-xl px-10 py-2' onClick={()=>{navigate('/student-login'); setMenuOpen(false);}}>Sign in</button>
              </>)
            }
        </div>
    )}
    </div>
    </>
  )
}

export default HamburgerMenu
