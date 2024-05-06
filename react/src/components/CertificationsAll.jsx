import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

import CertificationCard from './CertificationCard';
import Button from "./Button";

const CertificationsAll = () => {
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

  return (
    <div className='fixed top-0 left-0 w-full h-full p-16 z-10 bg-opacity-black' ref={certificationsRef}>
      <div className='wrapper bg-almost-white border border-dark-green rounded h-full overflow-hidden p-8'>
      <div className='flex items-center max-md:flex-col justify-center md:gap-4 mb-8'>
        <h1 className='text-mobile-h1 md:text-h1'>All certifications</h1>                
      </div>
      <p className='mb-4'>Here, you can explore all the certifications I have acquired throughout my professional journey.</p>
      <div className={`wrapper`}>
      <div className={`certifications w-full grid gap-4 sm:grid-cols-2 md:grid-cols-4`}>
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
