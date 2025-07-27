
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
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

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative z-10">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-8 relative">
          <div className="w-48 h-48 mx-auto mb-8 relative group">
            <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-pulse">
              <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full border-4 border-gray-900 animate-bounce"></div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in">
          John Doe
        </h1>
        
        <div className="text-xl md:text-2xl text-cyan-400 mb-4 h-8 font-mono">
          {displayText}
          <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
        </div>
        
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in opacity-0 animate-delay-1000">
          Crafting digital experiences with modern technologies and creative solutions
        </p>

        <div className="flex justify-center space-x-6 mb-12 opacity-0 animate-fade-in animate-delay-1500">
          <a
            href="#"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform"
          >
            <Github size={24} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform"
          >
            <Mail size={24} />
          </a>
        </div>

        <div className="flex justify-center space-x-4 opacity-0 animate-fade-in animate-delay-2000">
          <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 transform">
            Download CV
          </button>
          <button 
            onClick={scrollToAbout}
            className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 transform"
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
