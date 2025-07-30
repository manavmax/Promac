import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TrustSignals = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const partnerships = [
    {
      id: 1,
      name: "Havells India",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      type: "Manufacturing Partner",
      description: "Authorized distributor for premium electrical products"
    },
    {
      id: 2,
      name: "Schneider Electric",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      type: "Technology Partner",
      description: "Smart automation and energy management solutions"
    },
    {
      id: 3,
      name: "Legrand India",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      type: "Strategic Partner",
      description: "Modular switches and home automation systems"
    },
    {
      id: 4,
      name: "Siemens India",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop",
      type: "Industrial Partner",
      description: "Industrial automation and control systems"
    }
  ];

  const certifications = [
    {
      id: 1,
      name: "BIS Certification",
      icon: "Shield",
      description: "Bureau of Indian Standards certified products",
      validity: "Valid until 2026"
    },
    {
      id: 2,
      name: "ISO 9001:2015",
      icon: "Award",
      description: "Quality Management System certification",
      validity: "Renewed annually"
    },
    {
      id: 3,
      name: "CE Marking",
      icon: "CheckCircle",
      description: "European Conformity for export products",
      validity: "Compliant products"
    },
    {
      id: 4,
      name: "MSME Registered",
      icon: "Building",
      description: "Government recognized small enterprise",
      validity: "Registration active"
    }
  ];

  const metrics = [
    {
      id: 1,
      value: "99.2%",
      label: "Customer Satisfaction",
      icon: "Star",
      color: "brand-amber"
    },
    {
      id: 2,
      value: "24hrs",
      label: "Average Delivery Time",
      icon: "Truck",
      color: "action-blue"
    },
    {
      id: 3,
      value: "50K+",
      label: "Projects Completed",
      icon: "Building2",
      color: "brand-green"
    },
    {
      id: 4,
      value: "25+",
      label: "Years Experience",
      icon: "Clock",
      color: "brand-navy"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const itemId = entry.target.dataset.itemId;
            setVisibleItems(prev => [...new Set([...prev, itemId])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = document.querySelectorAll('[data-item-id]');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-headline">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Our partnerships with leading manufacturers, industry certifications, and proven track record demonstrate our commitment to quality and reliability
          </p>
        </div>

        {/* Performance Metrics */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.id}
              data-item-id={`metric-${metric.id}`}
              className={`text-center space-y-4 brand-transition ${
                visibleItems.includes(`metric-${metric.id}`) 
                  ? 'trust-reveal revealed' :'trust-reveal'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-${metric.color}/10 flex items-center justify-center`}>
                <Icon name={metric.icon} size={32} className={`text-${metric.color}`} />
              </div>
              <div className="space-y-1">
                <div className={`text-3xl font-bold text-${metric.color}`}>
                  {metric.value}
                </div>
                <div className="text-sm font-medium text-text-secondary">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Partnerships */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">Manufacturing Partnerships</h3>
            <p className="text-text-secondary">Authorized partnerships with India's leading electrical manufacturers</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div
                key={partner.id}
                data-item-id={`partner-${partner.id}`}
                className={`glass-effect rounded-xl p-6 text-center space-y-4 brand-transition hover:bg-white/50 ${
                  visibleItems.includes(`partner-${partner.id}`) 
                    ? 'trust-reveal revealed' :'trust-reveal'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="w-20 h-12 mx-auto rounded-lg overflow-hidden bg-white p-2">
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-brand-navy">{partner.name}</h4>
                  <div className="text-xs font-medium text-brand-amber bg-brand-amber/10 px-2 py-1 rounded-full">
                    {partner.type}
                  </div>
                  <p className="text-xs text-text-secondary">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">Quality Certifications</h3>
            <p className="text-text-secondary">Industry-recognized certifications ensuring product quality and compliance</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                data-item-id={`cert-${cert.id}`}
                className={`neomorphic-card rounded-xl p-6 space-y-4 brand-transition ${
                  visibleItems.includes(`cert-${cert.id}`) 
                    ? 'trust-reveal revealed' :'trust-reveal'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-brand-green/10 rounded-xl">
                    <Icon name={cert.icon} size={24} className="text-brand-green" />
                  </div>
                  <div className="w-2 h-2 bg-brand-green rounded-full animate-pulse"></div>
                </div>
                <div className="space-y-2">
                  <h4 className="font-semibold text-brand-navy">{cert.name}</h4>
                  <p className="text-sm text-text-secondary">{cert.description}</p>
                  <div className="text-xs font-medium text-brand-green">{cert.validity}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Statement */}
        <div className="mt-16 text-center">
          <div className="glass-hero rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-2">
                <Icon name="Shield" size={24} className="text-brand-green" />
                <h3 className="text-2xl font-bold text-brand-navy">Your Trust, Our Commitment</h3>
              </div>
              <p className="text-text-secondary max-w-2xl mx-auto leading-relaxed">
                Every product we supply undergoes rigorous quality testing and comes with comprehensive warranty coverage. Our partnerships with industry leaders ensure you receive only the finest electrical components for your projects.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cta-primary px-6 py-3 rounded-xl font-semibold flex items-center space-x-2">
                  <Icon name="FileText" size={18} />
                  <span>View Certifications</span>
                </button>
                <button className="cta-secondary px-6 py-3 rounded-xl font-semibold text-white flex items-center space-x-2">
                  <Icon name="Users" size={18} />
                  <span>Our Partners</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;