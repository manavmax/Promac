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
      videoThumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop"
    },
    {
      id: 2,
      name: "Priya Mehta",
      position: "Chief Technology Officer",
      experience: "20+ years",
      education: "M.Tech Electronics, IIT Bombay",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      bio: `Priya leads Promac's technology initiatives, including our award-winning e-commerce platform and IoT integration projects. Her expertise in electronics and software development has positioned Promac at the forefront of electrical industry digitalization.`,
      achievements: [
        "Launched India\'s first electrical e-commerce platform",
        "Led IoT integration for smart home products",
        "Established R&D innovation lab",
        "Patent holder for 5 electrical innovations"
      ],
      expertise: ["IoT Development", "E-commerce Platforms", "Smart Home Technology", "Product Innovation"],
      videoThumbnail: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop"
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
      videoThumbnail: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop"
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
      videoThumbnail: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Leadership Excellence
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
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
              <div className={`neomorphic-card rounded-2xl p-6 text-center ${
                activeLeader === index ? 'ring-2 ring-brand-amber' : ''
              }`}>
                <div className="relative mb-4">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-brand">
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
                <h3 className="font-bold text-brand-navy mb-1">{leader.name}</h3>
                <p className="text-sm text-brand-amber font-semibold mb-2">{leader.position}</p>
                <p className="text-xs text-text-secondary">{leader.experience}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Active Leader Details */}
        <div className="glass-hero rounded-3xl p-8 md:p-12 shadow-brand">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Leader Info */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-20 h-20 rounded-full overflow-hidden shadow-brand flex-shrink-0">
                  <Image
                    src={leaders[activeLeader].image}
                    alt={leaders[activeLeader].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-1">
                    {leaders[activeLeader].name}
                  </h3>
                  <p className="text-brand-amber font-semibold mb-2">
                    {leaders[activeLeader].position}
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-text-secondary">
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

              <p className="text-text-secondary leading-relaxed">
                {leaders[activeLeader].bio}
              </p>

              <div className="space-y-4">
                <h4 className="font-semibold text-brand-navy">Key Achievements:</h4>
                <div className="grid gap-2">
                  {leaders[activeLeader].achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="Award" size={16} color="var(--color-brand-amber)" className="mt-1 flex-shrink-0" />
                      <span className="text-sm text-text-secondary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-brand-navy">Areas of Expertise:</h4>
                <div className="flex flex-wrap gap-2">
                  {leaders[activeLeader].expertise.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-brand-amber/10 text-brand-navy text-sm rounded-full border border-brand-amber/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Video Section */}
            <div className="space-y-6">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-brand group cursor-pointer">
                <Image
                  src={leaders[activeLeader].videoThumbnail}
                  alt={`${leaders[activeLeader].name} introduction video`}
                  className="w-full h-full object-cover group-hover:scale-105 brand-transition"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 bg-brand-amber rounded-full flex items-center justify-center shadow-brand group-hover:scale-110 brand-transition">
                    <Icon name="Play" size={24} color="white" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h4 className="text-white font-semibold mb-1">Leadership Message</h4>
                  <p className="text-white/80 text-sm">
                    Hear from {leaders[activeLeader].name} about Promac's vision and future
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="neomorphic-card rounded-xl p-4 text-center">
                  <Icon name="Users" size={24} color="var(--color-brand-amber)" className="mx-auto mb-2" />
                  <div className="text-sm font-semibold text-brand-navy">Team Size</div>
                  <div className="text-xs text-text-secondary">500+ Members</div>
                </div>
                <div className="neomorphic-card rounded-xl p-4 text-center">
                  <Icon name="Target" size={24} color="var(--color-brand-amber)" className="mx-auto mb-2" />
                  <div className="text-sm font-semibold text-brand-navy">Projects Led</div>
                  <div className="text-xs text-text-secondary">100+ Initiatives</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;