import React from 'react'
import { useAuth } from '../context/AuthContext'
import { useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";

const UploadCourseForm = () => {
    const { user } = useAuth();
    const [courseName, setCourseName] = useState('');
    const [courseDescription, setCourseDescription] = useState('');
    const [courseSyllabus, setCourseSyllabus] = useState('');
    const [courseOutcomes, setCourseOutcomes] = useState('');
    const [video, setVideo] = useState(null);
    const [videoThumbnail, setVideoThumbnail] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    
    if (!video) {
      // setMessage('Please select a video file to upload.');
      console.log("please select a video")
      return;
    }

    setIsLoading(true);

    // FormData is used to send files and text fields together
    const formData = new FormData();
    formData.append('videoFile', video); // 'videoFile' must match the name in your multer middleware
    formData.append('authorName', user.user.username);
    formData.append('authorEmail', user.user.email);
    formData.append('authorDp', user.user.avatar);
    formData.append('courseName', courseName);
    formData.append('courseDescription', courseDescription);
    formData.append('courseSyllabus', courseSyllabus);
    formData.append('courseOutcome', courseOutcomes);
    formData.append('videoThumbnail', videoThumbnail);
    // formData.append('video', video);

    try {
      const token = localStorage.getItem('token'); // Or wherever you store your token

      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/protected/upload-to-drive`, {
        method: 'POST',
        headers: {
          // Use the auth header your backend expects
          'x-auth-token': token,
        },
        body: formData, // The FormData object
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Failed to upload video.');
      }

    //   setMessage(`Success! Video uploaded. URL: ${data.video.videoUrl}`);

    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseForm = ()=>{
    const myform = document.getElementById('upload-course-form');
    myform.style.display = 'none';
  }
    
  return (
    <div id='upload-course-form' className='w-[80vw] bg-gray-200 rounded-md hidden flex-col items-center justify-center border border-amber-700 z-10 absolute'>
      <div className='flex justify-between w-full py-1 px-3'>
        <h1></h1>
        <h1 className='text-2xl font-bold'>Upload New Course</h1>
        <button onClick={handleCloseForm} className='hover:cursor-pointer'><IoCloseOutline size={28} /></button>
      </div>
      <form onSubmit={handleSubmit} className='w-[80%] h-[80vh] flex flex-col flex-wrap items-start justify-center gap-y-3 p-3'>
        <div className='flex flex-col gap-y-1'>
            <label htmlFor="">Author Name</label>
            <input type="text" value={user.user.username} readOnly className='border text-black rounded-md px-3 py-1' />
        </div>

        <div className='flex flex-col gap-y-1'>
            <label htmlFor="">Author Email</label>
            <input type="text" value={user.user.email} readOnly className='border text-black rounded-md px-3 py-1' />
        </div>

        <div className='flex flex-col gap-y-1'>
            <label htmlFor="">Author Display Picture</label>
            <input type="text" value={user.user.avatar} readOnly className='border text-black rounded-md px-3 py-1' />
        </div>

        <div className='flex flex-col gap-y-1'>
            <label htmlFor="">Course Name</label>
            <input type="text" value={courseName} onChange={(e)=> setCourseName(e.target.value)} placeholder='Enter course name' className='border text-black rounded-md px-3 py-1' />
        </div>

        <div className='flex flex-col gap-y-1'>
            <label htmlFor="">Course Description</label>
            <input type="text" value={courseDescription} onChange={(e)=> setCourseDescription(e.target.value)} placeholder='Enter course description' className='border text-black rounded-md px-3 py-1' />
        </div>

        <div className='flex flex-col gap-y-1'>
            <label htmlFor="">Course Syllabus</label>
            <input type="text" value={courseSyllabus} onChange={(e)=> setCourseSyllabus(e.target.value)} placeholder='Enter course Syllabus' className='border text-black rounded-md px-3 py-1' />
        </div>

        <div className='flex flex-col gap-y-1'>
            <label htmlFor="">Course Outcomes</label>
            <input type="text" value={courseOutcomes} onChange={(e)=> setCourseOutcomes(e.target.value)} placeholder='Enter course outcomes' className='border text-black rounded-md px-3 py-1' />
        </div>

        <div className='flex flex-col gap-y-1'>
            <label htmlFor="">Course Intro Video</label>
            <input type="file" accept='video/*' onChange={(e)=> setVideo(e.target.files[0])} placeholder='Enter introduction video' className='border text-black rounded-md px-3 py-1' />
        </div>

        <div className='flex flex-col gap-y-1'>
            <label htmlFor="">Video Thumbnail</label>
            <input type="text" value={videoThumbnail} onChange={(e)=> setVideoThumbnail(e.target.value)} placeholder='video-thumbnail' className='border text-black rounded-md px-3 py-1' />
        </div>

        <div className='flex flex-col gap-y-1'>
            {/* <input type="submit" placeholder='Submit' className='border text-black rounded-md px-3 py-1 bg-gray-400 hover:cursor-pointer' /> */}
            <button type='submit' disabled={isLoading} className='border text-black rounded-md px-3 py-1 bg-gray-400 hover:cursor-pointer'>
                {isLoading ? 'Uploading...' : 'Upload'}
            </button>
        </div>
      </form>
    </div>
  )
}

export default UploadCourseForm
