import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const CourseDetail = () => {
    const {user} = useAuth();
    const [enrolled, setEnrolled] = useState(false);
    const [isStudent, setIsStudent] = useState(false);
    // user.role=='Tutor'? (setIsStudent(false)) : (setIsStudent(true));

    (isStudent && useEffect(()=>{
        const isEnrolled = async()=>{
            try{
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/protected/student/get-unique-course`, {
                    method: 'GET',
                    headers: {
                        'x-auth-token': localStorage.getItem('token'),
                    },
                    body: JSON.stringify({courseId: id}),
                });
                if(res.ok)
                {
                    setEnrolled(true);
                }
                else{
                  console.log("Some error occurred");
                  setEnrolled(false);
                }
            } catch(err)
            {
                console.log(err.message);
            }
        }

        isEnrolled();
    }, []));

    const {id} = useParams();
    const location = useLocation();
    const course = location.state?.course;

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
        enrolled? (<><span className='self-end mt-5 rounded-md px-4 py-2'>Already enrolled in course!</span></>) : (<button className='self-end mt-5 rounded-md px-4 py-2 bg-green-400 text-white'>Enroll in Course</button>)
      }
    </div>
  )
}

export default CourseDetail
