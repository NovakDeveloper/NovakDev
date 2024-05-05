import React from 'react';

const Timeline = ({year, description, position}) => {
  return (
      <div className={`timeline relative group`}>
        <div className=''>{year}</div>
        <div className=''>{description}</div>
      </div>
  );
};

export default Timeline;