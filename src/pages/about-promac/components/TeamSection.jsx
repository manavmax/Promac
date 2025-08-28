import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [activeTeam, setActiveTeam] = useState('engineering');

  const teams = {
    engineering: {
      title: "Engineering Excellence",
      description: "Our electrical engineers and technical specialists ensure product quality and innovation",
      members: [
        {
          name: "Dr. Vikram Singh",
          position: "Lead Electrical Engineer",
          experience: "15+ years",
          specialization: "Power Systems Design",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
          achievements: ["10+ Patents", "IIT Delhi Alumni", "IEEE Senior Member"],
          quote: "Innovation in electrical engineering comes from understanding both the technical challenges and real-world applications."
        },
        {
          name: "Anita Sharma",
          position: "Senior Product Engineer",
          experience: "12+ years",
          specialization: "Component Testing & Validation",
          image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
          achievements: ["Quality Excellence Award", "BIS Certification Expert", "Published Researcher"],
          quote: "Every component we validate today powers someone\'s tomorrow. Quality is our responsibility to the future."
        },
        {
          name: "Rahul Patel",
          position: "IoT Systems Engineer",
          experience: "8+ years",
          specialization: "Smart Home Integration",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
          achievements: ["IoT Innovation Award", "Smart City Projects", "Tech Speaker"],
          quote: "The future of electrical systems lies in intelligent connectivity and seamless user experiences."
        }
      ]
    },
    support: {
      title: "Customer Success Champions",
      description: "Dedicated professionals ensuring exceptional customer experience and technical support",
      members: [
        {
          name: "Priya Reddy",
          position: "Customer Success Manager",
          experience: "10+ years",
          specialization: "Technical Support & Training",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
          achievements: ["Customer Excellence Award", "Technical Training Certified", "Multi-lingual Support"],
          quote: "Every customer interaction is an opportunity to build trust and deliver value beyond expectations."
        },
        {
          name: "Amit Kumar",
          position: "Field Service Specialist",
          experience: "14+ years",
          specialization: "On-site Technical Support",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
          achievements: ["Field Excellence Award", "Safety Certified", "Customer Satisfaction 98%"],
          quote: "Being there when customers need us most - that\'s what defines exceptional service in our industry."
        },
        {
          name: "Sneha Gupta",
          position: "Technical Documentation Lead",
          experience: "9+ years",
          specialization: "Product Documentation & Training Materials",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=300&fit=crop",
          achievements: ["Documentation Excellence", "Training Program Developer", "User Experience Focus"],
          quote: "Clear documentation empowers customers to succeed. We make complex technical information accessible."
        }
      ]
    },
    field: {
      title: "Field Operations Team",
      description: "Experienced technicians and field specialists ensuring seamless product delivery and support",
      members: [
        {
          name: "Rajesh Yadav",
          position: "Senior Field Technician",
          experience: "18+ years",
          specialization: "Installation & Maintenance",
          image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop",
          achievements: ["Master Electrician License", "Safety Excellence Award", "Mentor to 50+ Technicians"],
          quote: "Hands-on experience teaches you what textbooks cannot. Every installation is a learning opportunity."
        },
        {
          name: "Deepak Sharma",
          position: "Quality Assurance Technician",
          experience: "11+ years",
          specialization: "Field Quality Control",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop",
          achievements: ["Quality Control Certified", "Zero Defect Record", "Process Improvement Champion"],
          quote: "Quality isn\'t just about meeting standards - it\'s about exceeding expectations consistently."
        },
        {
          name: "Kavita Singh",
          position: "Logistics Coordinator",
          experience: "7+ years",
          specialization: "Supply Chain & Distribution",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
          achievements: ["Logistics Excellence Award", "On-time Delivery 99.5%", "Process Optimization Expert"],
          quote: "Efficient logistics means customers get what they need, when they need it. Timing is everything."
        }
      ]
    }
  };

  const companyValues = [
    {
      value: "Technical Precision",
      description: "Unwavering commitment to technical accuracy and engineering excellence in every product and service.",
      icon: "Target",
      color: "brand-navy"
    },
    {
      value: "Customer Success",
      description: "Dedicated to ensuring every customer achieves their goals through our products and support.",
      icon: "Heart",
      color: "brand-amber"
    },
    {
      value: "Innovation Leadership",
      description: "Continuously pushing boundaries to bring cutting-edge electrical solutions to market.",
      icon: "Lightbulb",
      color: "brand-green"
    },
    {
      value: "Quality Excellence",
      description: "Maintaining the highest standards in product quality, service delivery, and customer experience.",
      icon: "Award",
      color: "brand-orange"
    }
  ];

  const teamStats = [
    { label: "Total Team Members", value: "500+", icon: "Users" },
    { label: "Engineering Experts", value: "100+", icon: "Wrench" },
    { label: "Customer Support", value: "50+", icon: "Headphones" },
    { label: "Field Technicians", value: "200+", icon: "HardHat" }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Our People, Our Strength
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Meet the dedicated professionals who embody Promac's commitment to excellence, 
            innovation, and customer success across every aspect of our business.
          </p>
        </div>

        {/* Team Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {teamStats.map((stat, index) => (
            <div key={index} className="neomorphic-card rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-brand-amber/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={stat.icon} size={24} color="var(--color-brand-amber)" />
              </div>
              <div className="text-2xl font-bold text-brand-navy mb-1">{stat.value}</div>
              <div className="text-sm text-text-secondary">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(teams).map(([key, team]) => (
            <button
              key={key}
              onClick={() => setActiveTeam(key)}
              className={`px-6 py-4 rounded-xl font-semibold brand-transition ${
                activeTeam === key
                  ? 'bg-brand-navy text-white shadow-primary'
                  : 'bg-white text-brand-navy border border-brand-navy/20 hover:bg-brand-navy hover:text-white'
              }`}
            >
              <div className="font-semibold">{team.title}</div>
              <div className="text-xs opacity-80">{team.members.length} Members</div>
            </button>
          ))}
        </div>

        {/* Active Team Section */}
        <div className="glass-hero rounded-3xl p-8 md:p-12 shadow-brand mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-brand-navy mb-4">
              {teams[activeTeam].title}
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              {teams[activeTeam].description}
            </p>
          </div>

          {/* Team Members */}
          <div className="grid lg:grid-cols-3 gap-8">
            {teams[activeTeam].members.map((member, index) => (
              <div key={index} className="neomorphic-card rounded-2xl p-6 text-center space-y-4">
                <div className="relative">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-brand">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-brand-amber rounded-full flex items-center justify-center">
                    <Icon name="Star" size={16} color="white" />
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-brand-navy text-lg mb-1">{member.name}</h4>
                  <p className="text-brand-amber font-semibold mb-2">{member.position}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  <p className="text-sm text-text-secondary mb-4">{member.specialization}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap justify-center gap-1">
                    {member.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-brand-navy/10 text-brand-navy px-2 py-1 rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="Quote" size={16} color="var(--color-brand-amber)" className="mt-1 flex-shrink-0" />
                    <p className="text-sm text-text-secondary italic leading-relaxed">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Values */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-brand-navy mb-4">Our Core Values</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              The principles that guide our team and drive our commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="neomorphic-card rounded-2xl p-6 text-center space-y-4 group hover:transform hover:scale-105 brand-transition">
                <div className={`w-16 h-16 bg-${value.color}/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 brand-transition`}>
                  <Icon name={value.icon} size={24} color={`var(--color-${value.color})`} />
                </div>
                <h4 className="font-bold text-brand-navy text-lg">{value.value}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Career CTA */}
        <div className="mt-16 glass-hero rounded-3xl p-8 md:p-12 shadow-brand text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold text-brand-navy">Join Our Team</h3>
            <p className="text-lg text-text-secondary">
              Be part of India's leading electrical component company and help shape the future of electrical technology. We're always looking for passionate professionals who share our commitment to excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cta-primary px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 brand-transition">
                <Icon name="Users" size={20} />
                <span>View Open Positions</span>
              </button>
              <button className="cta-secondary px-8 py-4 rounded-full font-semibold flex items-center justify-center space-x-2 brand-transition">
                <Icon name="FileText" size={20} />
                <span>Submit Resume</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;