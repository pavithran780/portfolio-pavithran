
import React from 'react';
import ParticlesBackground from './ParticleBackground';

const ParticlesProjects = () => {
  return (
    <ParticlesBackground
      id="particles-projects"
      colors={['#6366f1', '#06b6d4', '#84cc16']}
      size={3}
      countDesktop={45}
      countTablet={35}
      countMobile={25}
      zIndex={0}
      height="100%"
    />
  );
};

export default ParticlesProjects;
