import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecognitionSection = () => {
  const [activeCategory, setActiveCategory] = useState('awards');

  const recognitionCategories = [
    {
      id: 'awards',
      name: 'Industry Awards',
      icon: 'Trophy',
      count: 15,
      description: 'Prestigious industry recognition for excellence and innovation'
    },
    {
      id: 'certifications',
      name: 'Quality Certifications',
      icon: 'Award',
      count: 8,
      description: 'International quality and safety certifications'
    },
    {
      id: 'partnerships',
      name: 'Strategic Partnerships',
      icon: 'Handshake',
      count: 12,
      description: 'Collaborations with leading global brands'
    },
    {
      id: 'media',
      name: 'Media Recognition',
      icon: 'Newspaper',
      count: 25,
      description: 'Featured in leading business and technology publications'
    }
  ];

  const recognitionData = {
    awards: {
      title: "Industry Awards & Recognition",
      description: "Prestigious awards recognizing our commitment to excellence, innovation, and customer satisfaction in the electrical component industry.",
      items: [
        {
          title: "Electrical Component Distributor of the Year",
          organization: "Electrical Industry Association",
          year: "2024",
          category: "Excellence",
          description: "Recognized for outstanding performance in electrical component distribution, customer service, and market leadership across India.",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
        },
        {
          title: "Innovation Excellence Award",
          organization: "India Technology Summit",
          year: "2023",
          category: "Innovation",
          description: "Awarded for breakthrough innovations in smart home integration and IoT-enabled electrical solutions.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
        },
        {
          title: "Customer Satisfaction Excellence",
          organization: "Customer Experience Forum",
          year: "2023",
          category: "Service",
          description: "Achieved highest customer satisfaction scores in the electrical component industry for three consecutive years.",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
        },
        {
          title: "Sustainability Leadership Award",
          organization: "Green Business Council",
          year: "2022",
          category: "Sustainability",
          description: "Recognized for leadership in sustainable business practices and eco-friendly product initiatives.",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
        }
      ]
    },
    certifications: {
      title: "Quality Certifications & Standards",
      description: "Comprehensive certifications demonstrating our commitment to quality, safety, and international standards compliance.",
      items: [
        {
          title: "ISO 9001:2015 Quality Management",
          organization: "International Organization for Standardization",
          year: "2024",
          category: "Quality",
          description: "Certified for excellence in quality management systems and continuous improvement processes.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
        },
        {
          title: "BIS Certification",
          organization: "Bureau of Indian Standards",
          year: "2023",
          category: "Compliance",
          description: "Full compliance with Indian electrical safety standards for all product categories.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
        },
        {
          title: "CE Marking Certification",
          organization: "European Conformity",
          year: "2023",
          category: "International",
          description: "European Union compliance certification for electrical safety and environmental standards.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
        },
        {
          title: "UL Listed Products",
          organization: "Underwriters Laboratories",
          year: "2022",
          category: "Safety",
          description: "UL certification for selected product categories ensuring North American market compliance.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop"
        }
      ]
    },
    partnerships: {
      title: "Strategic Partnerships & Collaborations",
      description: "Strong partnerships with leading global brands and institutions driving innovation and market expansion.",
      items: [
        {
          title: "Siemens Technology Partnership",
          organization: "Siemens AG",
          year: "2024",
          category: "Technology",
          description: "Strategic partnership for smart grid solutions and advanced electrical automation technologies.",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop"
        },
        {
          title: "ABB Distribution Agreement",
          organization: "ABB Group",
          year: "2023",
          category: "Distribution",
          description: "Exclusive distribution partnership for ABB's premium electrical components across India.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop"
        },
        {
          title: "Schneider Electric Innovation Lab",
          organization: "Schneider Electric",
          year: "2023",
          category: "Innovation",
          description: "Joint innovation lab focusing on smart home technology and energy management solutions.",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
        },
        {
          title: "IIT Bombay Research Collaboration",
          organization: "IIT Bombay",
          year: "2022",
          category: "Academic",
          description: "Research partnership for developing next-generation electrical technologies and IoT solutions.",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop"
        }
      ]
    },
    media: {
      title: "Media Recognition & Publications",
      description: "Featured in leading business and technology publications for our industry leadership and innovative solutions.",
      items: [
        {
          title: "Forbes India - Top 50 Electrical Companies",
          organization: "Forbes India",
          year: "2024",
          category: "Business",
          description: "Featured in Forbes India's annual list of top electrical component companies in India.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop"
        },
        {
          title: "Economic Times - Innovation Leaders",
          organization: "Economic Times",
          year: "2023",
          category: "Innovation",
          description: "Coverage of our innovative smart home integration platform and IoT solutions.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
        },
        {
          title: "Business Today - Digital Transformation",
          organization: "Business Today",
          year: "2023",
          category: "Technology",
          description: "Featured for our digital transformation initiatives and e-commerce platform success.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
        },
        {
          title: "CNBC TV18 - Sustainability Champions",
          organization: "CNBC TV18",
          year: "2022",
          category: "Sustainability",
          description: "Interview and coverage of our sustainability initiatives and green manufacturing practices.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop"
        }
      ]
    }
  };

  const recognitionStats = [
    { value: "150+", label: "Distributors" },
    { value: "100+", label: "Certifications" },
    { value: "50+", label: "Partnerships" },
    { value: "200+", label: "Media Mentions" }
  ];

  return (
    <section className="w-full dark relative min-h-screen overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Recognition & Awards
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Our commitment to excellence has been recognized through prestigious awards, certifications, 
            and partnerships that validate our position as India's leading electrical component company.
          </p>
        </div>

        {/* Recognition Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {recognitionCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-full font-semibold brand-transition ${
                activeCategory === category.id
                  ? 'bg-brand-red text-white shadow-lg'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <div className="text-left">
                <div className="font-semibold">{category.name}</div>
                <div className="text-xs opacity-80">{category.count} Items</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Category Content */}
        <div className="glass-ios rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              {recognitionData[activeCategory].title}
            </h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {recognitionData[activeCategory].description}
            </p>
          </div>

          {/* Recognition Items Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {recognitionData[activeCategory].items.map((item, index) => (
              <div key={index} className="glass-ios rounded-2xl p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-16 rounded-lg overflow-hidden shadow-2xl flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-white text-lg leading-tight">{item.title}</h4>
                      <span className="px-2 py-1 bg-brand-red/20 text-brand-red text-xs rounded-full whitespace-nowrap ml-2 border border-brand-red/30">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-white/60 mb-2">
                      <Icon name="Building" size={14} />
                      <span>{item.organization}</span>
                      <span>•</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-white/80 leading-relaxed">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between pt-2 border-t border-white/20">
                  <div className="flex items-center space-x-2">
                    <Icon name="Award" size={16} color="var(--color-brand-amber)" />
                    <span className="text-sm text-white/60">{item.category}</span>
                  </div>
                  <button className="glass-ios rounded-full p-2 hover:scale-105 transition-transform">
                    <Icon name="ExternalLink" size={16} color="white" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recognition Stats */}
        <div className="mt-16 glass-ios rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8">Recognition Highlights</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {recognitionStats.map((stat, index) => (
                <div key={index} className="glass-ios rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Leadership Statement */}
        <div className="mt-16 glass-hero rounded-3xl p-8 md:p-12 shadow-brand text-center bg-white/5 backdrop-blur-sm border border-white/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{backgroundColor: '#ff0c0e'}}>
              <Icon name="Star" size={32} color="white" />
            </div>
            <h3 className="text-3xl font-bold text-white">Industry Leadership</h3>
            <p className="text-lg text-white/80 leading-relaxed">
              These recognitions reflect our unwavering commitment to excellence, innovation, and customer success. 
              As we continue to lead the electrical component industry in India, we remain dedicated to setting 
              new standards for quality, sustainability, and technological advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-primary px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 brand-transition">
                <Icon name="Download" size={20} />
                <span>Download Certificates</span>
              </button>
              <button className="cta-secondary px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 brand-transition">
                <Icon name="FileText" size={20} />
                <span>View Press Kit</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecognitionSection;