import React, {useEffect} from 'react';
import { gsap } from 'gsap';

const Projects = () => {
    useEffect(() => {
      gsap.to(".soon-text", {
        opacity: 0,
        duration: 0.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }, []);
  return (
    <>
        <div className='flex items-center max-md:flex-col justify-center md:gap-4 mb-8 w-1/2 mx-auto'>
        <p className="text-x-large xxl:text-[1.5rem] leading-14"><span className='text-dark-green font-bold'>I am currently working on my own projects</span>, and I will soon showcase them on this page so you can become more familiar with my skills.</p>
        </div>
        <span className="block text-[3rem] md:text-[5rem] font-medium text-dark-green/90 soon-text">Coming soon...</span>
      </>
  );
};

export default Projects;