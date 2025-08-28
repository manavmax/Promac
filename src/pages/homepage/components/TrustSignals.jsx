import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import { SlidingNumber } from '../../../components/ui/sliding-number';

const TrustSignals = () => {
  const [visibleItems, setVisibleItems] = useState([]);

  const handleLearnMore = () => {
    // Navigate to about page for more information
    window.location.href = '/about-promac';
  };

  const handleDownloadCertificates = () => {
    // Create a zip file with sample certificates or redirect to certificates page
    const certificates = [
      { name: 'BIS_Certification_2026.pdf', url: '/certificates/bis-certification.pdf' },
      { name: 'ISO_9001_2015_Certificate.pdf', url: '/certificates/iso-certification.pdf' },
      { name: 'CE_Marking_Compliance.pdf', url: '/certificates/ce-marking.pdf' },
      { name: 'MSME_Registration_Certificate.pdf', url: '/certificates/msme-registration.pdf' }
    ];
    
    // For now, show an alert with certificate names
    alert('Certificates available for download:\n\n' + 
          certificates.map(cert => `• ${cert.name}`).join('\n') + 
          '\n\nPlease contact us for actual certificate downloads.');
  };

  const partnerships = [
    {
      id: 1,
      name: "Havells India",
      logo: "/assets/images/partnership-logos/2109144.png",
      type: "Manufacturing Partner",
      description: "Authorized distributor for premium electrical products"
    },
    {
      id: 2,
      name: "Schneider Electric",
      logo: "/assets/images/partnership-logos/SU.PA_BIG-8cd10b23.png",
      type: "Technology Partner",
      description: "Smart automation and energy management solutions"
    },
    {
      id: 3,
      name: "Legrand India",
      logo: "/assets/images/partnership-logos/Logo_Legrand_SA.svg.png",
      type: "Strategic Partner",
      description: "Modular switches and home automation systems"
    },
    {
      id: 4,
      name: "Siemens India",
      logo: "/assets/images/partnership-logos/Siemens_AG_logo.svg.png",
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
    <section className="py-20 section-premium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            <span className="text-white">Trusted by </span>
            <span className="text-[#FF0C0D]">Industry</span>
            <span className="text-white"> Leaders</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
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
              <div className="w-16 h-16 mx-auto rounded-2xl ring-1 ring-white/10 bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.35)]">
                <Icon name={metric.icon} size={24} color="#FF0C0D" />
              </div>
              <div className="space-y-1">
                {(() => {
                  return (
                    <div className={`text-3xl font-extrabold inline-flex items-baseline gap-1 tabular-nums text-white`}>
                  {metric.value.includes('%') && (
                    <>
                      <SlidingNumber value={parseFloat(metric.value)} delay={150} />
                      <span className={"text-white"}>%</span>
                    </>
                  )}
                  {metric.value.includes('K') && (
                    <>
                      <SlidingNumber value={parseInt(metric.value)} delay={200} />
                      <span className={"text-white"}>K+</span>
                    </>
                  )}
                  {metric.value.includes('hrs') && (
                    <>
                      <SlidingNumber value={parseInt(metric.value)} delay={250} />
                      <span className={"text-white"}>hrs</span>
                    </>
                  )}
                  {!metric.value.includes('%') && !metric.value.includes('K') && !metric.value.includes('hrs') && (
                    <>
                      <SlidingNumber value={parseInt(metric.value)} delay={300} />
                      <span className={"text-white"}>+</span>
                    </>
                  )}
                    </div>
                  );
                })()}
                <div className="text-sm font-medium text-white">
                  {metric.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Manufacturing Partnerships */}
        <div className="space-y-8 mt-12 sm:mt-16 mb-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Manufacturing Partnerships</h3>
            <p className="text-slate-300">Authorized partnerships with India's leading electrical manufacturers</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partner, index) => (
              <div
                key={partner.id}
                data-item-id={`partner-${partner.id}`}
                className={`group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/25 to-white/5 brand-transition ${
                  visibleItems.includes(`partner-${partner.id}`) 
                    ? 'trust-reveal revealed' :'trust-reveal'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="rounded-2xl h-full w-full p-6 bg-white/5 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] group-hover:-translate-y-0.5 transition-transform duration-300 text-center space-y-4">
                  <div className="flex items-center justify-center">
                    <div className="w-24 h-14 rounded-xl bg-white p-2 shadow-inner">
                      <Image src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white tracking-tight">{partner.name}</h4>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 ring-1 ring-white/15">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF0C0D]" />
                      <span className="text-xs font-medium text-white">{partner.type}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{partner.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="space-y-8 mt-12 sm:mt-16">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Quality Certifications</h3>
            <p className="text-slate-300">Industry-recognized certifications ensuring product quality and compliance</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                data-item-id={`cert-${cert.id}`}
                className={`group relative rounded-2xl p-[1px] bg-gradient-to-br from-white/25 to-white/5 brand-transition ${
                  visibleItems.includes(`cert-${cert.id}`)
                    ? 'trust-reveal revealed' :'trust-reveal'
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="rounded-2xl h-full w-full p-6 bg-white/5 ring-1 ring-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)] group-hover:-translate-y-0.5 transition-transform duration-300">
                  <div className="flex items-start justify-between">
                    <div className="p-3 rounded-xl ring-1 ring-white/10 bg-white/10">
                      <Icon name={cert.icon} size={22} color="#FF0C0D" />
                    </div>
                    <div className="w-2 h-2 bg-[#FF0C0D] rounded-full animate-pulse"></div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <h4 className="font-semibold text-white tracking-tight">{cert.name}</h4>
                    <p className="text-sm text-slate-300 leading-relaxed">{cert.description}</p>
                    <div className="text-xs font-semibold text-white">{cert.validity}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Trust Statement */}
        <div className="mt-20 text-center">
          <div className="relative max-w-5xl mx-auto p-[1px] rounded-3xl bg-gradient-to-r from-white/25 to-white/5">
            <div className="rounded-3xl px-8 py-10 bg-white/5 ring-1 ring-white/10 shadow-[0_18px_48px_rgba(0,0,0,0.35)]">
              <div className="flex items-center justify-center gap-3">
                <div className="p-3 rounded-2xl ring-1 ring-white/10 bg-white/10">
                  <Icon name="Shield" size={24} color="#FF0C0D" />
                </div>
                <h3 className="text-3xl font-bold text-white">Your Trust, Our Commitment</h3>
              </div>
              <div className="mt-4 flex justify-center">
                <div className="h-0.5 w-20 rounded-full bg-[#FF0C0D]" />
              </div>
              <p className="mt-6 text-slate-300 max-w-3xl mx-auto leading-relaxed text-lg">
                Every product we supply undergoes rigorous quality testing and comes with comprehensive warranty coverage. Our partnerships with industry leaders ensure you receive only the finest electrical components for your projects.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleLearnMore}
                  className="px-8 py-4 rounded-full font-semibold flex items-center gap-3 bg-[#FF0C0D] text-white hover:bg-[#FF0C0D]/90 shadow-lg transition-colors"
                >
                  <Icon name="Shield" size={18} />
                  <span>Learn More</span>
                </button>
                <button
                  onClick={handleDownloadCertificates}
                  className="px-8 py-4 rounded-full font-semibold flex items-center gap-3 bg-white text-black ring-1 ring-white/80 hover:bg-white/90 transition-colors"
                >
                  <Icon name="Download" size={18} color="#000000" />
                  <span>Download Certificates</span>
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