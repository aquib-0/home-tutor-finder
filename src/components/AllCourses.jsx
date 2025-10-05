import React from 'react'
import { useLocation } from 'react-router-dom';
import CourseCard from './dashboard-components/CourseCard';
import { CiFilter } from "react-icons/ci";

const AllCourses = () => {
  const location = useLocation();
  const courses = location.state?.courses;
  return (
    <div className='w-[100vw] flex flex-col py-20 px-3'>
      <div className='w-full flex justify-between items-center py-3 px-3 mb-2 rounded-md bg-gray-300'>
        <span>Filter By:</span>
        <span><CiFilter /></span>
      </div>
      <div className='w-full flex gap-x-3 flex-wrap gap-y-3'>
        {
        courses.map(course => (
            <CourseCard key={course._id} course={course} />
          ))
        }
      </div>
    </div>
  )
};

export default AllCourses
