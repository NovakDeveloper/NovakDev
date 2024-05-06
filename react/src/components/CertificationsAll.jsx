import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import CertificationCard from './CertificationCard';
import Button from "./Button";

const CertificationsAll = ({openAllCertifications, onClick}) => {
  const certificationsRef = useRef(null);
  useEffect(() => {
    const certificationsElement = certificationsRef.current;
    // Устанавливаем начальное состояние элемента (opacity: 0)
    gsap.set(certificationsElement, { opacity: 0 });

    // Создаем анимацию появления элемента (opacity: 1) с помощью GSAP
    gsap.to(certificationsElement, {
      opacity: 1,
      duration: 1, // Длительность анимации в секундах
      ease: "power2.out" // Эффект анимации
    });
  }, []);

  const handleCloseButtonClick = () => {
    const certificationsElement = certificationsRef.current;
    // Создаем анимацию исчезновения элемента (opacity: 0) с помощью GSAP
    gsap.to(certificationsElement, {
      opacity: 0,
      duration: 1, // Длительность анимации в секундах
      ease: "power2.out", // Эффект анимации
      onComplete: onClick // Вызываем функцию для закрытия компонента после завершения анимации
    });
  };
  return (openAllCertifications &&
    <div className='fixed top-0 left-0 w-full h-full p-16 z-10 bg-opacity-black' ref={certificationsRef}>
      <div className='wrapper bg-almost-white border border-dark-green rounded h-full overflow-hidden flex flex-col'>
      <span onClick={handleCloseButtonClick} id="close-icon" className='absolute top-8 right-8 text-[2rem] border border-dark-green rounded-full bg-almost-white w-[3rem] h-[3rem] flex justify-center items-center cursor-pointer'>
      <svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Menu / Close_SM">
        <path id="Vector" d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        </svg>
      </span>
      <div className='flex items-center max-md:flex-col justify-center md:gap-4 p-8'>
        <h1 className='text-mobile-h1 md:text-h1'>All certifications</h1>                
      </div>
      <p className='text-x-large'>Here, you can explore all the certifications I have acquired throughout my professional journey.</p>
      <div className={`wrapper h-full relative overflow-auto`}>
      <div className={`certifications w-full grid gap-4 sm:grid-cols-2 md:grid-cols-4 absolute top-0 left-0 p-8`}>
          <CertificationCard src={'src/images/certifications/Figma.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"Figma, UI/UX Design"} />
          <CertificationCard src={'src/images/certifications/Wordpress.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"PHP, Wordpress, SQL"}/>
          <CertificationCard src={'src/images/certifications/CMS.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"PHP, CMS, SQL"}/>
          <CertificationCard src={'src/images/certifications/Tailwind.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"CSS Framework: Tailwind"}/>
          <CertificationCard src={'src/images/certifications/Sass.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"Sass, SCSS"}/>
          <CertificationCard src={'src/images/certifications/Figma.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"Figma, UI/UX Design"} />
          <CertificationCard src={'src/images/certifications/Wordpress.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"PHP, Wordpress, SQL"}/>
          <CertificationCard src={'src/images/certifications/CMS.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"PHP, CMS, SQL"}/>
          <CertificationCard src={'src/images/certifications/Tailwind.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"CSS Framework: Tailwind"}/>
          <CertificationCard src={'src/images/certifications/Sass.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"Sass, SCSS"}/>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CertificationsAll;
