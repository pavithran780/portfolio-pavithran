
import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ParticleBackground from '../components/ParticleBackground';
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
      
      {/* Hero Section with Particle Background */}
      <div className="relative">
        <ParticleBackground />
        <Hero />
      </div>
      
      {/* About Section with Gradient Background */}
      <div className="relative">
        <GradientBackground />
        <About />
      </div>
      
      {/* Skills Section with Floating Shapes */}
      <div className="relative">
        <FloatingShapes />
        <Skills />
      </div>
      
      {/* Education Section with Wave Background */}
      <div className="relative">
        <WaveBackground />
        <Education />
      </div>
      
      {/* Projects Section with Geometric Background */}
      <div className="relative">
        <GeometricBackground />
        <Projects />
      </div>
      
      {/* Contact Section with Dot Matrix */}
      <div className="relative">
        <DotMatrix />
        <Contact />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
