import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import { SlidingNumber } from '../../../components/ui/sliding-number';
import { Component as RaycastBackground } from '../../../components/ui/raycast-animated-background';

const HeroSection = () => {
  const [animateStats, setAnimateStats] = useState(false);

  useEffect(() => {
    // Start animation immediately when component mounts
    setAnimateStats(true);
  }, []);

  const stats = [
    { value: 25, label: "Years of Excellence" },
    { value: 50, label: "Products (K)" },
    { value: 1, label: "Happy Customers (M)" },
    { value: 500, label: "Cities Served" }
  ];

  return (
    <div className="w-full dark relative min-h-screen overflow-hidden">
      {/* Raycast Animated Background */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <div className="w-full h-full">
          <RaycastBackground />
        </div>
      </div>
      
      {/* Content */}
      <div className="pt-20 pb-16 w-full flex items-center justify-center min-h-screen relative z-10">
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Powering India's
                <span className="block">
                  <span className="text-brand-red">Electrical</span>
                  <span className="text-white"> Future</span>
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
                For over 25 years, Promac has been the trusted partner for electrical professionals across India, 
                delivering precision, quality, and innovation in every component.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto hero-stats">
              {stats.map((stat, index) => (
                <div key={index} className="glass-ios rounded-xl p-6 text-center">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 flex items-center justify-center">
                    <div className="flex items-center">
                      {animateStats ? (
                        <SlidingNumber 
                          value={stat.value} 
                          decimalSeparator=""
                          delay={index * 100} // Minimal stagger delay for immediate animation
                        />
                      ) : (
                        <span className="animate-pulse">0</span>
                      )}
                      <span className="ml-1">
                        {stat.label.includes("(K)") ? "K+" : 
                         stat.label.includes("(M)") ? "M+" : "+"}
                      </span>
                    </div>
                  </div>
                  <div className="text-white/80 text-sm">
                    {stat.label.replace(/\([^)]*\)/g, '')}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="cta-primary px-8 py-4 rounded-full font-semibold flex items-center space-x-2 brand-transition">
                <Icon name="Play" size={20} />
                <span>Watch Our Story</span>
              </button>
              <button className="cta-secondary px-8 py-4 rounded-full font-semibold flex items-center space-x-2 brand-transition">
                <Icon name="ArrowDown" size={20} />
                <span>Explore Journey</span>
              </button>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
            <Icon name="ChevronDown" size={32} color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;