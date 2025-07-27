
import React from 'react';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900/50 backdrop-blur-sm border-t border-gray-700 py-12 relative z-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
              John Doe
            </h3>
            <p className="text-gray-300 mb-4">
              Full-Stack Developer passionate about creating innovative digital solutions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Github size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-cyan-400 transition-all duration-300 hover:scale-110"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['About', 'Skills', 'Education', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-400">
              <p>john.doe@example.com</p>
              <p>+1 (555) 123-4567</p>
              <p>San Francisco, CA</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm flex items-center">
            © {new Date().getFullYear()} John Doe. Made with <Heart className="text-red-500 mx-1" size={16} /> and lots of coffee.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gradient-to-r from-cyan-400 to-purple-500 p-2 rounded-full hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
