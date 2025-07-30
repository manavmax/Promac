import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';

const WhyPromacSection = () => {
  const [visibleCards, setVisibleCards] = useState([]);

  const differentiators = [
    {
      id: 1,
      icon: "Award",
      title: "BIS Certified Quality",
      description: "All products meet Bureau of Indian Standards with rigorous quality testing and compliance verification",
      metric: "100%",
      metricLabel: "Certified Products",
      color: "brand-green"
    },
    {
      id: 2,
      icon: "Clock",
      title: "25+ Years Expertise",
      description: "Quarter-century of electrical industry experience serving contractors, distributors, and homeowners",
      metric: "25+",
      metricLabel: "Years Experience",
      color: "brand-navy"
    },
    {
      id: 3,
      icon: "Users",
      title: "50,000+ Projects",
      description: "Successfully completed projects across residential, commercial, and industrial sectors nationwide",
      metric: "50K+",
      metricLabel: "Projects Completed",
      color: "action-blue"
    },
    {
      id: 4,
      icon: "Star",
      title: "99.2% Satisfaction",
      description: "Exceptional customer satisfaction rate with dedicated support and quality assurance programs",
      metric: "99.2%",
      metricLabel: "Customer Satisfaction",
      color: "brand-amber"
    },
    {
      id: 5,
      icon: "Truck",
      title: "Pan-India Delivery",
      description: "Nationwide delivery network ensuring fast and reliable product delivery to your doorstep",
      metric: "24-48hrs",
      metricLabel: "Delivery Time",
      color: "brand-orange"
    },
    {
      id: 6,
      icon: "Headphones",
      title: "Expert Support",
      description: "Technical support team with electrical engineers providing installation guidance and troubleshooting",
      metric: "24/7",
      metricLabel: "Support Available",
      color: "brand-green"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => [...new Set([...prev, cardId])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-headline">
            Why Choose Promac Electrical?
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Experience the difference with India's most trusted electrical components supplier, combining decades of expertise with modern technology and uncompromising quality standards
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((item, index) => (
            <div
              key={item.id}
              data-card-id={item.id}
              className={`p-8 rounded-2xl space-y-6 brand-transition shadow-md bg-promac-red-50 border border-promac-red-100 ${
                visibleCards.includes(item.id) 
                  ? 'scroll-reveal revealed' :'scroll-reveal'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon & Metric */}
              <div className="flex items-start justify-between">
                <div className="p-4 rounded-xl bg-promac-red-100">
                  <Icon 
                    name={item.icon} 
                    size={32} 
                    className="text-promac-red-500" 
                  />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-promac-red-700">
                    {item.metric}
                  </div>
                  <div className="text-xs text-text-secondary font-medium">
                    {item.metricLabel}
                  </div>
                </div>
              </div>
              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-promac-red-900">
                  {item.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Progress Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-text-secondary">Quality Score</span>
                  <span className="font-semibold text-promac-red-700">
                    {item.id === 1 ? '100%' : item.id === 2 ? '95%' : item.id === 3 ? '98%' : item.id === 4 ? '99%' : item.id === 5 ? '96%' : '97%'}
                  </span>
                </div>
                <div className="w-full bg-promac-red-100 rounded-full h-2">
                  <div 
                    className="h-2 rounded-full bg-promac-red-500 brand-transition"
                    style={{ 
                      width: visibleCards.includes(item.id) 
                        ? (item.id === 1 ? '100%' : item.id === 2 ? '95%' : item.id === 3 ? '98%' : item.id === 4 ? '99%' : item.id === 5 ? '96%' : '97%')
                        : '0%',
                      transitionDelay: `${index * 200 + 500}ms`
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center">
          <div className="glass-hero rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-brand-navy">
                Ready to Experience the Promac Difference?
              </h3>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Join thousands of satisfied customers who trust Promac for their electrical needs. From small home repairs to large industrial projects, we're your reliable partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="cta-primary px-6 py-3 rounded-xl font-semibold flex items-center space-x-2">
                  <Icon name="ShoppingCart" size={18} />
                  <span>Start Shopping</span>
                </button>
                <button className="cta-secondary px-6 py-3 rounded-xl font-semibold text-white flex items-center space-x-2">
                  <Icon name="Phone" size={18} />
                  <span>Talk to Expert</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPromacSection;