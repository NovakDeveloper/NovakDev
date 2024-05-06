import React, {useState} from 'react';

const Button = ({ link, text, onClick, active, customClasses }) => {
  return (
    <a onClick={onClick} href={link} className={`text-center py-2 px-4 rounded-full block xxl:text-xl tracking-wider leading-4 cursor-pointer border-almost-black border ${customClasses} ${active ? 'bg-almost-white text-almost-black' : 'bg-almost-black text-white hover:bg-almost-white hover:text-almost-black'} `}>
        {text}
    </a>
  );
};

export default Button;
