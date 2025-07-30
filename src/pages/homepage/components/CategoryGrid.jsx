import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CategoryGrid = () => {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Circuit Protection",
      icon: "Shield",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      productCount: "250+ Products",
      subcategories: ["MCBs", "RCCBs", "Isolators", "Distribution Boards"],
      specifications: "6A to 63A ratings",
      featured: true
    },
    {
      id: 2,
      name: "Lighting Solutions",
      icon: "Lightbulb",
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=300&h=200&fit=crop",
      productCount: "180+ Products",
      subcategories: ["LED Panels", "Street Lights", "Flood Lights", "Emergency Lights"],
      specifications: "3W to 200W range"
    },
    {
      id: 3,
      name: "Switches & Sockets",
      icon: "ToggleLeft",
      image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=300&h=200&fit=crop",
      productCount: "320+ Products",
      subcategories: ["Modular Switches", "Industrial Sockets", "USB Outlets", "Smart Switches"],
      specifications: "6A to 32A capacity"
    },
    {
      id: 4,
      name: "Cables & Wires",
      icon: "Cable",
      image: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=200&fit=crop",
      productCount: "150+ Products",
      subcategories: ["House Wires", "Armoured Cables", "Control Cables", "Flexible Cords"],
      specifications: "0.75mm² to 400mm²"
    },
    {
      id: 5,
      name: "Smart Home",
      icon: "Smartphone",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=200&fit=crop",
      productCount: "95+ Products",
      subcategories: ["Smart Switches", "Motion Sensors", "Smart Plugs", "Home Automation"],
      specifications: "WiFi & Bluetooth enabled",
      featured: true
    },
    {
      id: 6,
      name: "Industrial Equipment",
      icon: "Settings",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop",
      productCount: "200+ Products",
      subcategories: ["Contactors", "Relays", "Motor Starters", "Control Panels"],
      specifications: "Up to 1000V rating"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-headline">
            Explore Our Product Categories
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Discover comprehensive electrical solutions across all categories with technical specifications and expert guidance
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.id}
              to="/product-catalog"
              className="group relative"
              onMouseEnter={() => setHoveredCategory(category.id)}
              onMouseLeave={() => setHoveredCategory(null)}
            >
              <div className="category-morph rounded-2xl overflow-hidden h-80 relative">
                {/* Featured Badge */}
                {category.featured && (
                  <div className="absolute top-4 right-4 z-20 bg-brand-amber text-brand-navy px-3 py-1 rounded-full text-xs font-bold">
                    Featured
                  </div>
                )}

                {/* Background Image */}
                <div className="absolute inset-0">
                  <Image
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 brand-transition"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                </div>

                {/* Content Overlay */}
                <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                  {/* Top Section */}
                  <div className="flex items-start justify-between">
                    <div className="glass-effect p-3 rounded-xl">
                      <Icon name={category.icon} size={24} className="text-white" />
                    </div>
                    <div className="text-right">
                      <div className="text-white/80 text-sm font-medium">{category.productCount}</div>
                    </div>
                  </div>

                  {/* Bottom Section */}
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-white">{category.name}</h3>
                    <p className="text-white/80 text-sm">{category.specifications}</p>
                    
                    {/* Subcategories - Show on Hover */}
                    <div className={`space-y-2 brand-transition ${
                      hoveredCategory === category.id 
                        ? 'opacity-100 translate-y-0' :'opacity-0 translate-y-4'
                    }`}>
                      <div className="grid grid-cols-2 gap-2">
                        {category.subcategories.map((sub, index) => (
                          <div
                            key={index}
                            className="glass-effect px-2 py-1 rounded text-xs text-white/90 text-center"
                          >
                            {sub}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-white/80 text-sm font-medium">Explore Products</span>
                      <Icon 
                        name="ArrowRight" 
                        size={16} 
                        className={`text-white brand-transition ${
                          hoveredCategory === category.id ? 'translate-x-1' : ''
                        }`} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12">
          <Link to="/product-catalog">
            <button className="cta-secondary px-8 py-3 rounded-xl font-semibold text-white flex items-center space-x-2 mx-auto">
              <span>View All Categories</span>
              <Icon name="ArrowRight" size={18} />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;