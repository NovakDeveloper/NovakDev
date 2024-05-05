import React, {useRef} from 'react';
import NextButton from './NextButton';
const AboutMe = () => {
  return ( 
    <div className='h-full min-w-full w-full flex justify-center items-center m-auto' id="about-me">
        <div className="intro text-center">
            <h1 className='text-4xl md:text-5xl mb-8'>Hi there!  I am <span className='text-dark-green font-medium'>Valeria Novak</span>.</h1>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id enim ac velit commodo dapibus et quis elit. Praesent in justo in justo posuere tempus. Quisque ac elit egestas, ullamcorper ex in, aliquam mauris. Phasellus blandit..</p>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id enim ac velit commodo dapibus et quis elit. Praesent in justo in justo posuere tempus. Quisque ac elit egestas, ullamcorper ex in, aliquam mauris. Phasellus blandit..</p>
            <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id enim ac velit commodo dapibus et quis elit. Praesent in justo in justo posuere tempus. Quisque ac elit egestas, ullamcorper ex in, aliquam mauris. Phasellus blandit..</p>
        </div>
        <NextButton text="Professional Path" link="#professional-path" />
    </div>
  );
};

export default AboutMe;