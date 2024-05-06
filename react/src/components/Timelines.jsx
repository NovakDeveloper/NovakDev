import React from 'react';
import Timeline from './Timeline';

const Timelines = () => {
  return (
    <>
    <h2 className='text-mobile-h2 md:text-h2'>History</h2>                
        <p className='mb-4'>Here, you can explore last 3 certifications I have acquired throughout my professional journey. Click to "All certifications" to see all certifications that I have</p>
    
      <div className={`timelines text-left gap-8 flex flex-col`}>
         <Timeline year={'2022 - current'} description="👩‍💻 Employment at Amandus Communication" position="Web Developer"/>
         <Timeline year={'2021-2022'} description="👩‍🎓 Internship at Digital Agency Veebi" position="Wordpress/Front-End Developer" />
         <Timeline year={'2020-2022'} description="👩‍🎓 Education at Tallinn Industrial Education Centre" position="Software Engineer"/>
      </div>
      </>
  );
};

export default Timelines;