import React from 'react'
import { useParams, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const CourseDetailTutor = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const {user} = useAuth();
    const {id} = useParams();
    const location = useLocation();
    const course = location.state?.course;
    const deleteCourse = async()=>{
        const token = localStorage.getItem('token');
        try{
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/protected/delete-course`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-auth-token': token,
            },
            body: JSON.stringify({user_id: user.user.id, course_id: course._id}),
        });
        const data = await response.json();
        if(response.ok)
        {
            console.log(data);
            alert('Course deleted successfully');
            navigate('/dashboard-tutor');
        }
        else{
            alert('Request returned an error!');
            console.log(data);
        }
        } catch(err)
        {
            console.error(err.message);
        }
    };

  return (
    loading? (<><div className='w-[100vw] h-[100vh] flex justify-center items-center'>Loading...</div></>) : (
        <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-start px-2'>
      <div className='w-full flex justify-start bg-gray-300'>
        <img src={course.authorDp} alt="authordp" width='80px' />
      </div>
      <div className='w-full'>
        <span className='font-bold'>Author - </span> {course.authorName}
      </div>
      <div className='w-full bg-gray-300'>
        <span className='font-bold'>Author Email - </span> {course.authorEmail}
      </div>
      <div className='w-full flex flex-col'>
        <span className='font-bold'>Description - </span>
        <p>{course.courseDescription}</p>
      </div>
      <div className='w-full flex flex-col bg-gray-300'>
        <span className='font-bold'>Syllabus - </span>
        <p>{course.courseSyllabus}</p>
      </div>
      <div className='w-full flex flex-col'>
        <span className='font-bold'>Course outcomes - </span>
        <p>{course.courseOutcome}</p>
      </div>
      <div className='w-full bg-gray-300'>
        <span>Students enrolled: </span> {course.enrolledStudentsCount}
      </div>
      <button className='self-end mt-5 rounded-md px-4 py-2 bg-red-500 text-white hover:cursor-pointer' onClick={deleteCourse}>Delete course</button>
    </div>
    )
  )
}

export default CourseDetailTutor
