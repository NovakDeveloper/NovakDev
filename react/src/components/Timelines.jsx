import React from 'react';
import Timeline from './Timeline';

const Timelines = () => {
  return (
      <div className={`timelines text-left gap-16 flex flex-col`}>
         <Timeline year={'2022 - current'} description="👩‍💻 Employment at Amandus Communication" position="Web Developer"/>
         <Timeline year={'2021-2022'} description="👩‍🎓 Internship at Digital Agency Veebi" position="Wordpress/Front-End Developer" />
         <Timeline year={'2020-2022'} description="👩‍🎓 Education at Tallinn Industrial Education Centre" position="Software Engineer"/>
      </div>
  );
};

export default Timelines;