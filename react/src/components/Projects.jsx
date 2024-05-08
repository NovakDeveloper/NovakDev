import React, {useState} from 'react';
import CertificationCard from './CertificationCard';
import ProjectCard from './ProjectCard';
import Button from "./Button";
import CertificationsAll from './CertificationsAll';
const Projects = () => {
  const [openAllCertifications, setOpenAllCertifications] = useState(false);

  const handleButtonClick = () => {
    setOpenAllCertifications(!openAllCertifications);
  };
  return (
    <>
        <div className='flex items-center max-md:flex-col justify-center md:gap-4 mb-8'>
          <h2 className='text-mobile-h2 md:text-h2'><span className="text-dark-green">L</span>atest <span className="text-dark-green">P</span>rojects</h2>                
          <Button text="All projects" onClick={handleButtonClick} customClasses={'text-[0.75rem]'} />
              </div>
      <p className='mb-4'>Here you can explore my latest projects that I've been working on.<br />
      Click on 'All Projects' to explore the full range of projects.</p>
      <div className={`projects w-full grid gap-4 sm:grid-cols-2 md:grid-cols-3`}>
          <ProjectCard src={'src/images/projects/addnode.png'} objectFit={'contain'} customClasses={'ratio-video'} name="Addnode Group" link="https://addnodegroup.com/" />
          <ProjectCard src={'src/images/projects/railcare.svg'} objectFit={'contain'} customClasses={'ratio-video'} name="Railcare" link="https://www.railcare.se/"/>
          <ProjectCard src={'src/images/projects/alligo.svg'} objectFit={'contain'} customClasses={'ratio-video'} name="Alligo" link="https://www.alligo.com/" />
      </div>
      {openAllCertifications && <CertificationsAll openAllCertifications={openAllCertifications} onClick={handleButtonClick}/>}
      </>
  );
};

export default Projects;