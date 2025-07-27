
import React from 'react';

const GeometricBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 border border-cyan-400/50 transform rotate-12 animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/30 to-pink-500/30 transform rotate-45 animate-spin"></div>
        <div className="absolute bottom-40 left-1/4 w-24 h-24 border-2 border-purple-400/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-12 h-12 bg-gradient-to-r from-cyan-500/30 to-blue-500/30 transform rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 border border-pink-400/30 transform -rotate-12 animate-spin"></div>
      </div>
    </div>
  );
};

export default GeometricBackground;
