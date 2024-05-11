import React, { useState } from 'react';

const MenuIcon = ({ handleMenu, openMenu }) => {
  return (
    <div onClick={handleMenu} className='cursor-pointer menu-icon min-w-[3.5rem] w-[3.5rem h-[3.5rem] fixed right-8 top-4 rounded-full border-2 border-dark-green bg-almost-white z-10 flex items-center justify-center group md:hidden'>
      {/* {openMenu ? (
        <div className='close-icon h-[1.5rem] min-w-[2rem] w-[2rem] relative'>
        <span className='w-full absolute top-1/2 -translate-y-0.5 h-0.5 bg-dark-green transform rotate-45'></span>
        <span className='w-full absolute top-1/2 -translate-y-0.5 h-0.5 bg-dark-green transform -rotate-45'></span>
      </div>
      ) : ( */}
        <div className={`spans ${openMenu ? 'h-[1.5rem]' : 'h-[1.25rem]'} min-w-[2rem] w-[2rem relative`}>
        <span className={`w-full absolute h-0.5 bg-dark-green ${openMenu ? '-translate-y-0.5 rotate-45 top-1/2' : 'group-hover:w-1/2 left-0 top-0'}`}></span>
        <span className={`w-full absolute top-1/2 -translate-y-2/4 h-0.5 bg-dark-green ${openMenu ? 'hidden' : ''}`}></span>
        <span className={`w-full absolute h-0.5 bg-dark-green ${openMenu ? '-translate-y-0.5 -rotate-45 top-1/2' : 'group-hover:w-1/2 right-0 bottom-0'}`}></span>
      </div>
      {/* )} */}
    </div>
  );
};

export default MenuIcon;