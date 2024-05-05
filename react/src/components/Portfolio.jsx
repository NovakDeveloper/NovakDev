import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Button from './Button';
import Certifications from './Certifications';
import Timelines from './Timelines';

const Portfolio = () => {
  return ( 
    <div className='section h-full min-w-full w-full flex justify-start items-center m-auto flex-col px-4 md:px-8 max-md:pb-8 max-md:mb-8' id="portfolio">
            <div className="wrapper md:min-w-full md:w-full text-center flex-1 flex items-center">
            <div className="content w-full h-full">
            <div className='top-part md:h-[25%] flex flex-col justify-end'>
              <h1 className='text-h1-mobile md:text-h1 mb-8'><span className='text-dark-green font-medium'>P</span>ortfolio</h1>
            </div>
            <div className='bottom-part md:h-[75%]'>
              <Certifications />
            </div>
            </div>
            </div>
            <div className='max-md:hidden flex mt-auto w-full'>
              <PrevButton text="Professional Path" link="#professional-path" />
              <NextButton text="Contact me" link="#contact-me" />
            </div>
          
    </div>
  );
};

export default Portfolio;