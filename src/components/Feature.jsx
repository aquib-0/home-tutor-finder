import React from 'react'
import './feature.css'
import Footer from './Footer'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Feature = () => {
  const location = useLocation();
  useEffect(()=>{
    const hash = window.location.hash;
    if(hash){
      setTimeout(()=>{
        const el = document.querySelector(hash);
      if(el){
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
      }
      }, 1000);
    }
  }, []);
  return (
    <>
    <div className='w-[100vw] h-[40vh] md:h-[80vh] flex justify-center items-center feature-bg'>
      <h1 className='text-5xl text-purple-400 font-bold'>Features</h1>
    </div>
    <div className='w-[100vw] flex flex-col-reverse sm:flex-row sm:justify-center md:justify-between gap-y-2 sm:gap-y-0 mt-20 px-2 md:px-8' id='subject-preferred-courses'>
      <div className='w-full sm:w-[48%] md:w-[40%] flex flex-col'>
        <h1 className='text-xl md:text-3xl font-bold'>Subject Preferred Courses</h1>
        <p className='text-sm md:text-lg font-extralight'>At the very core of our platform lies an unwavering commitment to connecting students with precisely the expertise they seek. We are meticulously building a highly granular and intuitive subject catalog, extending beyond broad categories to encompass niche subtopics and specific skill levels. Our dedication is evident in the robust search and filtering mechanisms we are implementing, empowering students to pinpoint the ideal tutor based on their exact academic needs, whether it's mastering advanced calculus concepts or preparing for a specific board examination. We believe that targeted matching is paramount to effective learning, and our efforts in this area reflect our determination to facilitate meaningful educational connections.</p>
      </div>
      <div className='w-full sm:w-[48%] md:w-[40%] h-64 sm:h-auto subject-preferred-courses'></div>
    </div>
    <div className='w-[100vw] flex flex-col-reverse sm:flex-row-reverse sm:justify-center md:justify-between gap-y-2 sm:gap-y-0 mt-20 px-2 md:px-8' id='engage-learners'>
      <div className='w-full sm:w-[48%] md:w-[40%] flex flex-col items-end'>
        <h1 className='text-xl md:text-3xl font-bold'>Engage Learners</h1>
        <p className='text-sm md:text-lg font-extralight text-end'>We are not simply building a directory; we are crafting a dynamic and enriching learning ecosystem. Our dedication to fostering genuine engagement is reflected in the planned integration of interactive tools that will transform online sessions into collaborative experiences. From shared whiteboards to real-time progress tracking and personalized feedback mechanisms, we are committed to providing the resources necessary for tutors to inspire and guide their students effectively. Our determination lies in ensuring that every interaction facilitated by our platform contributes to a deeper understanding and a more rewarding educational journey.</p>
      </div>
      <div className='w-full sm:w-[48%] md:w-[40%] h-64 sm:h-auto engage-learner'></div>
    </div>
    <div className='w-[100vw] flex flex-col-reverse sm:flex-row sm:justify-center md:justify-between gap-y-2 sm:gap-y-0 mt-20 px-2 md:px-8' id='global-reach'>
      <div className='w-full sm:w-[48%] md:w-[40%] flex flex-col'>
        <h1 className='text-xl md:text-3xl font-bold'>Global Reach</h1>
        <p className='text-sm md:text-lg font-extralight'>Our vision extends far beyond geographical limitations. We are determined to create a truly global learning community, connecting students with exceptional tutors from around the world. By thoughtfully addressing the complexities of time zones and striving for multi-lingual accessibility, we are breaking down barriers to quality education. Our dedication to global reach is driven by the belief that talent and the desire to learn know no borders, and we are committed to building a platform that reflects this interconnected reality.</p>
      </div>
      <div className='w-full sm:w-[48%] md:w-[40%] h-64 sm:h-auto global-reach'></div>
    </div>
    <div className='w-[100vw] flex flex-col-reverse sm:flex-row-reverse sm:justify-center md:justify-between gap-y-2 sm:gap-y-0 my-20 px-2 md:px-8 border-b border-black pb-8' id='flexible-pricing'>
      <div className='w-full sm:w-[48%] md:w-[40%] flex flex-col items-end'>
        <h1 className='text-xl md:text-3xl font-bold'>Flexible Pricing</h1>
        <p className='text-sm md:text-lg font-extralight text-end'>We understand that accessibility to quality education must also be economically viable. Our commitment to flexible pricing models reflects our dedication to catering to the diverse needs and budgets of our student community. By empowering tutors to offer a range of pricing options, from hourly rates to comprehensive package deals and potential trial sessions, we aim to create a marketplace that is both fair to educators and accessible to learners. Our determination is to ensure that financial considerations do not become an insurmountable obstacle to seeking valuable academic support.</p>
      </div>
      <div className='w-full sm:w-[48%] md:w-[40%] h-64 sm:h-auto flexible-pricing'></div>
    </div>
    <Footer />
    </>
  )
}

export default Feature
