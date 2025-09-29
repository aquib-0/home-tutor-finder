import React from 'react'
import { useNavigate } from 'react-router-dom'

const StartLearning = () => {
    const navigate = useNavigate();
    return (
        <div className='h-[60vh] flex items-center justify-center bg-[#191970]'>
            <div className='h-full w-full px-5 md:px-0 md:w-[60vw] flex flex-col items-center justify-center gap-y-8'>
                <h1 className='text-lg md:text-3xl text-white font-bold'>Ready to start learning?</h1>
                <p className='text-white text-center text-sm'>Tap onto thousands of tutors and learn the subjects that scare you the most, with just a few clicks. Find famous and infamous tutorsabroad with the highest rating, and book appointments with them for further discussions.</p>
                <button className='hover:cursor-pointer bg-purple-400 text-white px-8 py-3 rounded-md w-fit' onClick={()=>{navigate('/login')}}>Start preparing now</button>
            </div>
        </div>
    )
}

export default StartLearning
