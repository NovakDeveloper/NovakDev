import React from 'react';

const Button = ({ link, text, onClick }) => {
  return (
    <a onClick={onClick} href={link} className="bg-almost-black text-white text-center py-2 px-4 rounded-full block text-xl tracking-wider border-almost-black border hover:bg-almost-white hover:text-almost-black cursor-pointer">
        {text}
    </a>
  );
};

export default Button;
