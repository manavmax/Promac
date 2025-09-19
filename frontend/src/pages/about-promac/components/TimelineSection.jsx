import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TimelineSection = () => {
  const [activeYear, setActiveYear] = useState(2024);

  const timelineData = [
    {
      year: 1998,
      title: "Foundation & Vision",
      description: "Promac Electrical was founded with a vision to revolutionize India\'s electrical component distribution. Started with a small team of 5 electrical engineers in Mumbai.",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
      achievements: ["First electrical component store", "5 founding members", "Mumbai headquarters established"],
      icon: "Zap"
    },
    {
      year: 2003,
      title: "Expansion Across Maharashtra",
      description: "Expanded operations to 15 cities across Maharashtra, establishing strong distribution networks and building relationships with local electricians and contractors.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop",
      achievements: ["15 cities coverage", "200+ dealer network", "First warehouse facility"],
      icon: "MapPin"
    },
    {
      year: 2008,
      title: "National Presence",
      description: "Achieved pan-India presence with distribution centers in all major metros. Introduced quality certification processes and established technical support teams.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
      achievements: ["Pan-India presence", "BIS certification", "Technical support launch"],
      icon: "Globe"
    },
    {
      year: 2012,
      title: "Digital Transformation",
      description: "Launched India's first comprehensive electrical component e-commerce platform, revolutionizing how professionals and consumers purchase electrical products.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      achievements: ["E-commerce platform launch", "Mobile app development", "Digital catalog system"],
      icon: "Smartphone"
    },
    {
      year: 2016,
      title: "Innovation Lab",
      description: "Established state-of-the-art R&D facility focusing on smart home technology, IoT integration, and sustainable electrical solutions for the Indian market.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
      achievements: ["R&D facility established", "Smart home products", "IoT integration"],
      icon: "Lightbulb"
    },
    {
      year: 2020,
      title: "Sustainability Initiative",
      description: "Launched comprehensive sustainability program including eco-friendly manufacturing, recycling initiatives, and carbon-neutral delivery options across India.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
      achievements: ["Carbon-neutral delivery", "Recycling program", "Green manufacturing"],
      icon: "Leaf"
    },
    {
      year: 2024,
      title: "Industry Leadership",
      description: "Today, Promac stands as India's leading electrical component distributor, serving over 1 million customers with 50,000+ products and maintaining the highest quality standards.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop",
      achievements: ["1M+ customers", "50K+ products", "Industry leadership"],
      icon: "Trophy"
    }
  ];

  return (
    <section className="w-full dark relative min-h-screen overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Journey Through Time
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            From a small electrical store to India's leading electrical component distributor, 
            discover the milestones that shaped our legacy of excellence.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {timelineData.map((item) => (
            <button
              key={item.year}
              onClick={() => setActiveYear(item.year)}
              className={`px-6 py-3 rounded-full font-semibold brand-transition ${
                activeYear === item.year
                  ? 'bg-brand-red text-white shadow-lg'
                  : 'bg-white/10 text-white border border-white/20 hover:bg-white/20 backdrop-blur-sm'
              }`}
            >
              {item.year}
            </button>
          ))}
        </div>

        {/* Active Timeline Item */}
        {timelineData.map((item) => (
          activeYear === item.year && (
            <div key={item.year} className="glass-ios rounded-3xl p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-brand-amber rounded-full flex items-center justify-center">
                      <Icon name={item.icon} size={32} color="white" />
                    </div>
                    <div>
                      <div className="text-brand-amber font-bold text-2xl">{item.year}</div>
                      <h3 className="text-3xl font-bold text-white">{item.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-lg text-white/80 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Key Achievements:</h4>
                    <div className="grid gap-2">
                      {item.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <Icon name="CheckCircle" size={20} color="var(--color-brand-green)" />
                          <span className="text-white/80">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className="relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      className="w-full h-80 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="glass-ios rounded-full p-3">
                        <Icon name="Calendar" size={20} color="white" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        ))}

        {/* Timeline Progress */}
        <div className="mt-12 flex justify-center">
          <div className="flex items-center space-x-2">
            {timelineData.map((item, index) => (
              <div key={item.year} className="flex items-center">
                <div
                  className={`w-4 h-4 rounded-full brand-transition cursor-pointer ${
                    activeYear === item.year
                      ? 'bg-brand-amber' :'bg-gray-300 hover:bg-brand-amber/50'
                  }`}
                  onClick={() => setActiveYear(item.year)}
                />
                {index < timelineData.length - 1 && (
                  <div className="w-8 h-0.5 bg-gray-300 mx-2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;