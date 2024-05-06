import React from 'react';
import Timeline from './Timeline';

const Timelines = () => {
  return (
    <>
    <h2 className='text-mobile-h2 md:text-h2 mb-4'>History</h2>                
        <p className='mb-4 xxl:text-[1.85rem]'>Step into my journey through the realms of learning and work, where each experience has been a stepping stone towards excellence.</p>
    
      <div className={`timelines text-left gap-8 flex flex-col`}>
         <Timeline year={'2022 - current'} description="👩‍💻 Employment at Amandus Communication" position="Web Developer"/>
         <Timeline year={'2021-2022'} description="👩‍🎓 Internship at Digital Agency Veebi" position="Wordpress/Front-End Developer" />
         <Timeline year={'2020-2022'} description="👩‍🎓 Education at Tallinn Industrial Education Centre" position="Software Engineer"/>
      </div>
      </>
  );
};

export default Timelines;