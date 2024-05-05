import React from 'react';

const Photo = ({customClasses}) => {
  return ( 
    <div className={`rounded-full relative  aspect-square m-auto ${customClasses}`}>
        <img className='absolute top-0 left-0 w-full h-full rounded-full object-cover border-8 border-dark-green' src="src/images/Valeria.JPG" />
    </div>
  );
};

export default Photo;