
import React from 'react';

const WaveBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg className="absolute bottom-0 left-0 w-full h-64" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path 
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
          fill="url(#wave-gradient)" 
          opacity="0.3"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0 0;50 0;0 0"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#00f0ff" />
            <stop offset="100%" stopColor="#8b5cf6" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default WaveBackground;
