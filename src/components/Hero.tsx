
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "Full-Stack Developer";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8 relative">
          <div className="w-40 h-40 mx-auto mb-8 relative">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"></div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full border-4 border-gray-900 animate-bounce"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in">
          John Doe
        </h1>
        
        <div className="text-xl md:text-2xl text-cyan-400 mb-4 h-8">
          {displayText}
          <span className="animate-pulse">|</span>
        </div>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in">
          Crafting digital experiences with modern technologies and creative solutions
        </p>

        <div className="flex justify-center space-x-6 mb-12">
          <a
            href="#"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105">
            Download CV
          </button>
          <button 
            onClick={scrollToAbout}
            className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105"
          >
            Let's Talk
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={32} 
          className="text-cyan-400 cursor-pointer hover:text-purple-500 transition-colors"
          onClick={scrollToAbout}
        />
      </div>
    </section>
  );
};

export default Hero;
