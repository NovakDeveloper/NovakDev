import React from 'react';
import MenuButton from './MenuButton';

import Photo from './Photo';
const Navbar = () => {
  return (
    <>
    <div className={`navbar hidden md:block bg-light-green transition-all duration-[1s] py-16 px-8 min-w-1/4 w-1/4 xxl:min-w-[15%] xxl:w-[15%] h-screen fixed`}>
      <div className={`content transition-all ease duration-1000`}>
      <Photo customClasses={'w-[80%]'}/>
        <h1 className="text-h2 text-dark-green mt-8 text-center mb-1">Valeria Novak</h1>
        <h4 className='text-xl mb-8 text-center'>Web Developer</h4>
        <div className="buttons flex flex-col gap-4">
         <MenuButton link="#home" type="nav-button" text="Home"/>
         <MenuButton link="#about-me" type="nav-button" text="About me"/>
         <MenuButton link="#professional-path" type="nav-button" text="Professional path"/>
         <MenuButton link="#portfolio" type="nav-button" text="Portfolio"/>
         <MenuButton link="#contact-me" type="nav-button" text="Contact me"/>
        </div>
      </div>
    </div>
    </>
  );
};

export default Navbar;
