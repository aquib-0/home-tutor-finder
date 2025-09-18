import React from 'react'

const CourseCard = ({course}) => {
  return (
    <div className='w-[300px] h-[400px] rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden'>
      {/* Course Image */}
      <div className='h-[200px] w-full bg-gray-200 overflow-hidden'>
        <img 
          src={course.authorDp || 'https://via.placeholder.com/200'} 
          alt={`${course.courseName}`}
          className='w-full h-full object-cover'
        />
      </div>
      
      {/* Tutor Info */}
      <div className='p-4 flex-1 flex flex-col'>
        <h3 className='text-xl font-semibold text-gray-800'>{course.authorName}</h3>
        <p className='text-sm text-gray-600 mt-1'>{course.courseName || 'Subject not specified'}</p>
        
        {/* Experience and Rating */}
        {/* <div className='mt-3 flex items-center gap-4'>
          <span className='text-sm text-gray-600'>
            Experience: {tutor.experience || '1'} years
          </span>
          <span className='text-sm text-gray-600 flex items-center'>
            Rating: {tutor.rating || '4.5'} ⭐
          </span>
        </div> */}
        
        {/* Short Bio */}
        <p className='mt-3 text-sm text-gray-700 flex-1'>
          {course.courseDescription || 'Course description.'}
        </p>
      </div>
    </div>
  )
}

export default CourseCard
