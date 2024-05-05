import React from 'react';

const Button = ({ link, text, onClick, active }) => {
  return (
    <a onClick={onClick} href={link} className={`text-center py-2 px-4 rounded-full block text-xl tracking-wider cursor-pointer border-almost-black border ${active ? 'bg-almost-white text-almost-black' : 'bg-almost-black text-white hover:bg-almost-white hover:text-almost-black'} `}>
        {text}
    </a>
  );
};

export default Button;
