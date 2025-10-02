import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const CourseDetailStudent = () => {
    const {user} = useAuth();
    const [enrolled, setEnrolled] = useState(false);
    const location = useLocation();
    const course = location.state?.course;

    useEffect(()=>{
        const isEnrolled = async()=>{
            try{
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/protected/get-enrolled-courses?user_id=${user.user.id}`, {
                    method: 'GET',
                    headers: {
                        'x-auth-token': localStorage.getItem('token'),
                        'Content-Type': 'application/json',
                    },
                });
                const data = await res.json();
                const foundCourses = Object.values(data);
                console.log(foundCourses);
                if(res.ok)
                {
                    const alreadyEnrolled = foundCourses.includes(course._id);
                    if(alreadyEnrolled) setEnrolled(true);
                }
                else{
                  console.log("Some error occurred");
                  console.log(data);
                  setEnrolled(false);
                }
            } catch(err)
            {
                console.log(err.message);
            }
        }

        isEnrolled();
    }, []);

    const enrollInCourse = async()=>{
        const token = localStorage.getItem('token');
        try{
            const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/protected/enroll-in-course?studentId=${user.user.id}&courseId=${course._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'x-auth-token': token,
                },
                // body: JSON.stringify({studentId: user.user.id, courseId: course._id}),
            });
            const data = await response.json();
            if(response.ok)
            {
                alert('Enrolled in course successfully');
                console.log(data);
                window.location.reload();
            }
            else{
                console.log(data);
            }
        } catch(err)
        {
            console.error(err.message);
        }
    };

  return (
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
      {
        enrolled? (<><span className='self-end mt-5 rounded-md px-4 py-2'>Already enrolled in course!</span></>) : (<button className='self-end mt-5 rounded-md px-4 py-2 bg-green-400 hover:cursor-pointer text-white' onClick={enrollInCourse}>Enroll in Course</button>)
      }
    </div>
  )
}

export default CourseDetailStudent
