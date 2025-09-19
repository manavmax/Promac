import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Component as RaycastBackground } from '../../../components/ui/raycast-animated-black-background';

const SupportHero = ({ onSearchSubmit, searchQuery, setSearchQuery }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit(searchQuery);
  };

  const quickActions = [
    { text: "Product Installation", icon: "Settings" },
    { text: "Warranty Claims", icon: "Shield" },
    { text: "Technical Specs", icon: "FileText" },
    { text: "Code Compliance", icon: "CheckCircle" },
    { text: "Bulk Orders", icon: "Package" }
  ];

  return (
    <div className="relative min-h-screen bg-black overflow-hidden -mt-20 pt-20">
      {/* Raycast Animated Background */}
      <div className="absolute inset-0">
        <RaycastBackground />
      </div>
      
      <div className="relative z-40 flex flex-col items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto w-full">
          {/* Main Heading */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              How can we help you{' '}
              <span className="text-[#ff0c0e]">
                today
              </span>?
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
              Get instant support from our electrical experts, access technical resources, or connect with our community of professionals
            </p>
          </div>
          
          {/* Premium Search Bar */}
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-12">
              <div className={`relative transition-all duration-300 ${
                searchFocused ? 'scale-105' : 'scale-100'
              }`}>
                <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-3 shadow-2xl shadow-black/20">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 ml-2">
                      <Icon name="Search" size={24} color="white" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                      placeholder="Search for help articles, products, or ask a question..."
                      className="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-3 text-base focus:outline-none font-medium"
                    />
                    <Button
                      type="submit"
                      variant="default"
                      className="bg-gradient-to-r from-[#ff0c0e] to-[#e00b0c] hover:from-[#e00b0c] hover:to-[#d00a0b] text-white font-semibold px-6 py-3 rounded-2xl mr-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff0c0e]/30 backdrop-blur-sm"
                    >
                      <Icon name="Search" size={18} className="mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          {/* Quick Action Tags */}
          <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-3">
              {quickActions.map((action, index) => (
                <button
                  key={action.text}
                  onClick={() => setSearchQuery(action.text)}
                  className="group relative px-6 py-3 bg-white/5 backdrop-blur-xl text-white rounded-2xl text-sm font-semibold transition-all duration-300 hover:bg-white/10 hover:scale-105 border border-white/20 hover:border-[#ff0c0e]/50 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#ff0c0e]/20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    <Icon name={action.icon} size={18} className="text-[#ff0c0e]" />
                    <span>{action.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Stats Section */}
          <div className={`transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
              {[
                { number: "24/7", label: "Support Available", icon: "Clock" },
                { number: "<2min", label: "Response Time", icon: "Zap" },
                { number: "99.9%", label: "Satisfaction Rate", icon: "Heart" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="w-16 h-16 bg-white/5 backdrop-blur-2xl border border-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:border-[#ff0c0e] group-hover:scale-110 transition-all duration-300 group-hover:bg-white/10 shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-[#ff0c0e]/20">
                    <Icon name={stat.icon} size={28} color="#ff0c0e" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-3">{stat.number}</div>
                  <div className="text-gray-300 text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportHero;