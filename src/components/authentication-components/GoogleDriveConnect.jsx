import React from 'react'


const GoogleDriveConnect = () => {
    const handleConnect = async () => {
    try {

        const token = localStorage.getItem('token');
        if(!token)
        {
            console.error("Authentication token not found.");
            return;
        }

      // 1. Fetch the authorization URL from your backend
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/auth/google`,{
        headers: {
            'x-auth-token': token
        }
      });
      if(!response.ok)
      {
        throw new Error(`Server responded with status: ${response.status}`);
      }
      const data = await response.json();
      

      if(data.url)
        {
        // 2. Redirect the user to Google's consent screen
        window.location.href = data.url;
        }
        else{
            console.error("Backend did not return a url!");
        }
    } catch (error) {
      console.error('Error connecting to Google Drive:', error);
    }
  };

  const handleUploadCourse = ()=>{
    const upload_course_form = document.getElementById('upload-course-form');
    upload_course_form.style.display = 'flex';
  }

  return (
    <div className='w-full h-auto flex justify-end px-3 gap-x-2'>
      <button onClick={handleConnect} className='border border-black px-4 py-1 rounded-md hover:cursor-pointer'>Connect to drive</button>
      <button onClick={handleUploadCourse} className='border border-black px-4 py-1 bg-blue-500 rounded-md text-white font-bold hover:cursor-pointer'>Upload Course +</button>
    </div>
  )
}

export default GoogleDriveConnect;
