import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const CaseStudies = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCase, setSelectedCase] = useState(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: 'Grid3x3' },
    { id: 'commercial', label: 'Commercial', icon: 'Building2' },
    { id: 'residential', label: 'Residential', icon: 'Home' },
    { id: 'industrial', label: 'Industrial', icon: 'Factory' },
    { id: 'infrastructure', label: 'Infrastructure', icon: 'Zap' }
  ];

  const caseStudies = [
    {
      id: 1,
      title: 'Phoenix Mall Electrical Infrastructure',
      category: 'commercial',
      location: 'Mumbai, Maharashtra',
      duration: '8 months',
      projectValue: '₹2.5 crores',
      savings: '₹35 lakhs',
      contractor: 'ElectroMax Solutions Pvt. Ltd.',
      image: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&h=600&fit=crop',
      description: 'Complete electrical infrastructure for a 5-lakh sq ft shopping mall including power distribution, lighting systems, and emergency backup solutions.',
      challenges: [
        'Complex power distribution across 200+ retail units',
        'Integration with building management systems',
        'Compliance with fire safety regulations',
        'Coordination with multiple contractors'
      ],
      solutions: [
        'Modular switchgear systems for flexible power distribution',
        'Smart lighting controls with occupancy sensors',
        'Redundant power backup systems',
        'Centralized monitoring and control systems'
      ],
      products: [
        { name: 'Modular Switchgear Panels', quantity: '45 units', value: '₹85 lakhs' },
        { name: 'LED Lighting Systems', quantity: '2,500 fixtures', value: '₹45 lakhs' },
        { name: 'Cable Management Systems', quantity: '15 km', value: '₹25 lakhs' },
        { name: 'Emergency Lighting', quantity: '800 units', value: '₹18 lakhs' }
      ],
      results: [
        '30% reduction in energy consumption',
        '99.9% system uptime achieved',
        'Zero safety incidents during installation',
        'Project completed 2 weeks ahead of schedule'
      ],
      testimonial: {
        text: "Promac\'s comprehensive solution and technical expertise helped us deliver a world-class electrical infrastructure. Their products\' reliability and the team\'s support were exceptional throughout the project.",
        author: 'Rajesh Kumar',
        position: 'Project Manager, ElectroMax Solutions'
      }
    },
    {
      id: 2,
      title: 'Luxury Residential Complex - Skyline Heights',
      category: 'residential',
      location: 'Pune, Maharashtra',
      duration: '12 months',
      projectValue: '₹1.8 crores',
      savings: '₹28 lakhs',
      contractor: 'Premium Electrical Services',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      description: 'Electrical installation for a premium residential complex with 150 apartments, including smart home automation and energy-efficient systems.',
      challenges: [
        'Individual metering for 150 apartments',
        'Smart home integration requirements',
        'High-end aesthetic requirements',
        'Coordination with interior designers'
      ],
      solutions: [
        'Digital energy meters with remote monitoring',
        'Home automation-ready wiring infrastructure',
        'Premium modular switches and sockets',
        'Concealed wiring with aesthetic cable management'
      ],
      products: [
        { name: 'Digital Energy Meters', quantity: '150 units', value: '₹22 lakhs' },
        { name: 'Modular Switches & Sockets', quantity: '3,000 points', value: '₹35 lakhs' },
        { name: 'Distribution Boards', quantity: '180 units', value: '₹28 lakhs' },
        { name: 'Copper Wiring', quantity: '25 km', value: '₹42 lakhs' }
      ],
      results: [
        'Smart home ready infrastructure in all units',
        '25% reduction in common area energy costs',
        '100% customer satisfaction rating',
        'Zero post-installation service calls'
      ],
      testimonial: {
        text: "The quality of Promac products and the technical support provided made this complex project seamless. Residents are extremely happy with the electrical systems and smart home capabilities.",
        author: 'Priya Sharma',
        position: 'Electrical Contractor, Premium Electrical Services'
      }
    },
    {
      id: 3,
      title: 'Manufacturing Plant - AutoTech Industries',
      category: 'industrial',
      location: 'Chennai, Tamil Nadu',
      duration: '6 months',
      projectValue: '₹3.2 crores',
      savings: '₹48 lakhs',
      contractor: 'Industrial Power Solutions',
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&h=600&fit=crop',
      description: 'Complete electrical infrastructure for an automotive parts manufacturing facility including high-power machinery connections and safety systems.',
      challenges: [
        'High-power machinery requirements (up to 500 KW)',
        'Stringent safety and compliance standards',
        'Minimal downtime during installation',
        'Integration with existing plant systems'
      ],
      solutions: [
        'Heavy-duty industrial switchgear',
        'Motor control centers with VFD integration',
        'Comprehensive earthing and lightning protection',
        'Industrial-grade cable management systems'
      ],
      products: [
        { name: 'Industrial Switchgear', quantity: '12 panels', value: '₹1.2 crores' },
        { name: 'Motor Control Centers', quantity: '8 units', value: '₹65 lakhs' },
        { name: 'Industrial Cables', quantity: '10 km', value: '₹45 lakhs' },
        { name: 'Safety Systems', quantity: '1 complete', value: '₹35 lakhs' }
      ],
      results: [
        'Zero unplanned downtime since installation',
        '15% improvement in power factor',
        'Full compliance with industrial safety standards',
        'Reduced maintenance costs by 40%'
      ],
      testimonial: {
        text: "Promac\'s industrial-grade products have proven their reliability in our demanding manufacturing environment. The technical expertise and after-sales support have been outstanding.",
        author: 'Suresh Menon',
        position: 'Plant Manager, AutoTech Industries'
      }
    },
    {
      id: 4,
      title: 'Metro Station Electrical Systems',
      category: 'infrastructure',
      location: 'Bangalore, Karnataka',
      duration: '10 months',
      projectValue: '₹4.5 crores',
      savings: '₹65 lakhs',
      contractor: 'Metro Infrastructure Pvt. Ltd.',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&h=600&fit=crop',
      description: 'Electrical infrastructure for a major metro station including platform lighting, escalator power systems, and emergency backup solutions.',
      challenges: [
        ' 24/7 operational requirements',
        'High passenger safety standards',
        'Integration with metro control systems',
        'Redundant power supply requirements'
      ],
      solutions: [
        'Dual-feed power distribution systems',
        'Emergency lighting with battery backup',
        'SCADA integration for remote monitoring',
        'Fire-resistant cable systems'
      ],
      products: [
        { name: 'Power Distribution Panels', quantity: '25 units', value: '₹1.8 crores' },
        { name: 'Emergency Lighting', quantity: '1,200 fixtures', value: '₹35 lakhs' },
        { name: 'Fire-Resistant Cables', quantity: '20 km', value: '₹85 lakhs' },
        { name: 'UPS Systems', quantity: '6 units', value: '₹55 lakhs' }
      ],
      results: [
        '99.99% system availability achieved',
        'Full compliance with metro safety standards',
        'Seamless integration with control systems',
        'Zero safety incidents post-commissioning'
      ],
      testimonial: {
        text: "The reliability and quality of Promac\'s electrical systems are critical for our metro operations. Their products have consistently performed beyond expectations in this demanding environment.",
        author: 'Dr. Anand Krishnan',
        position: 'Chief Engineer, Metro Infrastructure Pvt. Ltd.'
      }
    }
  ];

  const filteredCases = selectedCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  return (
    <section className="py-20 bg-transparent section-premium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-300 via-sky-400 to-indigo-400 bg-clip-text text-transparent">
            Success Stories & Case Studies
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Discover how Promac products have powered major projects across India. Real projects, real results, and measurable cost savings achieved by our business partners.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center mb-12">
          <div className="glass-ios rounded-xl p-2 inline-flex">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium brand-transition ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-br from-cyan-600/40 to-indigo-700/40 text-white shadow-xl'
                    : 'text-white hover:bg-white/10'
                }`}
              >
                <Icon name={category.icon} size={18} />
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredCases.map((study) => (
            <div key={study.id} className="glass-effect rounded-2xl overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white">
                      {categories.find(cat => cat.id === study.category)?.label}
                    </span>
                    <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-medium text-white">
                      {study.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{study.title}</h3>
                  <p className="text-white/90 text-sm">{study.location}</p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-white/70 mb-6 line-clamp-3">{study.description}</p>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/8 ring-1 ring-white/10 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-white">{study.projectValue}</div>
                    <div className="text-xs text-white/70">Project Value</div>
                  </div>
                  <div className="bg-white/8 ring-1 ring-white/10 rounded-lg p-3 text-center">
                    <div className="text-lg font-bold text-cyan-300">{study.savings}</div>
                    <div className="text-xs text-white/70">Cost Savings</div>
                  </div>
                </div>

                {/* Contractor Info */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-cyan-500 to-indigo-600">
                    <Icon name="Building2" size={16} color="#FFFFFF" />
                  </div>
                  <div>
                    <div className="font-medium text-white text-sm">{study.contractor}</div>
                    <div className="text-xs text-white/70">Project Contractor</div>
                  </div>
                </div>

                <Button
                  variant="outline"
                  fullWidth
                  iconName="Eye"
                  iconPosition="left"
                  onClick={() => setSelectedCase(study)}
                  className="bg-white text-gray-900 border-white hover:bg-white hover:text-black"
                >
                  View Full Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modal/Detail View */}
        {selectedCase && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="glass-ios rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto w-full">
              <div className="sticky top-0 glass-effect p-6 flex items-center justify-between rounded-t-2xl">
                <h2 className="text-2xl font-bold text-white">{selectedCase.title}</h2>
                <button
                  onClick={() => setSelectedCase(null)}
                  className="p-2 text-white hover:bg-white/10 rounded-lg brand-transition"
                >
                  <Icon name="X" size={24} />
                </button>
              </div>

              <div className="p-6 space-y-8">
                {/* Project Overview */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-white">{selectedCase.projectValue}</div>
                    <div className="text-sm text-white/70">Project Value</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-cyan-300">{selectedCase.savings}</div>
                    <div className="text-sm text-white/70">Cost Savings</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-white">{selectedCase.duration}</div>
                    <div className="text-sm text-white/70">Duration</div>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4 text-center">
                    <div className="text-xl font-bold text-white">{selectedCase.location}</div>
                    <div className="text-sm text-white/70">Location</div>
                  </div>
                </div>

                {/* Challenges & Solutions */}
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-4">Challenges</h3>
                    <div className="space-y-3">
                      {selectedCase.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gradient-to-br from-fuchsia-500 to-pink-600">
                      <Icon name="AlertCircle" size={12} color="#FFFFFF" />
                          </div>
                    <span className="text-white/95 text-sm">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-brand-navy mb-4">Solutions</h3>
                    <div className="space-y-3">
                      {selectedCase.solutions.map((solution, index) => (
                        <div key={index} className="flex items-start space-x-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-gradient-to-br from-teal-400 to-cyan-500">
                        <Icon name="CheckCircle" size={12} color="#FFFFFF" />
                          </div>
                      <span className="text-white/95 text-sm">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Products Used */}
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Products Used</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedCase.products.map((product, index) => (
                      <div key={index} className="glass-effect rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-white">{product.name}</h4>
                          <span className="text-sm font-bold text-cyan-300">{product.value}</span>
                        </div>
                        <p className="text-sm text-white/70">{product.quantity}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-lg font-bold text-brand-navy mb-4">Results Achieved</h3>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedCase.results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyan-500 to-indigo-600">
                        <Icon name="TrendingUp" size={12} color="#FFFFFF" strokeWidth={3} />
                        </div>
                      <span className="text-white/95 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-white/5 rounded-xl p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-cyan-500 to-indigo-600">
                      <Icon name="Quote" size={20} color="#FFFFFF" />
                    </div>
                    <div>
                      <p className="text-white/95 italic mb-4">"{selectedCase.testimonial.text}"</p>
                      <div>
                        <div className="font-semibold text-white">{selectedCase.testimonial.author}</div>
                        <div className="text-sm text-white/70">{selectedCase.testimonial.position}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-ios rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Success Story?
            </h3>
            <p className="text-white/70 mb-6">
              Join hundreds of successful contractors and businesses who trust Promac for their electrical projects. Get expert consultation and competitive pricing for your next project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
                className="cta-primary"
              >
                Request Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Calculator"
                iconPosition="left"
                className="bg-white text-gray-900 border-white hover:bg-white hover:text-black"
              >
                Calculate Your Savings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;