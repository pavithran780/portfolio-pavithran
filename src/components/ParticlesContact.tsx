
import React from 'react';
import ParticlesBackground from './ParticleBackground';

const ParticlesContact = () => {
  return (
    <ParticlesBackground
      id="particles-contact"
      colors={['#f97316', '#8b5cf6', '#06b6d4']}
      size={2.5}
      countDesktop={50}
      countTablet={40}
      countMobile={30}
      zIndex={0}
      height="100%"
    />
  );
};

export default ParticlesContact;
