import React from 'react';
import CertificationCard from './CertificationCard';

const Certifications = ({src, title, ratio, height = 'auto', width = 'auto', objectFit = 'cover', customClasses, caption }) => {
  return (
      <div className={`certifications w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}>
         <CertificationCard src={'src/images/PHP-Certification.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} title="PHP for Beginners" caption={'test'} />
         <CertificationCard src={'src/images/PHP-Certification.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} title="PHP for Beginners" caption={'test'} />
         <CertificationCard src={'src/images/PHP-Certification.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} title="PHP for Beginners" caption={'test'} />
         <CertificationCard src={'src/images/PHP-Certification.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} title="PHP for Beginners" caption={'test'} />
         <CertificationCard src={'src/images/PHP-Certification.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} title="PHP for Beginners" caption={'test'} />
         <CertificationCard src={'src/images/PHP-Certification.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} title="PHP for Beginners" caption={'test'} />
      </div>
  );
};

export default Certifications;