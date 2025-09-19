import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const QualitySection = () => {
  const [activeTab, setActiveTab] = useState('testing');

  const qualityTabs = [
    {
      id: 'testing',
      name: 'Testing Facilities',
      icon: 'TestTube',
      description: 'Testing laboratories ensuring every product meets international standards'
    },
    {
      id: 'certification',
      name: 'Certifications',
      icon: 'Award',
      description: 'Comprehensive certification processes including BIS, ISO, and international standards'
    },
    {
      id: 'process',
      name: 'Quality Process',
      icon: 'Settings',
      description: 'Rigorous quality control processes from procurement to delivery'
    },
    {
      id: 'standards',
      name: 'Standards',
      icon: 'Shield',
      description: 'Adherence to highest industry standards and safety regulations'
    }
  ];

  const testingFacilities = [
    {
      name: "Electrical Safety Testing Lab",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      description: "Advanced testing equipment for electrical safety, insulation resistance, and voltage withstand tests.",
      equipment: ["High Voltage Test Sets", "Insulation Testers", "Earth Resistance Meters", "Power Quality Analyzers"],
      capacity: "500 products/day"
    },
    {
      name: "Environmental Testing Chamber",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      description: "Climate-controlled chambers testing products under extreme temperature and humidity conditions.",
      equipment: ["Temperature Chambers", "Humidity Controllers", "Vibration Tables", "Salt Spray Chambers"],
      capacity: "200 products/day"
    },
    {
      name: "Material Analysis Lab",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      description: "Sophisticated material testing ensuring component durability and performance standards.",
      equipment: ["Spectroscopy Equipment", "Tensile Testing Machines", "Hardness Testers", "Microscopy Systems"],
      capacity: "100 samples/day"
    }
  ];

  const certifications = [
    {
      name: "BIS Certification",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop",
      description: "Bureau of Indian Standards certification ensuring compliance with Indian electrical standards.",
      scope: "All electrical components and accessories",
      validity: "Valid until 2026"
    },
    {
      name: "ISO 9001:2015",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop",
      description: "International quality management system certification for consistent product quality.",
      scope: "Quality management processes",
      validity: "Valid until 2025"
    },
    {
      name: "CE Marking",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop",
      description: "European Conformity marking for products meeting EU safety and environmental standards.",
      scope: "Export products to European markets",
      validity: "Ongoing compliance"
    },
    {
      name: "UL Listed",
      logo: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop",
      description: "Underwriters Laboratories certification for North American market compliance.",
      scope: "Selected product categories",
      validity: "Valid until 2025"
    }
  ];

  const qualityProcess = [
    {
      step: 1,
      title: "Supplier Qualification",
      description: "Rigorous supplier evaluation and qualification process ensuring only certified manufacturers.",
      icon: "UserCheck"
    },
    {
      step: 2,
      title: "Incoming Inspection",
      description: "100% incoming inspection of all products using automated testing equipment.",
      icon: "Search"
    },
    {
      step: 3,
      title: "Batch Testing",
      description: "Statistical sampling and testing of product batches for quality consistency.",
      icon: "TestTube"
    },
    {
      step: 4,
      title: "Final Verification",
      description: "Final quality verification before packaging and dispatch to customers.",
      icon: "CheckCircle"
    },
    {
      step: 5,
      title: "Customer Feedback",
      description: "Continuous monitoring of customer feedback and quality improvement initiatives.",
      icon: "MessageSquare"
    }
  ];

  const standards = [
    {
      category: "Electrical Safety",
      standards: ["IS 694", "IS 1293", "IS 13947", "IEC 60947"],
      description: "Comprehensive electrical safety standards ensuring user protection and system reliability."
    },
    {
      category: "Environmental",
      standards: ["IS 9000", "IEC 60068", "ROHS Compliance", "REACH Regulation"],
      description: "Environmental standards ensuring eco-friendly products and sustainable manufacturing."
    },
    {
      category: "Performance",
      standards: ["IS 8623", "IEC 61439", "IS 15091", "IEEE Standards"],
      description: "Performance standards ensuring optimal functionality and long-term reliability."
    },
    {
      category: "Quality Management",
      standards: ["ISO 9001", "ISO 14001", "OHSAS 18001", "Six Sigma"],
      description: "Quality management standards ensuring consistent processes and continuous improvement."
    }
  ];

  const qualityStats = [
    { value: "99.8%", label: "Quality Pass Rate" },
    { value: "24/7", label: "Quality Monitoring" },
    { value: "15+", label: "Certifications" },
    { value: "50K+", label: "Products Tested" }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'testing':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">World-Class Testing Facilities</h3>
              <p className="text-text-secondary max-w-3xl mx-auto">
                Our state-of-the-art testing laboratories ensure every product meets the highest quality standards 
                through rigorous testing protocols and advanced equipment.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testingFacilities.map((facility, index) => (
                <div key={index} className="glass-ios rounded-2xl p-6 space-y-4 h-[500px] flex flex-col">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-white text-lg">{facility.name}</h4>
                  <p className="text-sm text-white/80">{facility.description}</p>
                  <div className="space-y-2 flex-1">
                    <h5 className="font-semibold text-white text-sm">Key Equipment:</h5>
                    <div className="flex flex-wrap gap-1">
                      {facility.equipment.map((item, idx) => (
                        <span key={idx} className="text-xs glass-ios text-white px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm mt-auto">
                    <span className="text-white/60">Capacity:</span>
                    <span className="font-semibold text-white">{facility.capacity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'certification':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Global Certifications</h3>
              <p className="text-text-secondary max-w-3xl mx-auto">
                Our comprehensive certification portfolio demonstrates our commitment to quality, 
                safety, and compliance with international standards.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="relative rounded-2xl p-6 text-center min-h-[280px] flex flex-col justify-between overflow-hidden group">
                  {/* Dark semi-transparent gray background with frosted glass effect */}
                  <div className="absolute inset-0 bg-gray-800/40 backdrop-blur-2xl rounded-2xl"></div>
                  
                  {/* Very faint light border/glow around edges */}
                  <div className="absolute inset-0 rounded-2xl border border-white/5 shadow-[0_0_30px_rgba(255,255,255,0.08)]"></div>
                  
                  <div className="space-y-4 relative z-10">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{backgroundColor: '#ff0c0e'}}>
                      <Icon name="Award" size={24} color="white" />
                    </div>
                    <h4 className="font-bold text-white text-lg">{cert.name}</h4>
                    <p className="text-sm text-white/80">{cert.description}</p>
                    <div className="space-y-2 text-xs">
                      <div className="bg-white/10 rounded-lg p-2">
                        <span className="font-semibold text-white">Scope: </span>
                        <span className="text-white/60">{cert.scope}</span>
                      </div>
                      <div className="bg-white/10 rounded-lg p-2">
                        <span className="font-semibold text-white">Status: </span>
                        <span className="text-brand-green">{cert.validity}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/20 relative z-10">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60 text-sm">Certification:</span>
                      <span className="font-semibold text-white text-lg">Valid</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Quality Control Process</h3>
              <p className="text-text-secondary max-w-3xl mx-auto">
                Our systematic quality control process ensures consistent product quality 
                from supplier selection to customer delivery.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qualityProcess.map((process, index) => (
                <div key={index} className="glass-ios rounded-2xl p-4 text-center space-y-2 h-[240px] relative">
                  <div className="w-14 h-14 bg-brand-amber rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <Icon name={process.icon} size={20} color="white" />
                  </div>
                  <div className="absolute top-1 left-2 w-7 h-7 bg-brand-amber text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {process.step}
                  </div>
                  <h4 className="font-bold text-white text-base">{process.title}</h4>
                  <p className="text-sm text-white/80">{process.description}</p>
                  <div className="space-y-1">
                    <h5 className="font-semibold text-white text-sm">Process Details:</h5>
                    <div className="text-xs text-white/60">
                      {process.step === 1 && "Supplier evaluation and qualification process"}
                      {process.step === 2 && "100% incoming inspection using automated equipment"}
                      {process.step === 3 && "Statistical sampling and batch testing protocols"}
                      {process.step === 4 && "Final quality verification before dispatch"}
                      {process.step === 5 && "Continuous monitoring and improvement initiatives"}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-white/60">Step:</span>
                    <span className="font-semibold text-white">{process.step}/5</span>
                  </div>
                  {index < qualityProcess.length - 1 && index % 2 === 1 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <Icon name="ArrowRight" size={20} color="var(--color-brand-amber)" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );

      case 'standards':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">Industry Standards Compliance</h3>
              <p className="text-text-secondary max-w-3xl mx-auto">
                We adhere to the highest industry standards across all categories, 
                ensuring our products meet global quality and safety requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {standards.map((standard, index) => (
                <div key={index} className="glass-ios rounded-2xl p-5 space-y-3 h-[320px]">
                  <div className="w-14 h-14 bg-brand-amber rounded-full flex items-center justify-center mx-auto shadow-2xl">
                    <Icon name="Shield" size={20} color="white" />
                  </div>
                  <h4 className="font-bold text-white text-base text-center">{standard.category}</h4>
                  <p className="text-sm text-white/80 text-center">{standard.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-white text-sm text-center">Applicable Standards:</h5>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {standard.standards.map((std, idx) => (
                        <span key={idx} className="text-xs glass-ios text-white px-3 py-1 rounded-full">
                          {std}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-white text-sm text-center">Compliance Level:</h5>
                    <div className="text-xs text-white/60 text-center">
                      {standard.category === "Electrical Safety" && "100% compliance with all safety standards"}
                      {standard.category === "Environmental" && "Full environmental compliance and sustainability"}
                      {standard.category === "Performance" && "Exceeds performance benchmarks and reliability"}
                      {standard.category === "Quality Management" && "Continuous improvement and process excellence"}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm -mt-1">
                    <span className="text-white/60">Standards:</span>
                    <span className="font-semibold text-white">{standard.standards.length} Active</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="w-full dark relative min-h-screen overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 pt-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Quality Assurance Excellence
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our commitment to quality goes beyond compliance. We've built a comprehensive quality ecosystem 
            that ensures every product meets the highest standards of safety, performance, and reliability.
          </p>
        </div>

        {/* Quality Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {qualityTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold brand-transition h-20 w-72 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-brand-amber to-brand-orange text-white shadow-lg border-2 border-brand-amber'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Icon name={tab.icon} size={20} />
              <div className="text-left flex-1">
                <div className="font-semibold text-sm">{tab.name}</div>
                <div className="text-xs opacity-80 hidden sm:block line-clamp-2">{tab.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="glass-ios rounded-3xl p-8 md:p-12">
          {renderTabContent()}
        </div>

        {/* Quality Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {qualityStats.map((stat, index) => (
            <div key={index} className="glass-ios rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualitySection;