
import React from 'react';
import ParticlesBackground from './ParticleBackground';

const ParticlesAbout = () => {
  return (
    <ParticlesBackground
      id="particles-about"
      colors={['#06b6d4', '#8b5cf6', '#ec4899']}
      size={2}
      countDesktop={40}
      countTablet={30}
      countMobile={25}
      zIndex={0}
      height="100%"
    />
  );
};

export default ParticlesAbout;
