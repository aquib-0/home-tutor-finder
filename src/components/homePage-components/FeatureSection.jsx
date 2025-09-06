import React from 'react'
import '../home.css'
import { Link } from 'react-router-dom';
import { LiaLaptopCodeSolid } from "react-icons/lia";
import { GoGraph } from "react-icons/go";
import { IoGlobeOutline } from "react-icons/io5";
import { IoPricetagOutline } from "react-icons/io5";
import FeatureBox from './FeatureBox';

const FeatureSection = () => {
    return (
        <div className='h-auto py-8 md:py-0 md:h-[100vh] flex flex-col items-center justify-center gap-y-5 px-3'>
            <span className='text-xl text-gray-400'>Features</span>
            <h1 className='text-xl md:text-4xl font-bold text-center'>Why choose HomeTutor?</h1>
            <div className='flex flex-wrap items-center justify-center gap-x-4 gap-y-4 mt-8'>
                <Link to='/feature#subject-preferred-courses' className='hover:-translate-y-4 transition-all duration-200'><FeatureBox icon={<LiaLaptopCodeSolid size={32} />} heading='Subject preferred course' para='Easily structure your course with video lessons, assignments and using our drag-and-drop interface' /></Link>

                <Link to='/feature#engage-learners' className='hover:-translate-y-4 transition-all duration-200'><FeatureBox icon={<GoGraph size={32} />} heading='Engage Learners' para='Interactive quizez, student discussions, and detailed analytics to track performance and engagement' /></Link>

                <Link to='/feature#global-reach' className='hover:-translate-y-4 transition-all duration-200'><FeatureBox icon={<IoGlobeOutline size={32} />} heading='Global Reach' para='You can learn from tutors who are abroad' /></Link>
                
                <Link to='/feature#flexible-pricing' className='hover:-translate-y-4 transition-all duration-200'><FeatureBox icon={<IoPricetagOutline size={32} />} heading='Flexible Pricing' para='Choose to offer your course for free or monetize it with competitive pricing options' /></Link>
            </div>
        </div>
    )
}

export default FeatureSection
