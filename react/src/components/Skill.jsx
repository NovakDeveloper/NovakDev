import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Skill = ({ title, src }) => {

  return (
    <div className="skill flex flex-col justify-center items-center gap-1">
      <img className="w-14 h-14 xxl:w-20 xxl:h-20" src={src} />
      <p className='font-bold text-dark-green'>{title}</p>
    </div>
  );
};

export default Skill;
