import React, {useState} from 'react';

const FormMessage = ({ headline, message }) => {
  return (
    <div className='fixed top-0 left-0 w-full h-full flex content-center justify-center items-center bg-opacity-black px-8'>
    <div className='w-full md:w-1/3 h-auto bg-almost-white border border-dark-green rounded p-8'>
      <h4 className='text-h4 mb-2 text-dark-green'>{headline}</h4>
      <p className='text-x-large'>{message}</p>
    </div>
</div>
  );
};

export default FormMessage;
