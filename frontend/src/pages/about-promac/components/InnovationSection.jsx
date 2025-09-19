import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InnovationSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const innovationProjects = [
    {
      title: "Smart Home Integration Platform",
      category: "IoT Technology",
      status: "In Development",
      description: "Revolutionary platform enabling seamless integration of electrical components with smart home systems, featuring AI-powered automation and energy optimization.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      features: [
        "AI-powered energy optimization",
        "Voice-controlled automation",
        "Real-time monitoring and alerts",
        "Cross-platform compatibility"
      ],
      team: "15 Engineers",
      timeline: "Q4 2024",
      investment: "₹50M",
      stats: [
        { value: "15", label: "Engineers" },
        { value: "Q4", label: "Launch" },
        { value: "₹50M", label: "Investment" }
      ]
    },
    {
      title: "Advanced Circuit Protection System",
      category: "Safety Technology",
      status: "Prototype Phase",
      description: "Next-generation circuit protection system with predictive maintenance capabilities and intelligent fault detection for enhanced electrical safety.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      features: [
        "Predictive fault detection",
        "Real-time safety monitoring",
        "Automated response systems",
        "Cloud-based analytics"
      ],
      team: "12 Engineers",
      timeline: "Q1 2025",
      investment: "₹35M",
      stats: [
        { value: "12", label: "Engineers" },
        { value: "Q1", label: "Launch" },
        { value: "₹35M", label: "Investment" }
      ]
    },
    {
      title: "Sustainable Energy Management",
      category: "Green Technology",
      status: "Research Phase",
      description: "Comprehensive energy management solution for commercial and residential applications, optimizing power consumption and reducing carbon footprint.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      features: [
        "Smart grid integration",
        "Renewable energy optimization",
        "Carbon footprint tracking",
        "Energy cost reduction"
      ],
      team: "18 Engineers",
      timeline: "Q2 2025",
      investment: "₹75M",
      stats: [
        { value: "18", label: "Engineers" },
        { value: "Q2", label: "Launch" },
        { value: "₹75M", label: "Investment" }
      ]
    }
  ];

  const innovationStats = [
    { value: "₹200M+", label: "Total Investment" },
    { value: "45+", label: "Engineers" },
    { value: "12+", label: "Active Projects" },
    { value: "8+", label: "Patents Filed" }
  ];

  const researchAreas = [
    {
      title: "Artificial Intelligence",
      description: "AI-powered electrical systems and predictive maintenance solutions",
      icon: "Brain",
      progress: 85
    },
    {
      title: "IoT & Connectivity",
      description: "Internet of Things integration for smart electrical infrastructure",
      icon: "Wifi",
      progress: 92
    },
    {
      title: "Sustainable Energy",
      description: "Green energy solutions and renewable power integration",
      icon: "Leaf",
      progress: 78
    }
  ];

  const partnerships = [
    {
      partner: "Havells",
      type: "Research",
      focus: "AI & IoT Integration",
      duration: "5 Years",
      logo: "/assets/images/partnership-logos/2109144.png"
    },
    {
      partner: "Siemens",
      type: "Technology",
      focus: "Smart Grid Solutions",
      duration: "3 Years",
      logo: "/assets/images/partnership-logos/Siemens_AG_logo.svg.png"
    },
    {
      partner: "ABB",
      type: "Product Development",
      focus: "Circuit Protection",
      duration: "4 Years",
      logo: "/assets/images/ABB_Logo_Print_CMYK_White.png"
    },
    {
      partner: "Schneider Electric",
      type: "Innovation",
      focus: "Energy Management",
      duration: "6 Years",
      logo: "/assets/images/partnership-logos/SU.PA_BIG-8cd10b23.png"
    }
  ];

  return (
    <section className="w-full dark relative min-h-screen overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Innovation Lab
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our state-of-the-art innovation lab drives the future of electrical technology through 
            cutting-edge research, development, and strategic partnerships with leading institutions.
          </p>
        </div>

        {/* Innovation Projects */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Active Innovation Projects</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Revolutionary projects that are shaping the future of electrical technology and smart infrastructure.
            </p>
          </div>

          {/* Project Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {innovationProjects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`flex items-center space-x-3 px-6 py-4 rounded-full font-semibold brand-transition ${
                  activeProject === index
                    ? 'bg-brand-red text-white shadow-lg'
                    : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                <Icon name="Lightbulb" size={20} />
                <div className="text-left">
                  <div className="font-semibold">{project.title}</div>
                  <div className="text-xs opacity-80">{project.category}</div>
                </div>
              </button>
            ))}
          </div>

          {/* Active Project Details */}
          <div className="glass-ios rounded-3xl p-8 md:p-12">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="text-2xl font-bold text-white mb-2">
                    {innovationProjects[activeProject].title}
                  </h4>
                  <p className="text-white/80 mb-4">
                    {innovationProjects[activeProject].description}
                  </p>
                </div>

                <div className="space-y-4">
                  <h5 className="font-semibold text-white">Key Features:</h5>
                  <div className="grid grid-cols-1 gap-2">
                    {innovationProjects[activeProject].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="Check" size={16} color="var(--color-brand-amber)" />
                        <span className="text-white/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-4">
                  {innovationProjects[activeProject].stats.map((stat, index) => (
                    <div key={index} className="glass-ios rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-xs text-white/60">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="glass-ios rounded-full p-3 hover:scale-105 transition-transform">
                    <Icon name="Play" size={20} color="white" />
                  </button>
                  <button className="glass-ios rounded-full p-3 hover:scale-105 transition-transform">
                    <Icon name="Eye" size={20} color="white" />
                  </button>
                  <button className="glass-ios rounded-full p-3 hover:scale-105 transition-transform">
                    <Icon name="Share" size={20} color="white" />
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={innovationProjects[activeProject].image}
                    alt={innovationProjects[activeProject].title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <div className="glass-ios rounded-full p-3">
                      <Icon name="Zap" size={20} color="white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Innovation Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {innovationStats.map((stat, index) => (
              <div key={index} className="glass-ios rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Research Areas */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white text-center mb-12">Research & Development Areas</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {researchAreas.map((area, index) => (
                <div key={index} className="glass-ios rounded-2xl p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{backgroundColor: '#ff0c0e'}}>
                    <Icon name={area.icon} size={32} color="white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{area.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{area.description}</p>
                  <div className="text-2xl font-bold text-brand-amber">{area.progress}%</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Research Focus Areas</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Strategic research initiatives driving innovation across multiple domains of electrical technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="glass-ios rounded-2xl p-6 text-center min-h-[280px] flex flex-col justify-between border border-white/30 hover:border-white/50 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500 relative overflow-hidden group">
                {/* Glassmorphism gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-50"></div>
                
                <div className="space-y-4 relative z-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto backdrop-blur-sm border border-white/20 shadow-lg" style={{backgroundColor: '#ff0c0e'}}>
                    <Icon name={area.icon} size={24} color="white" />
                  </div>
                  <h4 className="font-bold text-white text-lg drop-shadow-sm">{area.title}</h4>
                  <p className="text-sm text-white/80 leading-relaxed drop-shadow-sm">{area.description}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Active Projects:</span>
                    <span className="font-semibold text-white text-lg drop-shadow-sm">{area.progress}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">Strategic Partnerships</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              Collaborating with leading institutions and technology companies to accelerate innovation and research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <div key={index} className="relative rounded-2xl p-6 text-center min-h-[280px] flex flex-col justify-between overflow-hidden group">
                {/* Dark semi-transparent gray background with frosted glass effect */}
                <div className="absolute inset-0 bg-gray-800/40 backdrop-blur-2xl rounded-2xl"></div>
                
                {/* Very faint light border/glow around edges */}
                <div className="absolute inset-0 rounded-2xl border border-white/5 shadow-[0_0_30px_rgba(255,255,255,0.08)]"></div>
                
                <div className="space-y-4 relative z-10">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{backgroundColor: '#ff0c0e'}}>
                    <Icon name="Building" size={24} color="white" />
                  </div>
                  <h4 className="font-bold text-white text-lg">{partnership.partner}</h4>
                  <div className="space-y-2 text-sm">
                    <div className="px-3 py-1 text-white bg-white/10 rounded-full">
                      {partnership.type}
                    </div>
                    <div className="text-white/80">{partnership.focus}</div>
                    <div className="font-semibold text-white">{partnership.duration}</div>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-white/20 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-white/60 text-sm">Partnership:</span>
                    <span className="font-semibold text-white text-lg">Active</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;