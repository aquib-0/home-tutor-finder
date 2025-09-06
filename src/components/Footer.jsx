import React from 'react'
import { FaGraduationCap } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './home.css'

const Footer = () => {
  return (
    <div className='h-[70vh] bg-white flex flex-col items-center justify-center gap-y-4 mt-14'>
        <div className='text-2xl font-bold text-neutral-600 flex items-center gap-x-2 mb-16'>
            <FaGraduationCap size={32} fill='#8482e6' /> Home Tutor Finder
        </div>
        <div className='w-full md:w-[70vw] flex justify-evenly gap-x-3'>
            <div className='flex flex-col gap-y-3'>
                <h1 className='font-bold mb-2 text-xs sm:text-md md:text-2xl'>Product</h1>
                <Link className='text-xs sm:text-md md:text-lg'>Features</Link>
                <Link className='text-xs sm:text-md md:text-lg'>Pricing</Link>
            </div>
            <div className='flex flex-col gap-y-3'>
                <h1 className='font-bold mb-2 text-xs sm:text-md md:text-2xl'>Resources</h1>
                <Link className='text-xs sm:text-md md:text-lg'>Blogs</Link>
                <Link className='text-xs sm:text-md md:text-lg'>User guides</Link>
                <Link className='text-xs sm:text-md md:text-lg'>Webinars</Link>
            </div>
            <div className='flex flex-col gap-y-3'>
                <h1 className='font-bold mb-2 text-xs sm:text-md md:text-2xl'>Company</h1>
                <Link className='text-xs sm:text-md md:text-lg'>About Us</Link>
                <Link className='text-xs sm:text-md md:text-lg'>Contact Us</Link>
            </div>
            <div className='flex flex-col gap-y-3'>
                <h1 className='font-bold mb-2 text-xs sm:text-md md:text-2xl'>Plans & Pricing</h1>
                <Link className='text-xs sm:text-md md:text-lg'>Personal</Link>
                <Link className='text-xs sm:text-md md:text-lg'>Start up</Link>
                <Link className='text-xs sm:text-md md:text-lg'>Organization</Link>
            </div>
        </div>
        <div className='border-t border-black mt-8 w-[90vw] h-[10vh] flex justify-end items-center'>
            <div className='flex items-center justify-around gap-x-4'>
                <div className='w-[40px] h-[40px] rounded-full facebook'></div>
                <div className='w-[40px] h-[40px] rounded-full instagram'></div>
            </div>
        </div>
    </div>
  )
}

export default Footer
