import React from 'react';
import Skill from './Skill';

const Skills = () => {
  return (
    <>
     <h2 className='text-mobile-h2 md:text-h2 mb-4'>All skills</h2>                
        <p className='mb-4'>Here, you can explore last 3 certifications I have acquired throughout my professional journey. Click to "All certifications" to see all certifications that I have</p>
      <div className={`skills grid grid-cols-8 mb-4`}>
            <Skill title="HTML" src="src/images/skills/html.svg" />
            <Skill title="CSS" src="src/images/skills/css.svg" />
            <Skill title="Sass/SCSS" src="src/images/skills/sass.svg" />
            <Skill title="Tailwind" src="src/images/skills/tailwind.svg" />
            <Skill title="Bootstrap" src="src/images/skills/bootstrap.svg" />
      </div>
      <div className={`skills grid grid-cols-8 mb-4`}>
            <Skill title="JavaScript" src="src/images/skills/js.svg" />
            <Skill title="jQuery" src="src/images/skills/jQuery.svg" />
            <Skill title="React" src="src/images/skills/react.svg" />
      </div>
      <div className={`skills grid grid-cols-8`}>
            <Skill title="Wordpress" src="src/images/skills/wordpress.svg" />
            <Skill title="PHP" src="src/images/skills/php.svg" />
            <Skill title="SQL" src="src/images/skills/sql.svg" />
      </div>
    </>
  );
};

export default Skills;