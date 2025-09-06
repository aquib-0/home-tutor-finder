import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../home.css'


const HeroSection = () => {
    const navigate = useNavigate();
  return (
    <div className="h-[100vh] landing_bg">
      <div className="h-full flex justify-center items-center backdrop-blur-xs">
        <div className="w-[100vw] md:w-[80vw] px-4 flex flex-col items-center justify-center gap-y-2 md:gap-y-10">
          <h1 className="mb-2 md:mb-7 text-lg md:text-4xl font-bold text-white">
            Search for a Tutor
          </h1>
          <p className="text-purple-400 text-md md:text-2xl text-center md:text-start">
            Reach thousands of tutors with our powerful tool
          </p>
          <div className="flex flex-wrap justify-center gap-y-2">
            <button
              className="text-purple-400 bg-white p-2 md:p-4 rounded-2xl hover:cursor-pointer"
              onClick={() => {
                navigate("/feature");
              }}
            >
              Explore instructor features
            </button>
            <button
              className="text-white bg-purple-400 p-2 md:p-4 rounded-2xl hover:cursor-pointer"
              onClick={() => {
                navigate("/tutor-login");
              }}
            >
              Are you a tutor ?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
