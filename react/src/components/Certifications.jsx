import React, {useState} from 'react';
import CertificationCard from './CertificationCard';
import Button from "./Button";
import CertificationsAll from './CertificationsAll';
const Certifications = () => {
  const [selectedButton, setSelectedButton] = useState("Education/Work");

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
  };
  return (
    <>
        <div className='flex items-center max-md:flex-col justify-center md:gap-4 mb-8'>
          <h2 className='text-mobile-h2 md:text-h2'>Latest certifications</h2>                
          <Button text="All certifications" onClick={() => handleButtonClick("All certifications")} active={selectedButton === "All certifications"} customClasses={'text-[0.75rem]'} />
              </div>
      <p className='mb-4'>Here, you can explore last 3 certifications I have acquired throughout my professional journey. Click to "All certifications" to see all certifications that I have</p>
      <div className={`certifications w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3`}>
          <CertificationCard src={'src/images/certifications/Figma.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"Figma, UI/UX Design"} />
          <CertificationCard src={'src/images/certifications/Wordpress.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"PHP, Wordpress, SQL"}/>
          <CertificationCard src={'src/images/certifications/CMS.jpeg'} ratio='certification' objectFit={'contain'} customClasses={'flex-1'} labels={"PHP, CMS, SQL"}/>
      </div>
      {selectedButton === "All certifications" && <CertificationsAll />}
      </>
  );
};

export default Certifications;