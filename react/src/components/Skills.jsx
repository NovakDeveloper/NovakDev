import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
      <div className={`skills w-min-3/4 w-3/4 mx-auto flex flex-col`}>
            <Skill name="HTML" percentage={100} />
            <Skill name="CSS" percentage={50} />
            <Skill name="JavaScript" percentage={25} />
      </div>
  );
};

export default Skills;