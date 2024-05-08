import React from 'react';
import Image from './Image';
import Labels from './Labels';

const ProjectCard = ({src, title, link}) => {
  return (
      <a href={link} target="_black" className={`block project relative ratio-video group  border border-light-green rounded-md`}>
        <img src={src} alt={title} className="absolute top-0 left-0 w-full h-full contain"/>
        <Labels labels="Click to view the project" />
      </a>
  );
};

export default ProjectCard;