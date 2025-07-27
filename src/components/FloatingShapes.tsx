
import React from 'react';

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-10 w-12 h-12 border-2 border-cyan-400/30 rotate-45 animate-spin"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-purple-500/20 rounded-full animate-bounce"></div>
      <div className="absolute bottom-32 left-20 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-cyan-500/30 rotate-45 animate-spin"></div>
      <div className="absolute top-1/2 left-1/3 w-10 h-10 border-2 border-pink-400/30 rounded-full animate-bounce"></div>
    </div>
  );
};

export default FloatingShapes;
