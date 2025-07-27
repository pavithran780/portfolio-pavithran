
import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700 py-6 sm:py-8 relative z-10 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
              John Doe
            </h3>
            <p className="text-gray-300 text-sm mb-3">
              Full-Stack Developer passionate about creating innovative digital solutions.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Github size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-base font-semibold text-white mb-3">Quick Links</h4>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-1">
              {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-base font-semibold text-white mb-3">Get In Touch</h4>
            <div className="space-y-1 text-gray-400 text-sm">
              <p>john.doe@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-xs sm:text-sm flex items-center order-2 sm:order-1">
            © {new Date().getFullYear()} John Doe. Made with <Heart className="text-red-500 mx-1" size={14} /> and lots of coffee.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="order-1 sm:order-2 bg-gradient-to-r from-cyan-400 to-purple-500 p-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
