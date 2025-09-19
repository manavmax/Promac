import React from 'react';

const ShaderBackground = ({ className = "", heroMode = false }) => {
  return (
    <div className={`${heroMode ? 'absolute inset-0 -top-40 z-0' : 'fixed top-0 left-0 w-full h-full -z-10'} ${className}`}>
      {/* Animated gradient background using CSS */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 animate-pulse" style={{animationDuration: '8s'}}></div>
      
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent animate-pulse" style={{animationDuration: '12s', animationDelay: '2s'}}></div>
      
      {/* Moving light effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent animate-pulse" style={{animationDuration: '15s', animationDelay: '4s'}}></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};

export default ShaderBackground;
