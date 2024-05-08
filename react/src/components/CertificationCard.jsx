import React from 'react';
import Image from './Image';
import Labels from './Labels'

const CertificationCard = ({src, title, ratio, height = 'auto', width = 'auto', objectFit = 'cover', customClasses, caption,labels }) => {
  return (
      <div className={`certification relative ${customClasses} group`}>
        <Image src={src} ratio={ratio} alt={title} width={width} height={height} objectFit={objectFit} caption={caption}/>
        <Labels labels={labels} />
      </div>
  );
};

export default CertificationCard;