
import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const sections = ['about', 'skills', 'education', 'projects', 'contact'];
  const sectionLabels = ['About', 'Skills', 'Education', 'Projects', 'Contact'];

  // Refs for sparkle animation
  const navRef = useRef<HTMLDivElement>(null);
  const activeElementRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);

      // Check which section is currently in view
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
        const newIndex = sections.indexOf(currentSection);
        if (newIndex !== activeIndex) {
          setActiveIndex(newIndex);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  // Function to create the SVG content for the active element
  const createSVG = (element: HTMLDivElement) => {
    element.innerHTML = `
    <svg viewBox="0 0 116 5" preserveAspectRatio="none" class="beam">
      <path d="M0.5 2.5L113 0.534929C114.099 0.515738 115 1.40113 115 2.5C115 3.59887 114.099 4.48426 113 4.46507L0.5 2.5Z" fill="url(#gradient-beam)"/>
      <defs>
        <linearGradient id="gradient-beam" x1="2" y1="2.5" x2="115" y2="2.5" gradientUnits="userSpaceOnUse">
          <stop stop-color="#00f0ff"/>
          <stop offset="1" stop-color="white"/>
        </linearGradient>
      </defs>
    </svg>
    <div class="strike">
      <svg viewBox="0 0 114 12" preserveAspectRatio="none">
        <g fill="none" stroke="white" stroke-width="0.75" stroke-linecap="round">
          <path d="M113.5 6.5L109.068 8.9621C109.023 8.98721 108.974 9.00516 108.923 9.01531L106.889 9.42219C106.661 9.46776 106.432 9.35034 106.336 9.1388L104.045 4.0986C104.015 4.03362 104 3.96307 104 3.8917V2.12268C104 1.6898 103.487 1.46145 103.166 1.75103L99.2887 5.24019C99.1188 5.39305 98.867 5.41132 98.6768 5.28457L95.0699 2.87996C94.7881 2.69205 94.4049 2.83291 94.3118 3.15862L92.6148 9.09827C92.5483 9.33084 92.3249 9.48249 92.0843 9.45843L87.7087 9.02087C87.5752 9.00752 87.4419 9.04839 87.3389 9.13428L84.9485 11.1263C84.7128 11.3227 84.3575 11.2625 84.1996 10.9994L81.7602 6.93359C81.617 6.69492 81.3064 6.61913 81.0694 6.76501L75.3165 10.3052C75.1286 10.4209 74.8871 10.3997 74.7223 10.2531L70.6678 6.64917C70.5611 6.55429 70.5 6.41829 70.5 6.27547V1.20711C70.5 1.0745 70.4473 0.947322 70.3536 0.853553L70.2185 0.718508C70.0846 0.584592 69.8865 0.537831 69.7068 0.59772L69.2675 0.744166C68.9149 0.861705 68.8092 1.30924 69.0721 1.57206L69.605 2.10499C69.8157 2.31571 69.7965 2.66281 69.5638 2.84897L67.5 4.5L65.2715 6.28282C65.1083 6.41338 64.8811 6.42866 64.7019 6.32113L60.3621 3.71725C60.153 3.59179 59.8839 3.63546 59.7252 3.8206L57.0401 6.95327C57.0135 6.9843 56.9908 7.01849 56.9725 7.05505L55.2533 10.4934C55.1188 10.7624 54.779 10.8526 54.5287 10.6858L50.7686 8.17907C50.6051 8.07006 50.3929 8.06694 50.2263 8.17109L46.7094 10.3691C46.5774 10.4516 46.4145 10.468 46.2688 10.4133L42.6586 9.05949C42.5558 9.02091 42.4684 8.94951 42.4102 8.85633L40.1248 5.1997C40.0458 5.07323 40.0273 4.91808 40.0745 4.77659L40.6374 3.08777C40.7755 2.67359 40.3536 2.29381 39.9562 2.47447L35.5 4.5L32.2657 5.88613C32.1013 5.95658 31.9118 5.93386 31.7687 5.82656L30.1904 4.64279C30.0699 4.55245 29.9152 4.5212 29.7691 4.55772L26.2009 5.44977C26.0723 5.48193 25.9617 5.56388 25.8934 5.67759L23.1949 10.1752C23.0796 10.3673 22.8507 10.4593 22.6346 10.4003L17.6887 9.05148C17.5674 9.01838 17.463 8.94076 17.3963 8.83409L15.3331 5.53299C15.1627 5.26032 14.7829 5.21707 14.5556 5.44443L12.1464 7.85355C12.0527 7.94732 11.9255 8 11.7929 8H8.15139C8.05268 8 7.95617 7.97078 7.87404 7.91603L3.74143 5.16095C3.59214 5.06142 3.40096 5.04952 3.24047 5.12976L0.5 6.5" />
        </g>
      </svg>
    </div>
    `;
  };

  // Helper function to calculate the horizontal offset for the active element
  const getOffsetLeft = (element: HTMLButtonElement) => {
    if (!navRef.current || !activeElementRef.current) return 0;
    const elementRect = element.getBoundingClientRect();
    const navRect = navRef.current.getBoundingClientRect();
    const activeElementWidth = activeElementRef.current.offsetWidth;
    return (
      elementRect.left -
      navRect.left +
      (elementRect.width - activeElementWidth) / 2
    );
  };

  // Initialize sparkle animation
  useLayoutEffect(() => {
    const activeButton = buttonRefs.current[activeIndex];
    if (navRef.current && activeElementRef.current && activeButton) {
      gsap.set(activeElementRef.current, {
        x: getOffsetLeft(activeButton),
      });
      gsap.to(activeElementRef.current, {
        "--active-element-show": "1",
        duration: 0.2,
      });
    }
  }, []);

  // Update sparkle animation when active section changes
  useEffect(() => {
    const navElement = navRef.current;
    const activeElement = activeElementRef.current;
    const newButton = buttonRefs.current[activeIndex];

    if (navElement && activeElement && newButton) {
      const x = getOffsetLeft(newButton);
      
      gsap.to(activeElement, {
        x,
        duration: 0.6,
        ease: "power2.out",
      });

      // Create sparkle effect
      createSVG(activeElement);
      gsap.to(activeElement, {
        "--active-element-opacity": 1,
        duration: 0.3,
      });
    }
  }, [activeIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const handleNavClick = (index: number, section: string) => {
    setActiveIndex(index);
    scrollToSection(section);
  };

  const isActive = (section: string) => {
    return activeSection === section.toLowerCase();
  };

  return (
    <>
      <style>{`
        .sparkle-nav {
          position: relative;
        }

        .sparkle-nav .active-element {
          --active-element-scale-x: 1;
          --active-element-scale-y: 1;
          --active-element-show: 0;
          --active-element-opacity: 0;
          --active-element-width: 36px;
          --active-element-strike-x: 0%;
          --active-element-mask-position: 0%;
          position: absolute;
          left: 0;
          bottom: -8px;
          height: 3px;
          width: 36px;
          border-radius: 2px;
          background-color: #00f0ff;
          opacity: var(--active-element-show);
        }

        .sparkle-nav .active-element > svg,
        .sparkle-nav .active-element .strike {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          opacity: var(--active-element-opacity);
          width: var(--active-element-width);
          mix-blend-mode: multiply;
        }

        .sparkle-nav .active-element > svg {
          display: block;
          overflow: visible;
          height: 5px;
          filter: blur(0.5px) drop-shadow(2px 0px 8px #00f0ff40) drop-shadow(1px 0px 2px #00f0ff80) drop-shadow(0px 0px 3px #00f0ff40);
        }

        .sparkle-nav .active-element .strike {
          padding: 24px 0;
        }

        .sparkle-nav .active-element .strike svg {
          display: block;
          overflow: visible;
          height: 12px;
          width: calc(var(--active-element-width) * 2);
        }
      `}</style>

      <nav className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/90 backdrop-blur-md' : 'bg-gray-900/70 backdrop-blur-sm'
      } rounded-2xl border border-gray-700/50 shadow-xl shadow-black/20`}>
        <div className="px-4 sm:px-6 py-2 sm:py-3">
          <div className="flex items-center justify-between">
            <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Portfolio
            </div>
            
            {/* Desktop Menu with Sparkle Animation */}
            <div className="hidden md:flex items-center space-x-1 ml-8 sparkle-nav" ref={navRef}>
              {sectionLabels.map((item, index) => (
                <button
                  key={item}
                  ref={(el) => {
                    buttonRefs.current[index] = el;
                  }}
                  onClick={() => handleNavClick(index, sections[index])}
                  className={`transition-all duration-300 relative group px-4 py-2 rounded-xl text-sm font-medium ${
                    isActive(sections[index])
                      ? 'text-cyan-400'
                      : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                  }`}
                >
                  {item}
                </button>
              ))}
              <div className="active-element" ref={activeElementRef} />
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white hover:text-cyan-400 transition-colors ml-4 p-2 rounded-xl hover:bg-cyan-400/10 min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pt-4 border-t border-gray-700/50">
              <div className="space-y-1">
                {sectionLabels.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(index, sections[index])}
                    className={`block w-full text-left transition-colors duration-300 py-3 px-4 rounded-xl min-h-[44px] font-medium ${
                      isActive(sections[index])
                        ? 'text-cyan-400 bg-cyan-400/10'
                        : 'text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navigation;
