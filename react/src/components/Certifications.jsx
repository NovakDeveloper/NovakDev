import React, {useState} from 'react';
import CertificationCard from './CertificationCard';
import Button from "./Button";
import CertificationsAll from './CertificationsAll';
const Certifications = ({handleMenuIcon}) => {
  const [openAllCertifications, setOpenAllCertifications] = useState(false);

  const handleButtonClick = () => {
    setOpenAllCertifications(!openAllCertifications);
    handleMenuIcon();
  };
  return (
    <>
        <div className='flex items-center max-md:flex-col justify-center md:gap-4 mb-4'>
          <h2 className='text-h2-mobile md:text-h2'><span className='text-dark-green'>L</span>atest <span className='text-dark-green'>C</span>ertifications</h2>                
          <Button text="All certifications" onClick={handleButtonClick}  customClasses={'text-[0.75rem]'} />
              </div>
      <p className='mb-8 text-x-large xxl:text-[1.5rem] leading-14'>Here, you can discover the three latest certifications I've attained on my professional journey.<br /> Click 'All Certifications' to explore my complete certification portfolio.</p>
      <div className={`certifications w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3 xxl:w-3/4 m-auto`}>
          <CertificationCard src={'src/images/certifications/Figma.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1 border border-light-green rounded-md'} labels={"Figma, UI/UX Design"} />
          <CertificationCard src={'src/images/certifications/Wordpress.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1 border border-light-green rounded-md'} labels={"PHP, Wordpress, SQL"}/>
          <CertificationCard src={'src/images/certifications/CMS.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1 border border-light-green rounded-md'} labels={"PHP, CMS, SQL"}/>
      </div>
      {openAllCertifications && <CertificationsAll openAllCertifications={openAllCertifications} onClick={handleButtonClick}/>}
      </>
  );
};

export default Certifications;