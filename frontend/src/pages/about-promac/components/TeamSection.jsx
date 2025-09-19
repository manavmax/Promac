import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TeamSection = () => {
  const [activeTeam, setActiveTeam] = useState(0);

  const teams = [
    {
      name: "Engineering Excellence",
      description: "Our core engineering team drives innovation and maintains the highest standards of product quality and technical expertise.",
      members: [
        {
          name: "Arjun Singh",
          position: "Senior Electrical Engineer",
          experience: "12 years",
          specialization: "Power Systems & Distribution",
          achievements: ["BIS Certification Expert", "Patent Holder", "Technical Lead"],
          quote: "Every component we design carries the responsibility of powering India's future.",
          image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
        },
        {
          name: "Meera Patel",
          position: "Quality Assurance Lead",
          experience: "8 years",
          specialization: "Testing & Certification",
          achievements: ["ISO Auditor", "Quality Champion", "Process Innovator"],
          quote: "Quality isn't just a standard, it's our promise to every customer.",
          image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face"
        },
        {
          name: "Vikram Sharma",
          position: "R&D Engineer",
          experience: "10 years",
          specialization: "Innovation & Development",
          achievements: ["Innovation Award Winner", "Research Lead", "Product Designer"],
          quote: "Innovation is the bridge between today's needs and tomorrow's possibilities.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
        }
      ]
    },
    {
      name: "Customer Success",
      description: "Dedicated team ensuring exceptional customer experience and technical support across all touchpoints.",
      members: [
        {
          name: "Priya Gupta",
          position: "Customer Success Manager",
          experience: "6 years",
          specialization: "Client Relations & Support",
          achievements: ["Customer Excellence Award", "Support Leader", "Training Expert"],
          quote: "Every customer interaction is an opportunity to exceed expectations.",
          image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
        },
        {
          name: "Rahul Verma",
          position: "Technical Support Specialist",
          experience: "7 years",
          specialization: "Technical Solutions",
          achievements: ["Technical Expert", "Problem Solver", "Knowledge Base Creator"],
          quote: "Technical excellence is the foundation of customer trust.",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face"
        },
        {
          name: "Anjali Desai",
          position: "Account Manager",
          experience: "5 years",
          specialization: "Client Partnerships",
          achievements: ["Partnership Builder", "Revenue Growth", "Client Advocate"],
          quote: "Building lasting partnerships through trust and mutual success.",
          image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face"
        }
      ]
    },
    {
      name: "Operations & Logistics",
      description: "Efficient operations team managing supply chain, logistics, and ensuring seamless product delivery nationwide.",
      members: [
        {
          name: "Suresh Kumar",
          position: "Operations Director",
          experience: "15 years",
          specialization: "Supply Chain Management",
          achievements: ["Operations Excellence", "Cost Optimization", "Process Leader"],
          quote: "Efficiency in operations is the backbone of customer satisfaction.",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&h=200&fit=crop&crop=face"
        },
        {
          name: "Lakshmi Reddy",
          position: "Logistics Manager",
          experience: "9 years",
          specialization: "Distribution & Delivery",
          achievements: ["Logistics Expert", "Delivery Optimization", "Network Builder"],
          quote: "Every delivery is a promise kept to our customers.",
          image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face"
        },
        {
          name: "Rajesh Malhotra",
          position: "Warehouse Manager",
          experience: "11 years",
          specialization: "Inventory Management",
          achievements: ["Inventory Expert", "Space Optimization", "Safety Leader"],
          quote: "Perfect inventory management ensures perfect customer service.",
          image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
        }
      ]
    }
  ];

  const companyValues = [
    {
      value: "Excellence",
      description: "Striving for the highest standards in everything we do, from product quality to customer service.",
      icon: "Star",
      color: "brand-amber"
    },
    {
      value: "Innovation",
      description: "Continuously pushing boundaries and embracing new technologies to stay ahead of industry trends.",
      icon: "Lightbulb",
      color: "brand-amber"
    },
    {
      value: "Integrity",
      description: "Building trust through honest, transparent relationships with customers, partners, and team members.",
      icon: "Shield",
      color: "brand-green"
    },
    {
      value: "Collaboration",
      description: "Fostering a culture of teamwork and partnership to achieve shared goals and mutual success.",
      icon: "Handshake",
      color: "brand-red"
    }
  ];

  const cultureValues = [
    {
      title: "Innovation",
      description: "We are constantly pushing boundaries and embracing new technologies to stay ahead of industry trends.",
      icon: "Lightbulb"
    },
    {
      title: "Collaboration",
      description: "We believe in teamwork and partnership to achieve shared goals and mutual success.",
      icon: "Users"
    },
    {
      title: "Excellence",
      description: "We strive for the highest standards in everything we do, from product quality to customer service.",
      icon: "Star"
    }
  ];

  return (
    <section className="w-full dark relative min-h-screen overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Amazing Team
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Meet the passionate professionals who make Promac the leading electrical component company in India. 
            Our diverse team brings together expertise, innovation, and dedication to deliver excellence.
          </p>
        </div>

        {/* Team Navigation */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {teams.map((team, index) => (
            <button
              key={index}
              onClick={() => setActiveTeam(index)}
              className={`flex items-center space-x-4 p-6 rounded-2xl font-semibold brand-transition min-h-[120px] w-full ${
                activeTeam === index
                  ? 'bg-brand-red text-white shadow-lg transform scale-105'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm hover:border-white/30'
              }`}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                <Icon name="Users" size={24} color="white" />
              </div>
              <div className="text-left flex-1">
                <div className="font-bold text-lg mb-2">{team.name}</div>
                <div className="text-sm opacity-80 leading-relaxed">{team.description}</div>
              </div>
            </button>
          ))}
        </div>

        {/* Active Team Members */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">{teams[activeTeam].name}</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              {teams[activeTeam].description}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teams[activeTeam].members.map((member, index) => (
              <div key={index} className="glass-ios rounded-2xl p-6 text-center space-y-4">
                <div className="relative">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-2xl">
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
                  <h4 className="font-bold text-white text-lg mb-1">{member.name}</h4>
                  <p className="text-brand-amber font-semibold mb-2">{member.position}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-white/60 mb-3">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/80 mb-4">{member.specialization}</p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap justify-center gap-1">
                    {member.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="text-xs glass-ios text-white px-2 py-1 rounded-full"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-start space-x-2">
                    <Icon name="Quote" size={16} color="var(--color-brand-amber)" className="mt-1 flex-shrink-0" />
                    <p className="text-sm text-white/80 italic leading-relaxed">
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
            <h3 className="text-3xl font-bold text-white mb-4">Our Core Values</h3>
            <p className="text-white/80 max-w-2xl mx-auto">
              The principles that guide our team and drive our commitment to excellence in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyValues.map((value, index) => (
              <div key={index} className="glass-ios rounded-2xl p-6 text-center space-y-4 group hover:transform hover:scale-105 brand-transition">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 brand-transition" style={{backgroundColor: '#ff0c0e'}}>
                  <Icon name={value.icon} size={24} color="white" />
                </div>
                <h4 className="font-bold text-white text-lg">{value.value}</h4>
                <p className="text-sm text-white/80 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Culture */}
        <div className="mt-16 glass-ios rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-8">Our Team Culture</h3>
            <p className="text-lg text-white/80 mb-12 leading-relaxed">
              At Promac, we believe in fostering a culture of innovation, collaboration, and continuous learning. 
              Our diverse team brings together expertise from various fields to create exceptional solutions.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {cultureValues.map((value, index) => (
                <div key={index} className="glass-ios rounded-2xl p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto" style={{backgroundColor: '#ff0c0e'}}>
                    <Icon name={value.icon} size={32} color="white" />
                  </div>
                  <h4 className="text-xl font-bold text-white">{value.title}</h4>
                  <p className="text-white/80 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Career CTA */}
        <div className="mt-16 glass-ios rounded-3xl p-8 md:p-12 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h3 className="text-3xl font-bold text-white">Join Our Team</h3>
            <p className="text-lg text-white/80">
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