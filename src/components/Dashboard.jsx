import React from 'react'
import LocationMap from './LocationMap'
import { useState, useEffect } from 'react'
import TutorCard from './dashboard-components/TutorCard'

const Dashboard = () => {

  const [tutors, setTutors] = useState([]);

useEffect(() => {
  const fetchTutors = async () => {
    try {
      const response = await fetch('http://localhost:5173/api/users/tutors');
      const data = await response.json();
      setTutors(data);
    } catch (error) {
      console.error('Error fetching tutors:', error);
    }
  };

  fetchTutors();
}, []);

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center text-2xl font-bold gap-y-10 overflow-y-scroll'>
      <LocationMap />
      <div className='w-full h-auto flex flex-wrap gap-x-10 mb-14'>
        {
          tutors.map(tutor => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
