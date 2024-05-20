import React from 'react';
import MenuButton from './MenuButton';

import Photo from './Photo';
const Navbar = ({openMenu}) => {
  const currentDate = new Date().getFullYear();
  return (
    <>
    <div className={`navbar ${openMenu ? 'opacity-100' : 'hidden max-md:opacity-0'} block transition duration-500 ease md:block bg-light-green transition-all duration-[1s] pt-16 pb-8 px-8 w-full min-w-full md:min-w-1/4 md:w-1/4 xxl:min-w-[15%] xxl:w-[15%] h-screen fixed group z-10 md:min-h-[49rem]`}>
      <div className={`content transition-all ease duration-1000 flex flex-col h-full relative`}>
      <Photo customClasses={'aspect-square w-3/4 '}/>
        <h1 className="text-h2 text-dark-green mt-8 text-center mb-1">Valeria Novak</h1>
        <h4 className='text-xl mb-8 text-center'>Web Developer</h4>
        <div className="buttons flex flex-col gap-4">
         <MenuButton link="#home" type="nav-button" text="Home"/>
         <MenuButton link="#about-me" type="nav-button" text="About me"/>
         <MenuButton link="#professional-path" type="nav-button" text="Professional path"/>
         <MenuButton link="#portfolio" type="nav-button" text="Portfolio"/>
         <MenuButton link="#contact-me" type="nav-button" text="Contact me"/>
        </div>
        <p className='max-md:hidden opacity-50 group-hover:opacity-100 transition all ease duration-300 mt-auto'>&copy; {currentDate} NovakDev. All rights reserved.</p>
      </div>
    </div>
    </>
  );
};

export default Navbar;
