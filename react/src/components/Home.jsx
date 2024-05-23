import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NextButton from './NextButton';


const Home = ({handleButtonClick}) => {
  const introRef = useRef(null);
  useEffect(() => {
    const introElement = introRef.current;
    gsap.set(introElement, { opacity: 0 });
    gsap.to(introElement, { opacity: 1, duration: 2, delay: 0.5 });
  }, []);
  return ( 
    <div className='section md:h-full md:min-w-full md:w-full flex justify-start items-center m-auto flex-col px-4 md:px-8 max-md:py-8 max-md:mt-8 md:min-h-[49rem] max-md:border-b max-md:rounded-3xl max-md:border-dark-green' id="home">
        <div ref={introRef} className="intro text-center pt-8 md:w-3/4 flex flex-col items-center justify-center flex-1">
            <h1 className='text-h1-mobile md:text-h1 mb-8'><span className='text-dark-green font-bold'>W</span>elcome to my website! 👋</h1>
            <p className="text-x-large xxl:text-[1.5rem] leading-14"><span className='text-dark-green font-bold'>I am delighted to have you here.</span> This space is designed to give you an opportunity to get to know me better. Here, you can explore my background, skills, and the experiences that define my professional journey.</p><br />
            <p className="text-x-large xxl:text-[1.5rem] leading-14">Thank you for stopping by! I hope this helps you get to know me better as a <span className='text-dark-green font-bold'>genuine enthusiast of my craft</span>.<br /> If you have any questions, feel free to ask them <a onClick={handleButtonClick} className="text-dark-green underline" href="#contact-me">here</a>! 💚</p>
        </div>
        <div className="max-md:hidden flex mt-auto w-full">
            <NextButton text="About me" link="#about-me" />
        </div>
    </div>
  );
};

export default Home;