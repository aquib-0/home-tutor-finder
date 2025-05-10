import React from 'react'
import './steps.css'

const Steps = () => {
  return (
    <div className='h-[100vh] flex flex-col items-center justify-center gap-y-3 bg-purple-100'>
        <span className='text-gray-400 text-lg'>How it works</span>
        <h1 className='text-3xl font-bold'>Start in 3 Easy Steps</h1>
        <div className='h-[70%] flex justify-around items-center gap-x-14'>
            <div className='w-[25vw] h-[30vh] rounded-md flex flex-col items-start gap-y-3 p-3 bg-white self-start relative'>
                <h1 className='text-2xl text-purple-400 font-bold'>1</h1>
                <h1 className='text-xl font-bold'>Sign Up</h1>
                <p className='text-gray-400 text-sm'>Signup as student.</p>
                <div className='arrow absolute top-10 -right-14 rotate-60 h-[70px] w-[70px]'></div>
            </div>
            
            <div className='w-[25vw] h-[30vh] rounded-md flex flex-col items-start gap-y-3 p-3 bg-white relative'>
                <h1 className='text-2xl text-teal-400 font-bold'>2</h1>
                <h1 className='text-xl font-bold'>Set up your region</h1>
                <p className='text-gray-400 text-sm'>Select the region where you want to take the classes, a high popullation density region is prefferable.</p>
                <div className='arrow absolute top-10 -right-14 rotate-60 h-[70px] w-[70px]'></div>
            </div>
            
            <div className='w-[25vw] h-[30vh] rounded-md flex flex-col items-start gap-y-3 p-3 bg-white self-end'>
                <h1 className='text-2xl text-blue-600 font-bold'>3</h1>
                <h1 className='text-xl font-bold'>Search for a tutor</h1>
                <p className='text-gray-400 text-sm'>Search for tutors online, based on specific subjects and tuition timings. Discuss the fees structure with your tutor.</p>
            </div>
            
        </div>
    </div>
  )
}

export default Steps
