import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import PrevButton from './PrevButton';
import Form from "./Form";
const Portfolio = () => {
  return ( 
    <div className='section h-full min-w-full w-full flex justify-start items-center m-auto flex-col px-4 md:px-8 max-md:pb-8 max-md:mb-8' id="contact-me">
            <div className="wrapper md:min-w-full md:w-full text-center flex-1 flex items-center">
            <div className="content w-full h-full">
            <div className='top-part md:h-[25%] flex flex-col justify-end'>
              <h1 className='text-h1-mobile md:text-h1 mb-8'><span className='text-dark-green font-medium'>C</span>ontact <span className='text-dark-green font-medium'>M</span>e</h1>
            </div>
            <div className='bottom-part md:h-[75%]'>
              <Form />
            </div>
            </div>
            </div>
            <div className='max-md:hidden flex mt-auto w-full'>
              <PrevButton text="Portfolio" link="#portfolio" />
            </div>
          
    </div>
  );
};

export default Portfolio;