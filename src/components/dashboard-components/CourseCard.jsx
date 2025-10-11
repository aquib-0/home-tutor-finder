import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const CourseCard = ({course}) => {
  const {user} = useAuth();
  const [fetchPath, setFetchPath] = useState('');
  const location = useLocation();
  const path = location.pathname;
  useEffect(()=>{
    const setFetchUrl = ()=>{
      //use user.user.role to check if user is student or tutor
      if(user.user.role === `Student`)
      {
        setFetchPath('/student/course')
      }
      else if(user.user.role === `Tutor`)
      {
        setFetchPath('/tutor/my-course')
      }
    }
    setFetchUrl();
  }, []);

  return (
    <Link to={`${fetchPath}/${course._id}`} state={{course}}>
      <div className="w-[20vw] h-[50vh] rounded-lg border border-gray-200 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">
        {/* Course Image */}
        <div className="h-[50%] w-full bg-gray-200 overflow-hidden">
          <img
            src={course.authorDp}
            alt={course.courseName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tutor Info */}
        <div className="p-4 flex flex-col bg-white h-[50%]">
          <h3 className="text-sm text-gray-800">
            <span className="font-bold">Course:</span>{" "}
            {course.courseName || "Subject not specified"}
          </h3>
          <h4 className="text-sm text-gray-500">
            <span className="font-bold">Author:</span> {course.authorName}
          </h4>
          <p className="text-sm text-gray-500 flex-1">
            <span className="font-bold">Description:</span>{" "}
            {course.courseDescription || "Course description."}
          </p>
          <h4 className="text-sm text-gray-500">
            <span className="font-bold">Enrolled:</span>{" "}
            {course.enrolledStudentsCount} student's
          </h4>
        </div>
      </div>
    </Link>
  );
}

export default CourseCard
