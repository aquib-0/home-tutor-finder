import React from 'react'
import LocationMap from './LocationMap'
import GoogleDriveConnect from './authentication-components/GoogleDriveConnect'
import VideoUploadForm from './VideoUploadForm'
import UploadCourseForm from './UploadCourseForm'
import CourseCard from './dashboard-components/CourseCard'
import { useState, useEffect } from 'react'
import TutorCard from './dashboard-components/TutorCard'

const DashboardTutor = () => {

  const [courses, setCourses] = useState([]);

useEffect(() => {
  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        console.log("No token found, user is not logged in.");
        return navigate('/');
    }
      
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/protected/created-courses`,{
        method: 'GET',
        headers: {
          'x-auth-token': localStorage.getItem('token'),
        },
      });
      const data = await response.json();
      setCourses(data);
    } catch (error) {
      console.error('Error fetching tutors:', error);
    }
  };

  fetchCourses();
}, []);

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-start items-center pt-20 gap-y-3 overflow-y-scroll mb-10 relative'>
      {/* <LocationMap /> */}
      <GoogleDriveConnect />
      <div className='w-full h-[70vh] border border-amber-400 flex flex-wrap gap-x-3 justify-center relative'>
        <UploadCourseForm />
        {
          courses.map(course=>(
            <CourseCard key={course._id} course={course} />
          ))
        }
      </div>
      {/* <VideoUploadForm /> */}
    </div>
  )
}

export default DashboardTutor
