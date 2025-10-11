import LocationMap from './LocationMap'
import { useState, useEffect } from 'react'
import { Navigate, useNavigate, Link } from 'react-router-dom'
import { MdKeyboardArrowRight } from "react-icons/md";
import TutorCard from './dashboard-components/TutorCard'
import CourseCard from './dashboard-components/CourseCard'

const Dashboard = () => {

  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

useEffect(() => {
  const fetchCourses = async () => {
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

  fetchCourses();
}, [navigate]);

  return (
    <div className='w-[100vw] flex flex-col justify-center items-start px-6 py-20'>
      {/* <LocationMap /> */}
      <h1 className='text-3xl font-bold py-5 text-gray-400'>Dashboard</h1>
      <Link to='/all-courses' className='font-bold text-2xl underline flex items-end mb-3'>All Courses<span><MdKeyboardArrowRight size={28} /></span></Link>
      <div className='w-full flex gap-x-16 justify-center items-start relative overflow-hidden border-y py-2 bg-gray-200'>
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
