import React from "react"

export function SupportShaderBackground() {
  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      {/* Manual Mesh Gradient Effect */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <defs>
          <radialGradient id="mesh1" cx="0.3" cy="0.3" r="0.8">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mesh2" cx="0.7" cy="0.7" r="0.6">
            <stop offset="0%" stopColor="#333333" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#333333" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="mesh3" cx="0.5" cy="0.5" r="1">
            <stop offset="0%" stopColor="#1a1a1a" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#1a1a1a" stopOpacity="0" />
          </radialGradient>
        </defs>
        
        {/* Base gradient */}
        <rect width="100" height="100" fill="url(#mesh3)" />
        
        {/* Mesh elements */}
        <circle cx="30" cy="30" r="25" fill="url(#mesh1)" className="animate-pulse" style={{animationDuration: '4s'}} />
        <circle cx="70" cy="70" r="20" fill="url(#mesh2)" className="animate-pulse" style={{animationDuration: '6s', animationDelay: '1s'}} />
        <circle cx="50" cy="50" r="15" fill="url(#mesh1)" className="animate-pulse" style={{animationDuration: '5s', animationDelay: '2s'}} />
      </svg>
      
      {/* Additional animated elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/3 rounded-full blur-2xl animate-pulse" style={{animationDuration: '2s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 bg-white/2 rounded-full blur-xl animate-pulse" style={{animationDuration: '4s', animationDelay: '0.5s'}}></div>
      </div>
    </div>
  )
}
