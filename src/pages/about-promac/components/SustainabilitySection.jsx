import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SustainabilitySection = () => {
  const [activeInitiative, setActiveInitiative] = useState(0);

  const initiatives = [
    {
      title: "Green Manufacturing",
      description: "Eco-friendly manufacturing processes reducing carbon footprint by 40% through renewable energy and waste reduction.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      icon: "Factory",
      stats: [
        { label: "Carbon Reduction", value: "40%" },
        { label: "Renewable Energy", value: "60%" },
        { label: "Waste Reduction", value: "35%" }
      ],
      details: [
        "Solar-powered manufacturing facilities",
        "Water recycling and treatment systems",
        "Zero-waste-to-landfill initiatives",
        "Energy-efficient production equipment"
      ]
    },
    {
      title: "Product Recycling Program",
      description: "Comprehensive recycling program for electrical components, processing over 10,000 units monthly across India.",
      image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=600&h=400&fit=crop",
      icon: "Recycle",
      stats: [
        { label: "Products Recycled", value: "10K+/month" },
        { label: "Material Recovery", value: "85%" },
        { label: "Collection Centers", value: "200+" }
      ],
      details: [
        "Free collection from customer locations",
        "Proper disposal of hazardous materials",
        "Material recovery and reprocessing",
        "Certificate of eco-friendly disposal"
      ]
    },
    {
      title: "Community Impact",
      description: "Educational programs and infrastructure development in rural communities, impacting over 50,000 lives annually.",
      image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=400&fit=crop",
      icon: "Heart",
      stats: [
        { label: "Lives Impacted", value: "50K+" },
        { label: "Schools Electrified", value: "500+" },
        { label: "Training Programs", value: "100+" }
      ],
      details: [
        "Rural electrification projects",
        "Electrical safety training programs",
        "Skill development for local electricians",
        "Educational infrastructure support"
      ]
    },
    {
      title: "Carbon Neutral Delivery",
      description: "Innovative delivery solutions including electric vehicles and optimized routing, achieving carbon-neutral logistics.",
      image: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=600&h=400&fit=crop",
      icon: "Truck",
      stats: [
        { label: "Electric Vehicles", value: "200+" },
        { label: "Carbon Offset", value: "100%" },
        { label: "Delivery Efficiency", value: "95%" }
      ],
      details: [
        "Electric delivery vehicle fleet",
        "Optimized delivery route planning",
        "Carbon offset programs",
        "Eco-friendly packaging materials"
      ]
    }
  ];

  const environmentalGoals = [
    {
      goal: "Carbon Neutral by 2030",
      progress: 65,
      description: "Achieving complete carbon neutrality across all operations",
      icon: "Target"
    },
    {
      goal: "100% Renewable Energy",
      progress: 60,
      description: "Transitioning all facilities to renewable energy sources",
      icon: "Sun"
    },
    {
      goal: "Zero Waste to Landfill",
      progress: 80,
      description: "Eliminating all waste sent to landfills through recycling",
      icon: "Trash2"
    },
    {
      goal: "Sustainable Supply Chain",
      progress: 70,
      description: "Ensuring all suppliers meet sustainability standards",
      icon: "Link"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-brand-green/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-navy mb-6">
            Sustainability & Impact
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our commitment to environmental responsibility and community development drives 
            meaningful change across India while building a sustainable future for generations to come.
          </p>
        </div>

        {/* Initiative Navigation */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {initiatives.map((initiative, index) => (
            <button
              key={index}
              onClick={() => setActiveInitiative(index)}
              className={`p-6 rounded-2xl text-left brand-transition ${
                activeInitiative === index
                  ? 'bg-brand-green text-white shadow-brand transform scale-105'
                  : 'bg-white text-brand-navy border border-brand-green/20 hover:bg-brand-green/10'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                activeInitiative === index ? 'bg-white/20' : 'bg-brand-green/10'
              }`}>
                <Icon 
                  name={initiative.icon} 
                  size={24} 
                  color={activeInitiative === index ? 'white' : 'var(--color-brand-green)'} 
                />
              </div>
              <h3 className="font-bold mb-2">{initiative.title}</h3>
              <p className={`text-sm ${
                activeInitiative === index ? 'text-white/80' : 'text-text-secondary'
              }`}>
                {initiative.description.substring(0, 80)}...
              </p>
            </button>
          ))}
        </div>

        {/* Active Initiative Details */}
        <div className="glass-hero rounded-3xl p-8 md:p-12 shadow-brand mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-brand-green rounded-full flex items-center justify-center">
                  <Icon name={initiatives[activeInitiative].icon} size={32} color="white" />
                </div>
                <h3 className="text-3xl font-bold text-brand-navy">
                  {initiatives[activeInitiative].title}
                </h3>
              </div>

              <p className="text-lg text-text-secondary leading-relaxed">
                {initiatives[activeInitiative].description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {initiatives[activeInitiative].stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-brand-green mb-1">{stat.value}</div>
                    <div className="text-sm text-text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Details */}
              <div className="space-y-3">
                <h4 className="font-semibold text-brand-navy">Key Initiatives:</h4>
                <div className="grid gap-2">
                  {initiatives[activeInitiative].details.map((detail, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={16} color="var(--color-brand-green)" />
                      <span className="text-text-secondary text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="aspect-video rounded-2xl overflow-hidden shadow-brand">
                <Image
                  src={initiatives[activeInitiative].image}
                  alt={initiatives[activeInitiative].title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-brand-green rounded-full flex items-center justify-center shadow-brand">
                <Icon name="Leaf" size={24} color="white" />
              </div>
            </div>
          </div>
        </div>

        {/* Environmental Goals */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-brand-navy mb-4">2030 Environmental Goals</h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our ambitious environmental targets drive continuous improvement and innovation 
              in sustainable business practices.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {environmentalGoals.map((goal, index) => (
              <div key={index} className="neomorphic-card rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center">
                      <Icon name={goal.icon} size={20} color="var(--color-brand-green)" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">{goal.goal}</h4>
                      <p className="text-sm text-text-secondary">{goal.description}</p>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-brand-green">{goal.progress}%</div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-secondary">Progress</span>
                    <span className="text-brand-green font-semibold">{goal.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-brand-green h-2 rounded-full brand-transition"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Numbers */}
        <div className="mt-16 glass-hero rounded-3xl p-8 md:p-12 shadow-brand">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-brand-navy mb-4">Our Environmental Impact</h3>
            <p className="text-text-secondary">Measurable results from our sustainability initiatives</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TreePine" size={24} color="var(--color-brand-green)" />
              </div>
              <div className="text-3xl font-bold text-brand-green mb-2">10,000+</div>
              <div className="text-sm text-text-secondary">Trees Planted</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Droplets" size={24} color="var(--color-brand-green)" />
              </div>
              <div className="text-3xl font-bold text-brand-green mb-2">5M+</div>
              <div className="text-sm text-text-secondary">Liters Water Saved</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={24} color="var(--color-brand-green)" />
              </div>
              <div className="text-3xl font-bold text-brand-green mb-2">2MW</div>
              <div className="text-sm text-text-secondary">Solar Energy Generated</div>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Recycle" size={24} color="var(--color-brand-green)" />
              </div>
              <div className="text-3xl font-bold text-brand-green mb-2">85%</div>
              <div className="text-sm text-text-secondary">Waste Recycled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;