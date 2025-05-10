import React from 'react'

const TutorCard = ({ tutor }) => {
  return (
    <div className='w-[300px] h-[400px] rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden'>
      {/* Tutor Image */}
      <div className='h-[200px] w-full bg-gray-200 overflow-hidden'>
        <img 
          src={tutor.avatar || 'https://via.placeholder.com/200'} 
          alt={`${tutor.username}'s profile`}
          className='w-full h-full object-cover'
        />
      </div>
      
      {/* Tutor Info */}
      <div className='p-4 flex-1 flex flex-col'>
        <h3 className='text-xl font-semibold text-gray-800'>{tutor.username}</h3>
        <p className='text-sm text-gray-600 mt-1'>{tutor.subject || 'Subject not specified'}</p>
        
        {/* Experience and Rating */}
        <div className='mt-3 flex items-center gap-4'>
          <span className='text-sm text-gray-600'>
            Experience: {tutor.experience || '1'} years
          </span>
          <span className='text-sm text-gray-600 flex items-center'>
            Rating: {tutor.rating || '4.5'} ⭐
          </span>
        </div>
        
        {/* Short Bio */}
        <p className='mt-3 text-sm text-gray-700 flex-1'>
          {tutor.bio || 'Professional tutor dedicated to helping students achieve their academic goals.'}
        </p>
        
        {/* Contact Button */}
        <button className='mt-4 w-full bg-purple-400 text-white py-2 rounded-md hover:cursor-pointer hover:bg-purple-600 transition-colors duration-300'>
          Contact Tutor
        </button>
      </div>
    </div>
  )
}

export default TutorCard