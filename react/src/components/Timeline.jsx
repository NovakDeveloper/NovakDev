import React from 'react';

const Timeline = ({year, description, position}) => {
  return (
      <div className={`timeline relative group pl-10`}>
        <div className='year-position flex max-md:flex-col md:items-center md:gap-8 mb-4 md:mb-2'>
          <div className='year text-2xl xxl:text-3xl font-bold text-dark-green'>{year}</div>
          <div className='text-green'>{position}</div>
        </div>
        <div className='description'>
          <p className='text-x-large'>{description}</p>
        </div>
      </div>
  );
};

export default Timeline;