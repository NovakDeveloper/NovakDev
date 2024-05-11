import React, {useState} from 'react';

const MenuIcon = () => {
  return (
    <div className='menu-icon min-w-[3.5rem] w-[3.5rem h-[3.5rem] fixed right-8 top-4 rounded-full border-2 border-dark-green bg-almost-white z-10 flex items-center justify-center group md:hidden'>
    <div className='spans h-[1.25rem] min-w-[2rem] w-[2rem relative'>
      <span className='w-full absolute top-0 h-0.5 bg-dark-green group-hover:w-1/2 left-0'></span>
      <span className='w-full absolute top-1/2 -translate-y-2/4 h-0.5 bg-dark-green'></span>
      <span className='w-full absolute bottom-0 h-0.5 bg-dark-green group-hover:w-1/2 right-0'></span>
    </div>
  </div>
  );
};

export default MenuIcon;
