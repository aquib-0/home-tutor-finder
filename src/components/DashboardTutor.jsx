import React from 'react'
import LocationMap from './LocationMap'
import { useState, useEffect } from 'react'
import TutorCard from './dashboard-components/TutorCard'

const DashboardTutor = () => {

  const [students, setStudents] = useState([]);

useEffect(() => {
  const fetchTutors = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/students`);
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error('Error fetching tutors:', error);
    }
  };

  fetchTutors();
}, []);

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center text-2xl font-bold gap-y-10 overflow-y-scroll'>
      <LocationMap />
      <div className='w-full h-auto flex flex-wrap gap-x-10 gap-y-10 mb-14 px-5'>
        {
          students.map(student => (
            <TutorCard key={student._id} tutor={student} />
          ))
        }
      </div>
    </div>
  )
}

export default DashboardTutor
