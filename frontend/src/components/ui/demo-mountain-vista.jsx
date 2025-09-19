import React from 'react';
import MountainVistaParallax from './mountain-vista-bg';

export default function DemoMountainVista() {
  return (
    <div className="app-container">
      {/* Hero Section with Parallax Effect */}
      <MountainVistaParallax 
        title="Mountain Adventures" 
        subtitle="Discover breathtaking landscapes and cycling trails" 
      />
    </div>
  );
}
