import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const LeadershipSection = () => {
  const [activeLeader, setActiveLeader] = useState(0);

  const leaders = [
    {
      id: 1,
      name: "Rajesh Kumar Sharma",
      position: "Founder & CEO",
      experience: "30+ years",
      education: "B.Tech Electrical Engineering, IIT Delhi",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: `Rajesh founded Promac with a vision to democratize access to quality electrical components across India. His deep understanding of electrical systems and market needs has been instrumental in building Promac's reputation for technical excellence and customer service.`,
      achievements: [
        "Founded Promac Electrical in 1998",
        "Electrical Engineer of the Year 2019",
        "Led digital transformation initiative",
        "Established pan-India distribution network"
      ],
      expertise: ["Electrical Systems Design", "Market Strategy", "Team Leadership", "Innovation Management"],
      videoThumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      stats: [
        { value: "25+", label: "Years Experience" },
        { value: "500+", label: "Team Members" }
      ]
    },
    {
      id: 2,
      name: "Priya Mehta",
      position: "Chief Technology Officer",
      experience: "20+ years",
      education: "M.Tech Electronics, IIT Bombay",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: `Priya leads Promac's technology initiatives, including our award-winning e-commerce platform and IoT integration projects. Her expertise in electronics and software development has positioned Promac at the forefront of electrical industry digitalization.`,
      achievements: [
        "Launched India\'s first electrical e-commerce platform",
        "Led IoT integration for smart home products",
        "Established R&D innovation lab",
        "Patent holder for 5 electrical innovations"
      ],
      expertise: ["IoT Development", "E-commerce Platforms", "Smart Home Technology", "Product Innovation"],
      videoThumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      stats: [
        { value: "20+", label: "Years Experience" },
        { value: "5", label: "Patents" }
      ]
    },
    {
      id: 3,
      name: "Amit Patel",
      position: "Chief Operations Officer",
      experience: "25+ years",
      education: "MBA Operations, XLRI Jamshedpur",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: `Amit oversees Promac's nationwide operations, ensuring seamless supply chain management and quality control across all distribution centers. His operational excellence has enabled Promac to maintain 99.5% order fulfillment accuracy.`,
      achievements: [
        "Established 50+ distribution centers",
        "Achieved 99.5% order accuracy rate",
        "Implemented ISO 9001 quality systems",
        "Led sustainability initiatives"
      ],
      expertise: ["Supply Chain Management", "Quality Control", "Process Optimization", "Sustainability"],
      videoThumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      stats: [
        { value: "25+", label: "Years Experience" },
        { value: "50+", label: "Distribution Centers" }
      ]
    },
    {
      id: 4,
      name: "Dr. Sunita Reddy",
      position: "Head of Quality Assurance",
      experience: "18+ years",
      education: "PhD Electrical Engineering, IISc Bangalore",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: `Dr. Reddy ensures that every Promac product meets the highest quality standards through rigorous testing and certification processes. Her expertise in electrical safety and standards compliance has earned Promac multiple quality certifications.`,
      achievements: [
        "Established BIS certification processes",
        "Led quality control standardization",
        "Published 15+ research papers",
        "Quality Excellence Award recipient"
      ],
      expertise: ["Quality Standards", "Product Testing", "Compliance Management", "Research & Development"],
      videoThumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      stats: [
        { value: "18+", label: "Years Experience" },
        { value: "15+", label: "Research Papers" }
      ]
    }
  ];

  return (
    <section className="w-full dark relative min-h-screen overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Leadership Excellence
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Meet the visionary leaders who drive Promac's mission of delivering electrical excellence 
            across India through innovation, expertise, and unwavering commitment to quality.
          </p>
        </div>

        {/* Leadership Grid */}
        <div className="grid lg:grid-cols-4 gap-6 mb-12">
          {leaders.map((leader, index) => (
            <div
              key={leader.id}
              onClick={() => setActiveLeader(index)}
              className={`cursor-pointer brand-transition ${
                activeLeader === index
                  ? 'transform scale-105'
                  : 'hover:transform hover:scale-102'
              }`}
            >
              <div className={`glass-ios rounded-2xl p-6 text-center ${
                activeLeader === index ? 'ring-2 ring-brand-amber' : ''
              }`}>
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-2xl">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {activeLeader === index && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-amber rounded-full flex items-center justify-center">
                      <Icon name="Play" size={16} color="white" />
                    </div>
                  )}
                </div>
                <h3 className="font-bold text-white mb-1">{leader.name}</h3>
                <p className="text-sm text-brand-amber font-semibold mb-2">{leader.position}</p>
                <p className="text-xs text-white/60">{leader.experience}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Active Leader Details */}
        <div className="glass-ios rounded-3xl p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Leader Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-2xl flex-shrink-0">
                  <Image
                    src={leaders[activeLeader].image}
                    alt={leaders[activeLeader].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {leaders[activeLeader].name}
                  </h3>
                  <p className="text-brand-amber font-semibold mb-2">
                    {leaders[activeLeader].position}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-white/60">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={16} />
                      <span>{leaders[activeLeader].experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="GraduationCap" size={16} />
                      <span>IIT Graduate</span>
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-white/80 leading-relaxed">
                {leaders[activeLeader].bio}
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-white">Key Achievements:</h4>
                <div className="grid gap-3">
                  {leaders[activeLeader].achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="CheckCircle" size={16} color="var(--color-brand-green)" className="mt-1 flex-shrink-0" />
                      <span className="text-white/80 text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="flex items-center space-x-4 pt-4">
                <button className="glass-ios rounded-full p-3 hover:scale-105 transition-transform">
                  <Icon name="Mail" size={20} color="white" />
                </button>
                <button className="glass-ios rounded-full p-3 hover:scale-105 transition-transform">
                  <Icon name="Linkedin" size={20} color="white" />
                </button>
                <button className="glass-ios rounded-full p-3 hover:scale-105 transition-transform">
                  <Icon name="Twitter" size={20} color="white" />
                </button>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {leaders[activeLeader].stats.map((stat, index) => (
                <div key={index} className="glass-ios rounded-2xl p-6 text-center">
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;