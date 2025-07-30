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
      description: 'State-of-the-art testing laboratories ensuring every product meets international standards'
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

  const renderTabContent = () => {
    switch (activeTab) {
      case 'testing':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">World-Class Testing Facilities</h3>
              <p className="text-text-secondary max-w-3xl mx-auto">
                Our state-of-the-art testing laboratories ensure every product meets the highest quality standards 
                through rigorous testing protocols and advanced equipment.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {testingFacilities.map((facility, index) => (
                <div key={index} className="neomorphic-card rounded-2xl p-6 space-y-4">
                  <div className="aspect-video rounded-xl overflow-hidden shadow-brand">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-brand-navy">{facility.name}</h4>
                  <p className="text-sm text-text-secondary">{facility.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-brand-navy text-sm">Key Equipment:</h5>
                    <div className="flex flex-wrap gap-1">
                      {facility.equipment.map((item, idx) => (
                        <span key={idx} className="text-xs bg-brand-amber/10 text-brand-navy px-2 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-text-secondary">Capacity:</span>
                    <span className="font-semibold text-brand-navy">{facility.capacity}</span>
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
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Global Certifications</h3>
              <p className="text-text-secondary max-w-3xl mx-auto">
                Our comprehensive certification portfolio demonstrates our commitment to quality, 
                safety, and compliance with international standards.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="neomorphic-card rounded-2xl p-6 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full overflow-hidden shadow-brand">
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h4 className="font-bold text-brand-navy">{cert.name}</h4>
                  <p className="text-sm text-text-secondary">{cert.description}</p>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="font-semibold text-brand-navy">Scope: </span>
                      <span className="text-text-secondary">{cert.scope}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-brand-navy">Status: </span>
                      <span className="text-brand-green">{cert.validity}</span>
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
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Quality Control Process</h3>
              <p className="text-text-secondary max-w-3xl mx-auto">
                Our systematic quality control process ensures consistent product quality 
                from supplier selection to customer delivery.
              </p>
            </div>
            <div className="relative">
              {/* Process Flow */}
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0 lg:space-x-4">
                {qualityProcess.map((process, index) => (
                  <div key={index} className="relative flex-1 max-w-xs">
                    <div className="neomorphic-card rounded-2xl p-6 text-center space-y-4">
                      <div className="w-16 h-16 bg-brand-amber rounded-full flex items-center justify-center mx-auto shadow-brand">
                        <Icon name={process.icon} size={24} color="white" />
                      </div>
                      <div className="absolute -top-3 -left-3 w-8 h-8 bg-brand-navy text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {process.step}
                      </div>
                      <h4 className="font-bold text-brand-navy">{process.title}</h4>
                      <p className="text-sm text-text-secondary">{process.description}</p>
                    </div>
                    {index < qualityProcess.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                        <Icon name="ArrowRight" size={20} color="var(--color-brand-amber)" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'standards':
        return (
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Industry Standards Compliance</h3>
              <p className="text-text-secondary max-w-3xl mx-auto">
                We adhere to the highest industry standards across all categories, 
                ensuring our products meet global quality and safety requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {standards.map((standard, index) => (
                <div key={index} className="neomorphic-card rounded-2xl p-6 space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-12 h-12 bg-brand-amber rounded-full flex items-center justify-center">
                      <Icon name="Shield" size={20} color="white" />
                    </div>
                    <h4 className="font-bold text-brand-navy text-lg">{standard.category}</h4>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">{standard.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-brand-navy text-sm">Applicable Standards:</h5>
                    <div className="flex flex-wrap gap-2">
                      {standard.standards.map((std, idx) => (
                        <span key={idx} className="text-xs bg-brand-navy/10 text-brand-navy px-3 py-1 rounded-full border border-brand-navy/20">
                          {std}
                        </span>
                      ))}
                    </div>
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
    <section className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Quality Assurance Excellence
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
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
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold brand-transition ${
                activeTab === tab.id
                  ? 'bg-brand-navy text-white shadow-primary'
                  : 'bg-white text-brand-navy border border-brand-navy/20 hover:bg-brand-navy hover:text-white'
              }`}
            >
              <Icon name={tab.icon} size={20} />
              <div className="text-left">
                <div className="font-semibold">{tab.name}</div>
                <div className="text-xs opacity-80 hidden sm:block">{tab.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="glass-hero rounded-3xl p-8 md:p-12 shadow-brand">
          {renderTabContent()}
        </div>

        {/* Quality Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="neomorphic-card rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-brand-amber mb-2">99.8%</div>
            <div className="text-sm text-text-secondary">Quality Pass Rate</div>
          </div>
          <div className="neomorphic-card rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-brand-amber mb-2">24/7</div>
            <div className="text-sm text-text-secondary">Quality Monitoring</div>
          </div>
          <div className="neomorphic-card rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-brand-amber mb-2">15+</div>
            <div className="text-sm text-text-secondary">Certifications</div>
          </div>
          <div className="neomorphic-card rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-brand-amber mb-2">50K+</div>
            <div className="text-sm text-text-secondary">Products Tested</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;