import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const InnovationSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const innovationProjects = [
    {
      title: "Smart Home Integration Platform",
      category: "IoT & Automation",
      description: "Revolutionary platform connecting traditional electrical components with smart home ecosystems, enabling seamless automation and energy management.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      status: "In Development",
      timeline: "Q2 2025 Launch",
      features: [
        "Voice control integration with Alexa & Google",
        "Mobile app for remote monitoring",
        "Energy consumption analytics",
        "Predictive maintenance alerts"
      ],
      technologies: ["IoT Sensors", "Machine Learning", "Cloud Computing", "Mobile Apps"],
      investment: "₹15 Crores"
    },
    {
      title: "AI-Powered Quality Control",
      category: "Artificial Intelligence",
      description: "Advanced AI system using computer vision and machine learning to detect quality issues in electrical components with 99.9% accuracy.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      status: "Beta Testing",
      timeline: "Q1 2025 Deployment",
      features: [
        "Real-time defect detection",
        "Automated quality reporting",
        "Predictive quality analytics",
        "Integration with production line"
      ],
      technologies: ["Computer Vision", "Deep Learning", "Edge Computing", "Robotics"],
      investment: "₹12 Crores"
    },
    {
      title: "Sustainable Materials Research",
      category: "Green Technology",
      description: "Developing eco-friendly materials for electrical components using recycled plastics and biodegradable alternatives without compromising performance.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
      status: "Research Phase",
      timeline: "Q4 2025 Prototype",
      features: [
        "100% recyclable component housing",
        "Biodegradable packaging materials",
        "Reduced carbon footprint manufacturing",
        "Performance equivalent to traditional materials"
      ],
      technologies: ["Bio-materials", "Recycling Tech", "Green Chemistry", "Sustainability"],
      investment: "₹8 Crores"
    },
    {
      title: "Augmented Reality Installation Guide",
      category: "Extended Reality",
      description: "AR-powered mobile application providing step-by-step visual guidance for electrical component installation and troubleshooting.",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?w=600&h=400&fit=crop",
      status: "Pilot Testing",
      timeline: "Q3 2025 Launch",
      features: [
        "3D component visualization",
        "Step-by-step AR instructions",
        "Real-time troubleshooting support",
        "Multi-language support"
      ],
      technologies: ["Augmented Reality", "3D Modeling", "Mobile Development", "Computer Vision"],
      investment: "₹10 Crores"
    }
  ];

  const researchAreas = [
    {
      area: "Smart Grid Technology",
      description: "Developing components for next-generation smart electrical grids",
      icon: "Network",
      projects: 8,
      investment: "₹25 Crores"
    },
    {
      area: "Energy Storage Solutions",
      description: "Advanced battery and energy storage systems for residential and commercial use",
      icon: "Battery",
      projects: 5,
      investment: "₹18 Crores"
    },
    {
      area: "Wireless Power Transfer",
      description: "Cutting-edge wireless charging and power transfer technologies",
      icon: "Wifi",
      projects: 3,
      investment: "₹12 Crores"
    },
    {
      area: "Quantum Computing Applications",
      description: "Exploring quantum computing applications in electrical system optimization",
      icon: "Cpu",
      projects: 2,
      investment: "₹20 Crores"
    }
  ];

  const partnerships = [
    {
      partner: "IIT Delhi",
      type: "Academic Partnership",
      focus: "Smart Grid Research",
      duration: "5 Years",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop"
    },
    {
      partner: "ISRO",
      type: "Technology Collaboration",
      focus: "Space-grade Components",
      duration: "3 Years",
      logo: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=200&h=200&fit=crop"
    },
    {
      partner: "Microsoft India",
      type: "Technology Partnership",
      focus: "AI & Cloud Solutions",
      duration: "Ongoing",
      logo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&h=200&fit=crop"
    },
    {
      partner: "Siemens",
      type: "Industrial Partnership",
      focus: "Automation Technology",
      duration: "7 Years",
      logo: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=200&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-brand-navy/5 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Innovation Laboratory
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our state-of-the-art R&D facility drives the future of electrical technology through 
            cutting-edge research, strategic partnerships, and breakthrough innovations.
          </p>
        </div>

        {/* Innovation Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="neomorphic-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-brand-amber/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Lightbulb" size={24} color="var(--color-brand-amber)" />
            </div>
            <div className="text-2xl font-bold text-brand-navy mb-1">50+</div>
            <div className="text-sm text-text-secondary">Active Projects</div>
          </div>
          <div className="neomorphic-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-brand-amber/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Users" size={24} color="var(--color-brand-amber)" />
            </div>
            <div className="text-2xl font-bold text-brand-navy mb-1">100+</div>
            <div className="text-sm text-text-secondary">R&D Engineers</div>
          </div>
          <div className="neomorphic-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-brand-amber/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="Award" size={24} color="var(--color-brand-amber)" />
            </div>
            <div className="text-2xl font-bold text-brand-navy mb-1">25+</div>
            <div className="text-sm text-text-secondary">Patents Filed</div>
          </div>
          <div className="neomorphic-card rounded-xl p-6 text-center">
            <div className="w-12 h-12 bg-brand-amber/10 rounded-full flex items-center justify-center mx-auto mb-3">
              <Icon name="TrendingUp" size={24} color="var(--color-brand-amber)" />
            </div>
            <div className="text-2xl font-bold text-brand-navy mb-1">₹100Cr+</div>
            <div className="text-sm text-text-secondary">R&D Investment</div>
          </div>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-brand-navy mb-4">Featured Innovation Projects</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Breakthrough projects that are shaping the future of electrical technology and smart infrastructure.
            </p>
          </div>

          {/* Project Navigation */}
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {innovationProjects.map((project, index) => (
              <button
                key={index}
                onClick={() => setActiveProject(index)}
                className={`p-4 rounded-xl text-left brand-transition ${
                  activeProject === index
                    ? 'bg-brand-amber text-white shadow-brand transform scale-105'
                    : 'bg-white text-brand-navy border border-brand-amber/20 hover:bg-brand-amber/10'
                }`}
              >
                <div className="font-semibold mb-1">{project.title}</div>
                <div className={`text-xs ${
                  activeProject === index ? 'text-white/80' : 'text-brand-amber'
                }`}>
                  {project.category}
                </div>
                <div className={`text-xs mt-2 px-2 py-1 rounded ${
                  activeProject === index 
                    ? 'bg-white/20 text-white' :'bg-brand-amber/10 text-brand-amber'
                }`}>
                  {project.status}
                </div>
              </button>
            ))}
          </div>

          {/* Active Project Details */}
          <div className="glass-hero rounded-3xl p-8 md:p-12 shadow-brand">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-brand-amber/10 text-brand-amber text-sm rounded-full">
                      {innovationProjects[activeProject].category}
                    </span>
                    <span className="px-3 py-1 bg-brand-green/10 text-brand-green text-sm rounded-full">
                      {innovationProjects[activeProject].status}
                    </span>
                  </div>
                  <h3 className="text-3xl font-bold text-brand-navy mb-4">
                    {innovationProjects[activeProject].title}
                  </h3>
                  <p className="text-lg text-text-secondary leading-relaxed">
                    {innovationProjects[activeProject].description}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Timeline</div>
                    <div className="font-semibold text-brand-navy">
                      {innovationProjects[activeProject].timeline}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-text-secondary mb-1">Investment</div>
                    <div className="font-semibold text-brand-navy">
                      {innovationProjects[activeProject].investment}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-brand-navy">Key Features:</h4>
                  <div className="grid gap-2">
                    {innovationProjects[activeProject].features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Icon name="CheckCircle" size={16} color="var(--color-brand-green)" />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold text-brand-navy">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {innovationProjects[activeProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-brand-navy/10 text-brand-navy text-sm rounded-full border border-brand-navy/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Project Image */}
              <div className="space-y-6">
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-brand">
                  <Image
                    src={innovationProjects[activeProject].image}
                    alt={innovationProjects[activeProject].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-white font-semibold mb-1">Innovation Showcase</div>
                    <div className="text-white/80 text-sm">
                      {innovationProjects[activeProject].category} • {innovationProjects[activeProject].status}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="neomorphic-card rounded-xl p-4 text-center">
                    <Icon name="Target" size={20} color="var(--color-brand-amber)" className="mx-auto mb-2" />
                    <div className="text-sm font-semibold text-brand-navy">Completion</div>
                    <div className="text-xs text-text-secondary">75% Complete</div>
                  </div>
                  <div className="neomorphic-card rounded-xl p-4 text-center">
                    <Icon name="Users" size={20} color="var(--color-brand-amber)" className="mx-auto mb-2" />
                    <div className="text-sm font-semibold text-brand-navy">Team Size</div>
                    <div className="text-xs text-text-secondary">15 Engineers</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Research Areas */}
        <div className="space-y-8 mb-16">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-brand-navy mb-4">Research Focus Areas</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Strategic research initiatives driving innovation across multiple domains of electrical technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((area, index) => (
              <div key={index} className="neomorphic-card rounded-2xl p-6 text-center space-y-4">
                <div className="w-16 h-16 bg-brand-amber/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name={area.icon} size={24} color="var(--color-brand-amber)" />
                </div>
                <h4 className="font-bold text-brand-navy">{area.area}</h4>
                <p className="text-sm text-text-secondary">{area.description}</p>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Active Projects:</span>
                    <span className="font-semibold text-brand-navy">{area.projects}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-text-secondary">Investment:</span>
                    <span className="font-semibold text-brand-navy">{area.investment}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategic Partnerships */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-brand-navy mb-4">Strategic Partnerships</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Collaborating with leading institutions and technology companies to accelerate innovation and research.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerships.map((partnership, index) => (
              <div key={index} className="neomorphic-card rounded-2xl p-6 text-center space-y-4">
                <div className="w-16 h-16 rounded-full overflow-hidden mx-auto shadow-brand">
                  <Image
                    src={partnership.logo}
                    alt={partnership.partner}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-bold text-brand-navy">{partnership.partner}</h4>
                <div className="space-y-2 text-sm">
                  <div className="px-3 py-1 bg-brand-amber/10 text-brand-amber rounded-full">
                    {partnership.type}
                  </div>
                  <div className="text-text-secondary">{partnership.focus}</div>
                  <div className="font-semibold text-brand-navy">{partnership.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;