import React from 'react';
import Timeline from './Timeline';

const Timelines = () => {
  return (
      <div className={`timelines`}>
         <Timeline year={'2020-2022'} description="Обучение в ТТХК"/>
         <Timeline year={'2021-2022'} description="Практика в veebi.ee"/>
         <Timeline year={'2022 - current'} description="Работа в Амандус"/>
      </div>
  );
};

export default Timelines;