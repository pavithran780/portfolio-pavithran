
import React, { useLayoutEffect } from 'react';

interface ParticlesBackgroundProps {
  colors?: string[];
  size?: number;
  countDesktop?: number;
  countTablet?: number;
  countMobile?: number;
  zIndex?: number;
  height?: string;
  id?: string;
}

const ParticlesBackground: React.FC<ParticlesBackgroundProps> = ({
  colors = ['#00f0ff', '#8b5cf6', '#06b6d4'],
  size = 3,
  countDesktop = 60,
  countTablet = 50,
  countMobile = 40,
  zIndex = 0,
  height = '100vh',
  id = 'js-particles',
}) => {
  useLayoutEffect(() => {
    // Check if particles.js is already loaded
    if (window.particlesJS) {
      initializeParticles();
      return;
    }

    const script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      initializeParticles();
    };
    document.head.appendChild(script);

    return () => {
      // Clean up particles instance
      if (window.pJSDom && window.pJSDom.length > 0) {
        const particleInstance = window.pJSDom.find((instance: any) => 
          instance.pJS.canvas.el.id === `${id}-canvas`
        );
        if (particleInstance) {
          particleInstance.pJS.fn.vendors.destroypJS();
        }
      }
    };
  }, [colors, size, countDesktop, countTablet, countMobile, id]);

  const initializeParticles = () => {
    const particlesElement = document.getElementById(id);
    if (particlesElement && window.particlesJS) {
      const getParticleCount = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth > 1024) return countDesktop;
        if (screenWidth > 768) return countTablet;
        return countMobile;
      };

      window.particlesJS(id, {
        particles: {
          number: {
            value: getParticleCount(),
          },
          color: {
            value: colors,
          },
          shape: {
            type: 'circle',
          },
          opacity: {
            value: 0.8,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.3,
              sync: false
            }
          },
          size: {
            value: size,
            random: true,
            anim: {
              enable: true,
              speed: 2,
              size_min: 1,
              sync: false
            }
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true,
            speed: 1.5,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
          },
        },
        interactivity: {
          detect_on: 'canvas',
          events: {
            onhover: {
              enable: true,
              mode: 'repulse'
            },
            onclick: {
              enable: true,
              mode: 'push'
            },
            resize: true,
          },
          modes: {
            repulse: {
              distance: 100,
              duration: 0.4
            },
            push: {
              particles_nb: 4
            }
          }
        },
        retina_detect: true,
      });
    }
  };

  return (
    <div
      id={id}
      style={{
        width: '100%',
        height: height,
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: zIndex,
        pointerEvents: 'none',
      }}
    >
      <style>{`
        #${id} canvas {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .particles-js-canvas-el {
          position: absolute;
        }

        .particles-js-canvas-el circle {
          fill: currentColor;
          filter: url(#glow-${id});
        }
      `}</style>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id={`glow-${id}`}>
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

// Declare global types for particles.js
declare global {
  interface Window {
    particlesJS: any;
    pJSDom: any[];
  }
}

export default ParticlesBackground;
