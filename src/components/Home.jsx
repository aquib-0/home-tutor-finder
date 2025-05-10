import React from 'react'
import './home.css'
import HeroSection from './homePage-components/HeroSection';
import FeatureSection from './homePage-components/FeatureSection';
import Steps from './homePage-components/Steps';
import StartLearning from './homePage-components/StartLearning';
import Footer from './Footer';
// import { useEffect, useState } from 'react';

const Home = () => {
    // const [message, setMessage] = useState('');
    // useEffect(()=>{
    //     fetch('/api/message')
    //     .then((res)=> res.json())
    //     .then((data)=> setMessage(data.message))
    //     .catch((err)=> console.log(err));
    // }, []);

    return (
        <>
            <div className='overflow-y-scroll overflow-x-hidden'>
                <HeroSection />
                <FeatureSection />
                <Steps />
                {/*...Reviews Section...*/}
                <StartLearning />
                <Footer />
            </div>
        </>
    )
}

export default Home
