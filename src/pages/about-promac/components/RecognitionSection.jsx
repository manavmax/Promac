import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const RecognitionSection = () => {
  const [activeCategory, setActiveCategory] = useState('awards');

  const recognitionData = {
    awards: {
      title: "Industry Awards & Recognition",
      description: "Prestigious awards recognizing our excellence in electrical component distribution and innovation",
      items: [
        {
          title: "Electrical Distributor of the Year 2024",
          organization: "Indian Electrical & Electronics Manufacturers Association",
          year: "2024",
          description: "Recognized for outstanding contribution to electrical component distribution and customer service excellence across India.",
          image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
          category: "Industry Excellence"
        },
        {
          title: "Innovation Excellence Award",
          organization: "Federation of Indian Chambers of Commerce",
          year: "2023",
          description: "Honored for breakthrough innovations in smart electrical components and IoT integration solutions.",
          image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
          category: "Innovation"
        },
        {
          title: "Quality Leadership Award",
          organization: "Bureau of Indian Standards",
          year: "2023",
          description: "Acknowledged for maintaining highest quality standards and contributing to industry quality improvement initiatives.",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
          category: "Quality"
        },
        {
          title: "Sustainability Champion Award",
          organization: "Confederation of Indian Industry",
          year: "2022",
          description: "Recognized for outstanding commitment to environmental sustainability and green manufacturing practices.",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
          category: "Sustainability"
        }
      ]
    },
    certifications: {
      title: "Professional Certifications",
      description: "Comprehensive certifications demonstrating our commitment to quality, safety, and international standards",
      items: [
        {
          title: "ISO 9001:2015 Quality Management",
          organization: "International Organization for Standardization",
          year: "Valid until 2026",
          description: "Certified quality management system ensuring consistent product quality and customer satisfaction.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
          category: "Quality Management"
        },
        {
          title: "BIS Certification - IS 694",
          organization: "Bureau of Indian Standards",
          year: "Valid until 2025",
          description: "Indian Standard certification for electrical accessories ensuring safety and performance compliance.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
          category: "Safety Standards"
        },
        {
          title: "CE Marking Compliance",
          organization: "European Conformity",
          year: "Ongoing",
          description: "European conformity marking for products meeting EU safety, health, and environmental requirements.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          category: "International Standards"
        },
        {
          title: "ISO 14001:2015 Environmental Management",
          organization: "International Organization for Standardization",
          year: "Valid until 2025",
          description: "Environmental management system certification demonstrating commitment to environmental responsibility.",
          image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400&h=300&fit=crop",
          category: "Environmental"
        }
      ]
    },
    media: {
      title: "Media Coverage & Press",
      description: "Featured coverage highlighting our industry leadership and innovative contributions",
      items: [
        {
          title: "Smart Electrical Solutions Revolutionizing Indian Homes",
          organization: "The Economic Times",
          year: "March 2024",
          description: "Feature article on Promac's IoT-enabled electrical components and their impact on smart home adoption in India.",
          image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop",
          category: "Technology Feature"
        },
        {
          title: "Sustainability in Electrical Manufacturing",
          organization: "Business Standard",
          year: "January 2024",
          description: "In-depth coverage of Promac\'s green manufacturing initiatives and environmental impact reduction strategies.",
          image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
          category: "Sustainability"
        },
        {
          title: "Digital Transformation in Electrical Distribution",
          organization: "Forbes India",
          year: "November 2023",
          description: "Analysis of Promac\'s digital platform and its role in modernizing electrical component distribution in India.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          category: "Digital Innovation"
        },
        {
          title: "Quality Excellence in Indian Manufacturing",
          organization: "Manufacturing Today",
          year: "September 2023",
          description: "Case study on Promac\'s quality assurance processes and their contribution to \'Make in India\' initiative.",
          image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
          category: "Manufacturing"
        }
      ]
    },
    partnerships: {
      title: "Strategic Partnerships",
      description: "Collaborations with leading organizations driving innovation and industry advancement",
      items: [
        {
          title: "Technology Partnership with Microsoft India",
          organization: "Microsoft Corporation",
          year: "2023-2026",
          description: "Strategic collaboration for AI-powered quality control systems and cloud-based inventory management solutions.",
          image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
          category: "Technology"
        },
        {
          title: "Research Collaboration with IIT Delhi",
          organization: "Indian Institute of Technology Delhi",
          year: "2022-2027",
          description: "Joint research program focusing on smart grid technology and renewable energy integration solutions.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
          category: "Research"
        },
        {
          title: "Manufacturing Partnership with Siemens",
          organization: "Siemens AG",
          year: "2021-2028",
          description: "Collaboration for advanced automation solutions and Industry 4.0 implementation in manufacturing processes.",
          image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
          category: "Manufacturing"
        },
        {
          title: "Space Technology Collaboration with ISRO",
          organization: "Indian Space Research Organisation",
          year: "2023-2025",
          description: "Development of space-grade electrical components for satellite and space mission applications.",
          image: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=400&h=300&fit=crop",
          category: "Aerospace"
        }
      ]
    }
  };

  const categories = [
    { key: 'awards', name: 'Awards', icon: 'Award', count: recognitionData.awards.items.length },
    { key: 'certifications', name: 'Certifications', icon: 'Shield', count: recognitionData.certifications.items.length },
    { key: 'media', name: 'Media Coverage', icon: 'Newspaper', count: recognitionData.media.items.length },
    { key: 'partnerships', name: 'Partnerships', icon: 'Handshake', count: recognitionData.partnerships.items.length }
  ];

  const recognitionStats = [
    { label: "Industry Awards", value: "15+", icon: "Trophy" },
    { label: "Certifications", value: "20+", icon: "Certificate" },
    { label: "Media Features", value: "50+", icon: "Newspaper" },
    { label: "Strategic Partners", value: "25+", icon: "Users" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Recognition & Achievements
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our commitment to excellence has earned recognition from industry leaders, 
            regulatory bodies, and media organizations across India and internationally.
          </p>
        </div>

        {/* Recognition Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {recognitionStats.map((stat, index) => (
            <div key={index} className="bg-promac-red-50 border border-promac-red-100 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-promac-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={stat.icon} size={24} className="text-promac-red-500" />
              </div>
              <div className="text-2xl font-bold text-promac-red-700 mb-1">{stat.value}</div>
              <div className="text-sm text-promac-red-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`flex items-center space-x-3 px-6 py-4 rounded-xl font-semibold brand-transition ${
                activeCategory === category.key
                  ? 'bg-promac-red-600 text-white shadow-primary'
                  : 'bg-promac-red-50 text-promac-red-700 border border-promac-red-100 hover:bg-promac-red-100 hover:text-promac-red-900'
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
        <div className="glass-hero rounded-3xl p-8 md:p-12 shadow-brand">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-navy mb-4">
              {recognitionData[activeCategory].title}
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {recognitionData[activeCategory].description}
            </p>
          </div>

          {/* Recognition Items Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {recognitionData[activeCategory].items.map((item, index) => (
              <div key={index} className="bg-promac-red-50 border border-promac-red-100 rounded-2xl p-6 space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-20 h-16 rounded-lg overflow-hidden shadow-brand flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-bold text-brand-navy text-lg leading-tight">{item.title}</h4>
                      <span className="px-2 py-1 bg-promac-red-100 text-promac-red-700 text-xs rounded-full whitespace-nowrap ml-2">
                        {item.category}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-text-secondary mb-2">
                      <Icon name="Building" size={14} />
                      <span>{item.organization}</span>
                      <span>•</span>
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-2">
                    <Icon name="Calendar" size={14} color="var(--color-brand-amber)" />
                    <span className="text-xs text-brand-amber font-semibold">{item.year}</span>
                  </div>
                  <button className="text-brand-navy hover:text-brand-amber brand-transition rounded-full">
                    <Icon name="ExternalLink" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Leadership Statement */}
        <div className="mt-16 glass-hero rounded-3xl p-8 md:p-12 shadow-brand text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-brand-amber/10 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Star" size={32} color="var(--color-brand-amber)" />
            </div>
            <h3 className="text-3xl font-bold text-brand-navy">Industry Leadership</h3>
            <p className="text-lg text-text-secondary leading-relaxed">
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