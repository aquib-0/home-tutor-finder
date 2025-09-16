import LocationMap from './LocationMap'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import TutorCard from './dashboard-components/TutorCard'

const Dashboard = () => {

  const navigate = useNavigate();
  const [tutors, setTutors] = useState([]);

useEffect(() => {
  const fetchTutors = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
        console.log("No token found, user is not logged in.");
        return navigate('/');
    }

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/protected/tutors`, {
      method: 'GET',
      headers: {
        'x-auth-token': token,
      },
    });
    if (!response.ok) {
        const errorData = await response.json();
        console.error("Error fetching tutors:", errorData);

        if (response.status === 401) {
          // invalid/expired token → logout and redirect
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          navigate('/');
        }
        return;
      }
    const data = await response.json();
    console.log(data);
    setTutors(data);

  } catch (error) {
    console.error('Error fetching tutors:', error);
  }
};

  fetchTutors();
}, [navigate]);

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center items-center text-2xl font-bold gap-y-10 overflow-y-scroll'>
      <LocationMap />
      <div className='w-full h-[430px] flex flex-wrap gap-x-10 mb-14 border-2 border-amber-700'>
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
