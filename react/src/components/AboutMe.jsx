import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
import Button from './Button';
import DownloadButton from './DownloadButton';

const AboutMe = () => {
  const handleButtonClick = (event) => {
    event.preventDefault(); // Отменяем стандартное поведение ссылки
    const targetElementId = event.currentTarget.getAttribute('href'); // Получаем значение атрибута href
    const targetElement = document.querySelector(targetElementId); // Находим элемент, к которому нужно прокрутить
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' }); // Прокручиваем до элемента с плавной анимацией
    }
  };
  return ( 
    <div className='section h-full min-w-full w-full flex justify-start items-center m-auto flex-col px-4 md:px-8 max-md:py-8 md:min-h-[49rem] max-md:border-y max-md:rounded-3xl max-md:border-dark-green' id="about-me">
            <div className="wrapper md:min-w-3/4 md:w-3/4 text-center flex-1 flex items-center">
            <div className="content w-full h-full">
            <div className='top-part md:h-[25%] flex flex-col justify-end'>
              <div className='flex items-center max-md:flex-col justify-center md:gap-4 mb-4'>
                <h1 className='text-h1-mobile md:text-h1'><span className='text-dark-green font-medium'>A</span>bout <span className='text-dark-green font-medium'>M</span>e</h1>
                <DownloadButton fileName="my resume" fileUrl="src/assets/CV/ValeriaNovak-CV.pdf" />
              </div>
            </div>
            <div className='bottom-part md:h-[75%] text-x-large xxl:text-[1.5rem] leading-14'>
              <p>I am an Estonian Developer 🇪🇪 from the beautiful city of Tallinn, a place that inspires me to explore new possibilities and achievements. 🚀</p>
              <br />
              <p>I am proficient in three languages: English, Estonian, and Russian, allowing me to communicate and collaborate easily in a multinational environment.</p>
              <br />
              <p>In the <a className="text-dark-green underline" onClick={handleButtonClick} href="#professional-path">Professional Path tab</a>, you'll discover my journey, achievements, certifications and skills accumulated over years of work and education in the field of information technology.</p>
              <br />
              <p>My thirst for knowledge and drive for improvement know no bounds.
                In my professional journey, every step is filled with diligence and the pursuit of new horizons. 💚</p>
            </div>
            </div>
            </div>
            <div className='max-md:hidden flex mt-auto w-full'>
              <PrevButton text="Home" link="#home" />
              <NextButton text="Professional Path" link="#professional-path" />
            </div>
    </div>
  );
};

export default AboutMe;