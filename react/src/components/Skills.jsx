import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
    <div className='md:w-3/4 mx-auto'>
     <h2 className='text-h2-mobile md:text-h2 mb-4'><span className="text-dark-green">A</span>ll <span className="text-dark-green">S</span>kills</h2>                
        <p className='mb-8'>Step into the realm of my expertise! Below, you'll find a visual showcase of the diverse languages, frameworks, and tools I've mastered.</p>
      <div className={`skills grid grid-cols-5 mb-6`}>
            <Skill title="HTML" src="src/images/skills/html.svg" />
            <Skill title="CSS" src="src/images/skills/css.svg" />
            <Skill title="Sass/SCSS" src="src/images/skills/sass.svg" />
            <Skill title="Tailwind" src="src/images/skills/tailwind.svg" />
            <Skill title="Bootstrap" src="src/images/skills/bootstrap.svg" />
      </div>
      <div className={`skills grid grid-cols-5 mb-6`}>
            <Skill title="JavaScript" src="src/images/skills/js.svg" />
            <Skill title="jQuery" src="src/images/skills/jQuery.svg" />
            <Skill title="React" src="src/images/skills/react.svg" />
      </div>
      <div className={`skills grid grid-cols-5`}>
            <Skill title="Wordpress" src="src/images/skills/wordpress.svg" />
            <Skill title="PHP" src="src/images/skills/php.svg" />
            <Skill title="SQL" src="src/images/skills/sql.svg" />
      </div>
    </div>
  );
};

export default Skills;