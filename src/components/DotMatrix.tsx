
import React from 'react';

const DotMatrix = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-30">
        <div className="grid grid-cols-12 gap-8 h-full w-full p-8">
          {Array.from({ length: 60 }).map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationDuration: `${2 + (index % 3)}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DotMatrix;
