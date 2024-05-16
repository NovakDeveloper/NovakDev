import React from 'react';
import ModalImage from 'react-modal-image';

const Image = ({src, ratio, height = 'auto', width = 'auto', objectFit = 'cover', caption }) => {
  return (
      <div className={`wrapper rounded ratio-${ratio} relative w-${width} rounded-2xl h-${height}`}>
        <ModalImage className={`rounded absolute top-0 left-0 w-full h-full rounded-2xl ${objectFit}`} small={src} large={src} caption={caption} />
      </div>    
  );
};

export default Image;