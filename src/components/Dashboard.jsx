import LocationMap from './LocationMap'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import TutorCard from './dashboard-components/TutorCard'
import CourseCard from './dashboard-components/CourseCard'

const Dashboard = () => {

  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

useEffect(() => {
  const fetchTutors = async () => {
  try {
    const token = localStorage.getItem('token');
    if (!token) {
        console.log("No token found, user is not logged in.");
        return navigate('/');
    }

    const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/protected/get-all-courses`, {
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
    setCourses(data);

  } catch (error) {
    console.error('Error fetching courses:', error);
  }
};

  fetchTutors();
}, [navigate]);

  return (
    <div className='w-[100vw] h-[100vh] flex justify-center items-center'>
      {/* <LocationMap /> */}
      <div className='w-full h-[70vh] border border-amber-400 flex flex-wrap gap-x-3 justify-center relative'>
        {
          courses.map(course => (
            <CourseCard key={course._id} course={course} />
          ))
        }
      </div>
    </div>
  )
}

export default Dashboard
