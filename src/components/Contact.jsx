import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <>
      <div className='w-[100vw] h-[80vh] contact_bg flex justify-center items-center text-purple-400 font-bold text-5xl'>
        Contact Us
      </div>
      <div className='w-full h-auto flex flex-col justify-center items-center gap-y-16 mb-10'>
        <h1 className='text-4xl font-bold mt-16'>
          Let's start a conversation
        </h1>
        <div className='flex justify-between w-full'>
          <div className='flex flex-col justify-center w-[48%] h-auto border border-black gap-y-4 p-8 rounded-lg'>
            <h1 className='text-3xl font-bold mb-6'>Welcome to HomeTutor!</h1>
            <h2 className='text-2xl'>We're Here For You</h2>
            <p className='text-gray-600'>Looking for the perfect tutor? We're here to help you find the best match for your learning journey.</p>
            
            <h2 className='text-2xl mt-6'>Why Choose Us?</h2>
            <ul className='list-disc pl-6 text-gray-600 space-y-2'>
              <li>Experienced and verified tutors</li>
              <li>Flexible scheduling options</li>
              <li>Personalized learning approach</li>
              <li>Safe and secure platform</li>
            </ul>
            
            <p className='mt-6 text-gray-600'>Have questions? Feel free to reach out using the form, and our team will get back to you within 24 hours!</p>
          </div>

          <div className='flex flex-col w-[48%] h-auto border border-black p-8 rounded-lg'>
            <h2 className='text-2xl font-semibold mb-6'>Send us a Message</h2>
            <form className='flex flex-col gap-y-4'>
              <div className='flex flex-col'>
                <label htmlFor='name' className='mb-2 text-gray-700'>Full Name</label>
                <input 
                  type='text' 
                  id='name' 
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your full name'
                  required
                />
              </div>
              
              <div className='flex flex-col'>
                <label htmlFor='email' className='mb-2 text-gray-700'>Email Address</label>
                <input 
                  type='email' 
                  id='email' 
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Enter your email'
                  required
                />
              </div>
              
              <div className='flex flex-col'>
                <label htmlFor='subject' className='mb-2 text-gray-700'>Subject</label>
                <select 
                  id='subject' 
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                >
                  <option value=''>Select a subject</option>
                  <option value='tutoring'>Find a Tutor</option>
                  <option value='general'>General Inquiry</option>
                  <option value='support'>Technical Support</option>
                  <option value='feedback'>Feedback</option>
                </select>
              </div>
              
              <div className='flex flex-col'>
                <label htmlFor='message' className='mb-2 text-gray-700'>Message</label>
                <textarea 
                  id='message' 
                  rows='4' 
                  className='border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  placeholder='Type your message here...'
                  required
                ></textarea>
              </div>
              
              <button 
                type='submit' 
                className='bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 mt-4'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
