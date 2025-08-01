
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
import ParticlesAbout from '../components/ParticlesAbout';
import ParticlesSkills from '../components/ParticlesSkills';
import ParticlesProjects from '../components/ParticlesProjects';
import ParticlesContact from '../components/ParticlesContact';
import GradientBackground from '../components/GradientBackground';
import FloatingShapes from '../components/FloatingShapes';
import WaveBackground from '../components/WaveBackground';
import GeometricBackground from '../components/GeometricBackground';
import DotMatrix from '../components/DotMatrix';
import Navigation from '../components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <Navigation />
      
      {/* Hero Section with Original Particle Background */}
      <div className="relative">
        <ParticleBackground 
          id="particles-hero"
          colors={['#00f0ff', '#8b5cf6', '#06b6d4']}
          size={3}
          countDesktop={60}
          countTablet={50}
          countMobile={40}
        />
        <Hero />
      </div>
      
      {/* About Section with Particles + Gradient Background */}
      <div className="relative">
        <GradientBackground />
        <ParticlesAbout />
        <About />
      </div>
      
      {/* Skills Section with Particles + Floating Shapes */}
      <div className="relative">
        <FloatingShapes />
        <ParticlesSkills />
        <Skills />
      </div>
      
      {/* Education Section with Wave Background */}
      <div className="relative">
        <WaveBackground />
        <Education />
      </div>
      
      {/* Projects Section with Particles + Geometric Background */}
      <div className="relative">
        <GeometricBackground />
        <ParticlesProjects />
        <Projects />
      </div>
      
      {/* Contact Section with Particles + Dot Matrix */}
      <div className="relative">
        <DotMatrix />
        <ParticlesContact />
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
