import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

const AboutMe = () => {

  return ( 
    <div className='section h-full min-w-full w-full flex justify-start items-center m-auto flex-col' id="about-me">
            <div className="wrapper md:min-w-3/4 md:w-3/4 text-center flex-1 flex items-center">
            <div className="content w-full h-full">
            <div className='top-part h-[40%] flex flex-col justify-end'>
              <h1 className='text-h1-mobile md:text-h1 mb-8'><span className='text-dark-green font-medium'>A</span>bout <span className='text-dark-green font-medium'>M</span>e</h1>
            </div>
            <div className='bottom-part h-[60%] text-x-large xxl:text-[1.6rem] leading-14'>
              <p>I am an Estonian Developer 🇪🇪 from the beautiful city of Tallinn, a place that inspires me to explore new possibilities and achievements. 🚀</p>
              <br />
              <p>I am fluent in three languages: English, Estonian, and Russian, allowing me to communicate and collaborate easily in a multinational environment.</p>
              <br />
              <p>In the <a className="text-dark-green underline" href="#professional-path">Professional Path tab</a>, you'll discover my journey, achievements, certifications and skills accumulated over years of work and education in the field of information technology.</p>
              <br />
              <p>My thirst for knowledge and drive for improvement know no bounds.
                In my professional journey, every step is filled with diligence and the pursuit of new horizons. 💚</p>
            </div>
            </div>
            </div>
            <div className='flex mt-auto w-full'>
        <PrevButton text="Home" link="#home" />
        <NextButton text="Professional Path" link="#professional-path" />
        </div>
    </div>
  );
};

export default AboutMe;