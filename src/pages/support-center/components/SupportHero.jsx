import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Silk from '../../../components/ui/Silk';

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
    <div className="relative min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] overflow-hidden">
      {/* Premium Background Effects */}
      <div className="absolute inset-0 z-0">
        <Silk
          speed={2}
          scale={1.5}
          color="#3B82F6"
          noiseIntensity={0.4}
          rotation={0.02}
        />
      </div>
      
      {/* Sophisticated Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A]/95 via-[#1E293B]/90 to-[#334155]/85 z-10"></div>
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#3B82F6]/10 rounded-full blur-3xl z-20"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#1D4ED8]/8 rounded-full blur-3xl z-20"></div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-20 w-3 h-3 bg-[#3B82F6]/30 rounded-full animate-pulse z-30"></div>
      <div className="absolute top-40 right-32 w-2 h-2 bg-[#64748B]/40 rounded-full animate-pulse delay-1000 z-30"></div>
      <div className="absolute bottom-40 left-32 w-2 h-2 bg-[#475569]/50 rounded-full animate-pulse delay-2000 z-30"></div>
      
      <div className="relative z-40 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Heading */}
          <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight leading-tight">
              How can we help you{' '}
              <span className="text-[#3B82F6]">
                today
              </span>?
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <p className="text-xl md:text-2xl text-gray-200 mb-16 max-w-4xl mx-auto leading-relaxed font-light">
              Get instant support from our electrical experts, access technical resources, or connect with our community of professionals
            </p>
          </div>
          
          {/* Premium Search Bar */}
          <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <form onSubmit={handleSubmit} className="max-w-3xl mx-auto mb-16">
              <div className={`relative transition-all duration-300 ${
                searchFocused ? 'scale-105' : 'scale-100'
              }`}>
                <div className="absolute inset-0 bg-[#3B82F6]/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-[#1E293B]/80 backdrop-blur-xl rounded-2xl border border-[#475569] p-2">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-16 h-16 ml-2">
                      <Icon name="Search" size={28} color="#3B82F6" />
                    </div>
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setSearchFocused(true)}
                      onBlur={() => setSearchFocused(false)}
                      placeholder="Search for help articles, products, or ask a question..."
                      className="flex-1 bg-transparent text-white placeholder-gray-300 px-6 py-4 text-lg focus:outline-none font-medium"
                    />
                    <Button
                      type="submit"
                      variant="default"
                      className="bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold px-10 py-4 rounded-xl mr-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3B82F6]/25"
                    >
                      <Icon name="Search" size={20} className="mr-2" />
                      Search
                    </Button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          
          {/* Quick Action Tags */}
          <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex flex-wrap justify-center gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={action.text}
                  onClick={() => setSearchQuery(action.text)}
                  className="group relative px-6 py-3 bg-[#1E293B]/60 backdrop-blur-sm text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-[#3B82F6] hover:scale-105 border border-[#475569] hover:border-[#3B82F6]"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-2">
                    <Icon name={action.icon} size={16} />
                    <span>{action.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          {/* Stats Section */}
          <div className={`transition-all duration-1000 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
              {[
                { number: "24/7", label: "Support Available", icon: "Clock" },
                { number: "<2min", label: "Response Time", icon: "Zap" },
                { number: "99.9%", label: "Satisfaction Rate", icon: "Heart" }
              ].map((stat, index) => (
                <div key={stat.label} className="text-center group">
                  <div className="w-16 h-16 bg-[#1E293B] border border-[#475569] rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:border-[#3B82F6] group-hover:scale-110 transition-all duration-300">
                    <Icon name={stat.icon} size={28} color="#3B82F6" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
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