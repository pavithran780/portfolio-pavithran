
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': {
        url: string;
        style?: React.CSSProperties;
        className?: string;
      };
    }
  }
}

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "Full-Stack Developer";

  useEffect(() => {
    // Load Spline viewer script
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.10.37/build/spline-viewer.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
    <section className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="mb-6 lg:mb-8">
              <div className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto lg:mx-0 mb-6 lg:mb-8 relative group">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 p-1 animate-pulse">
                  <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 flex items-center justify-center">
                    <img 
                      src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop&crop=face"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-full transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-6 h-6 lg:w-8 lg:h-8 bg-green-400 rounded-full border-2 lg:border-4 border-gray-900 animate-bounce"></div>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-7xl font-bold mb-3 lg:mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent animate-fade-in">
              John Doe
            </h1>
            
            <div className="text-lg sm:text-xl lg:text-2xl text-cyan-400 mb-3 lg:mb-4 h-8 font-mono">
              {displayText}
              <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>|</span>
            </div>
            
            <p className="text-base sm:text-lg text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto lg:mx-0 animate-fade-in opacity-0 animate-delay-1000">
              Crafting digital experiences with modern technologies and creative solutions
            </p>

            <div className="flex justify-center lg:justify-start space-x-4 sm:space-x-6 mb-8 lg:mb-12 opacity-0 animate-fade-in animate-delay-1500">
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform"
              >
                <Github size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform"
              >
                <Linkedin size={20} className="sm:w-6 sm:h-6" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 hover:scale-110 transform"
              >
                <Mail size={20} className="sm:w-6 sm:h-6" />
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in animate-delay-2000">
              <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 sm:px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-105 transform">
                Download CV
              </button>
              <button 
                onClick={scrollToAbout}
                className="border border-cyan-400 text-cyan-400 px-6 sm:px-8 py-3 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105 transform"
              >
                Let's Talk
              </button>
            </div>
          </div>

          {/* Right 3D Element */}
          <div className="order-1 lg:order-2 h-64 sm:h-80 lg:h-96 w-full">
            <spline-viewer 
              url="https://prod.spline.design/KKPBaJtUfSmPEKzP/scene.splinecode"
              className="w-full h-full rounded-lg"
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown 
          size={24} 
          className="sm:w-8 sm:h-8 text-cyan-400 cursor-pointer hover:text-purple-500 transition-colors"
          onClick={scrollToAbout}
        />
      </div>
    </section>
  );
};

export default Hero;
