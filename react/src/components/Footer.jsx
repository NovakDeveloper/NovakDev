import React from 'react';

const Footer = () => {
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer px-4 py-8 bg-light-green group md:hidden">
      <div className="container">
        <p className='opacity-50 group-hover:opacity-100 transition all ease duration-300'>&copy; {currentDate} NovakDev. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;