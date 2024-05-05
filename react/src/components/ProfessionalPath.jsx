import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import NextButton from './NextButton';
import Button from './Button';
import Certifications from './Certifications';
import Timelines from './Timelines';

const ProfessionalPath = () => {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonText) => {
    setSelectedButton(buttonText);
    // Дополнительные действия, если необходимо
  };
  return ( 
    <div className='h-full min-w-full w-full flex justify-start items-center m-auto flex-col' id="professional-path">
            <div className="wrapper md:min-w-3/4 md:w-3/4 text-center flex-1 flex items-center">
            <div className="content w-full h-full">
            <div className='top-part h-[40%] flex flex-col justify-end'>
              <h1 className='text-h1-mobile md:text-h1 mb-8'><span className='text-dark-green font-medium'>P</span>rofessional <span className='text-dark-green font-medium'>P</span>ath</h1>
              <div className="buttons flex gap-4 mb-8 justify-center">
                <Button text="Study/Work" onClick={() => handleButtonClick("Study/Work")} active={selectedButton === "Study/Work"} />
                <Button text="Certifications" onClick={() => handleButtonClick("Certifications")} active={selectedButton === "Certifications"} />
                <Button text="All skills" onClick={() => handleButtonClick("All skills")} active={selectedButton === "All skills"} />
              </div>
            </div>
            <div className='bottom-part h-[60%]'>
              {selectedButton === "Study/Work" && <Timelines />}
              {selectedButton === "Certifications" && <Certifications />}
            </div>
            </div>
            </div>
          <NextButton text="About me" link="#about-me" />
    </div>
  );
};

export default ProfessionalPath;