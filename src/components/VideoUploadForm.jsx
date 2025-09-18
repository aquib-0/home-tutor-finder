import React, { useState } from 'react';

function VideoUploadForm() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission
    
    if (!file) {
      setMessage('Please select a video file to upload.');
      return;
    }

    setIsLoading(true);
    setMessage('Uploading video... Please wait.');

    // FormData is used to send files and text fields together
    const formData = new FormData();
    formData.append('videoFile', file); // 'videoFile' must match the name in your multer middleware
    formData.append('title', title);

    try {
      const token = localStorage.getItem('token'); // Or wherever you store your token

      const response = await fetch('/api/protected/upload-to-drive', {
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

      setMessage(`Success! Video uploaded. URL: ${data.video.videoUrl}`);
      setFile(null);
      setTitle('');

    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h2>Upload to Google Drive 📹</h2>
      <form onSubmit={handleSubmit} className='w-[60%] flex flex-col justify-center items-center px-3 py-6 gap-y-3 border border-amber-600'>
        <div>
          <label htmlFor="title">Video Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            placeholder="My Awesome Video"
            required
            className='border border-black px-4 py-1 rounded-md'
          />
        </div>
        <br />
        <div>
          <label htmlFor="videoFile">Select Video:</label>
          <input
            type="file"
            id="videoFile"
            accept="video/*" // Restrict to video files
            onChange={handleFileChange}
            required
            className='border border-black py-1 rounded-md hover:cursor-pointer text-center'
          />
        </div>
        <br />
        <button type="submit" disabled={isLoading} className='border border-black px-4 py-1 rounded-md hover:cursor-pointer'>
          {isLoading ? 'Uploading...' : 'Upload 📤'}
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default VideoUploadForm;