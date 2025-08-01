
import React from 'react';
import ParticlesBackground from './ParticleBackground';

const ParticlesSkills = () => {
  return (
    <ParticlesBackground
      id="particles-skills"
      colors={['#10b981', '#f59e0b', '#ef4444']}
      size={4}
      countDesktop={35}
      countTablet={25}
      countMobile={20}
      zIndex={0}
      height="100%"
    />
  );
};

export default ParticlesSkills;
