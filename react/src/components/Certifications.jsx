import React from 'react';
import CertificationCard from './CertificationCard';

const Certifications = () => {
  return (
      <div className={`certifications w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3`}>
          <CertificationCard src={'src/images/certifications/Figma.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"Figma, UI/UX Design"} />
          <CertificationCard src={'src/images/certifications/Wordpress.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"PHP, Wordpress, SQL"}/>
          <CertificationCard src={'src/images/certifications/CMS.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"PHP, CMS, SQL"}/>
          <CertificationCard src={'src/images/certifications/Tailwind.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"CSS Framework: Tailwind"}/>
          <CertificationCard src={'src/images/certifications/Sass.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"Sass, SCSS"}/>
      </div>
  );
};

export default Certifications;