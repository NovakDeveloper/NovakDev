import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className='md:w-3/4 mx-auto'>
     <h2 className='text-h2-mobile md:text-h2 mb-4'><span className="text-dark-green">A</span>ll <span className="text-dark-green">S</span>kills</h2>                
        <p className='mb-8 text-x-large xxl:text-[1.5rem] leading-14'>Step into the realm of my expertise! Below, you'll find a visual showcase of the diverse languages, frameworks, and tools I've mastered.</p>
      <div className={`skills grid grid-cols-3 md:grid-cols-5 mb-6 gap-y-6`}>
            <Skill title="HTML" src="./skills/html.svg" />
            <Skill title="CSS" src="./skills/css.svg" />
            <Skill title="Sass/SCSS" src="./skills/sass.svg" />
            <Skill title="Tailwind" src="./skills/tailwind.svg" />
            <Skill title="Bootstrap" src="./skills/bootstrap.svg" />
      </div>
      <div className={`skills grid grid-cols-3 md:grid-cols-5 mb-6 gap-y-6`}>
            <Skill title="JavaScript" src="./skills/js.svg" />
            <Skill title="jQuery" src="./skills/jQuery.svg" />
            <Skill title="React" src="./skills/react.svg" />
      </div>
      <div className={`skills grid grid-cols-3 md:grid-cols-5`}>
            <Skill title="Wordpress" src="./skills/wordpress.svg" />
            <Skill title="PHP" src="./skills/php.svg" />
            <Skill title="SQL" src="./skills/sql.svg" />
      </div>
    </div>
  );
};

export default Skills;