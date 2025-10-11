import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import CourseCard from './dashboard-components/CourseCard';
import { CiFilter } from "react-icons/ci";

const AllCourses = () => {
  const [loading, setLoading] = useState(false);
  const [courses, setCourses] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(()=>{
    setLoading(true);
    const fetchAllCourses = async()=>{
      try{
        const token = localStorage.getItem('token');
        if(!token){
          console.log("No token found");
          navigate('/');
        }
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/protected/get-all-courses`, {
          method: 'GET',
          headers: {
            'x-auth-token' : token,
            'Content-Type': 'application/json'
          },
        });
        const data = await response.json();
        if(response.ok)
        {
          console.log(data);
          setCourses(data);
        }
        else{
          console.log(data.message);
        }
      } catch(err)
      {
        console.error(err.message);
      }
    }
    fetchAllCourses();
  }, []);

  return (
    <div className='w-[100vw] flex flex-col py-20 px-3'>
      <div className='w-full flex justify-between items-center py-3 px-3 mb-2 rounded-md bg-gray-300'>
        <span>Filter By:</span>
        <span><CiFilter /></span>
      </div>
      <div className='w-full flex gap-x-18 flex-wrap gap-y-3'>
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
