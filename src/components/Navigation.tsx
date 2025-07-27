
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      scrolled ? 'bg-gray-900/80 backdrop-blur-md' : 'bg-gray-900/60 backdrop-blur-sm'
    } rounded-full border border-gray-700/50 shadow-lg`}>
      <div className="px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-cyan-400 transition-all duration-300 relative group px-4 py-2 rounded-full hover:bg-cyan-400/10"
              >
                {item}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-cyan-400 transition-colors ml-4 p-2 rounded-full hover:bg-cyan-400/10"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-gray-700/50">
            <div className="space-y-2">
              {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-cyan-400/10"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
