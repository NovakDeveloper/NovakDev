import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NextButton from './NextButton';


const Home = () => {
  const introRef = useRef(null);
  useEffect(() => {
    const introElement = introRef.current;
    gsap.set(introElement, { opacity: 0 });
    gsap.to(introElement, { opacity: 1, duration: 2, delay: 0.5 });
  }, []);
  return ( 
    <div className='section md:h-full md:min-w-full md:w-full flex justify-start items-center m-auto flex-col px-4 md:px-8 max-md:py-8 max-md:mt-8 md:min-h-[49rem] max-md:border-b max-md:rounded-3xl max-md:border-dark-green' id="home">
        <div ref={introRef} className="intro text-center pt-8 md:w-3/4 flex flex-col items-center justify-center flex-1">
            <h1 className='text-h1-mobile md:text-h1 mb-8'>Hi there!  I am <span className='text-dark-green font-bold'>Valeria Novak</span> 👋</h1>
            <p className="text-x-large xxl:text-[1.875rem] leading-14"><span className='text-dark-green font-medium'>Welcome to my digital realm</span>, where creativity meets craftsmanship and innovation knows no bounds.</p><br />
            <p className="text-x-large xxl:text-[1.875rem] leading-14"><span className='text-dark-green font-medium'>As a dedicated Web Developer</span>, I invite you to explore the boundless possibilities of the online world through my lens.</p>
        </div>
        <div className="max-md:hidden flex mt-auto w-full">
            <NextButton text="About me" link="#about-me" />
        </div>
    </div>
  );
};

export default Home;