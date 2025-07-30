import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const InnovationSpotlight = () => {
  const [activeProduct, setActiveProduct] = useState(0);

  const innovations = [
    {
      id: 1,
      name: "Smart Home Hub Pro",
      category: "Home Automation",
      image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=500&h=400&fit=crop",
      description: "Central control unit for complete home automation with voice control, mobile app integration, and energy monitoring capabilities.",
      features: [
        "Voice Control (Alexa, Google)",
        "Mobile App Integration",
        "Energy Monitoring",
        "Scene Management",
        "Remote Access"
      ],
      specifications: {
        "Connectivity": "WiFi 6, Bluetooth 5.0",
        "Power": "12V DC, 2A",
        "Range": "Up to 100m",
        "Compatibility": "iOS, Android"
      },
      price: "₹12,500",
      isNew: true,
      arEnabled: true
    },
    {
      id: 2,
      name: "IoT Circuit Breaker",
      category: "Circuit Protection",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop",
      description: "Intelligent circuit breaker with real-time monitoring, predictive maintenance alerts, and remote control capabilities.",
      features: [
        "Real-time Monitoring",
        "Predictive Maintenance",
        "Remote Control",
        "Load Analytics",
        "Safety Alerts"
      ],
      specifications: {
        "Rating": "6A to 63A",
        "Voltage": "230V AC",
        "Communication": "WiFi, Zigbee",
        "Certification": "BIS, CE"
      },
      price: "₹3,850",
      isNew: true,
      arEnabled: true
    },
    {
      id: 3,
      name: "Solar Smart Inverter",
      category: "Renewable Energy",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=500&h=400&fit=crop",
      description: "Advanced solar inverter with grid-tie capability, battery backup, and intelligent power management for optimal energy utilization.",
      features: [
        "Grid-Tie Capability",
        "Battery Backup",
        "MPPT Technology",
        "Mobile Monitoring",
        "Weather Integration"
      ],
      specifications: {
        "Capacity": "3KW to 10KW",
        "Efficiency": "98.5%",
        "Battery": "Lithium Compatible",
        "Warranty": "10 Years"
      },
      price: "₹45,000",
      isNew: false,
      arEnabled: true
    }
  ];

  const currentProduct = innovations[activeProduct];

  return (
    <section className="py-16 bg-gradient-to-br from-brand-navy/5 to-brand-amber/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 glass-effect px-4 py-2 rounded-full">
            <Icon name="Zap" size={16} className="text-brand-amber" />
            <span className="text-sm font-medium text-brand-navy">Innovation Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-brand-headline">
            Future-Ready Smart Solutions
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Discover our latest smart home integration products featuring AR visualization, IoT connectivity, and cutting-edge automation technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Product Showcase */}
          <div className="space-y-6">
            {/* Product Image & AR */}
            <div className="relative">
              <div className="glass-hero rounded-3xl p-8 shadow-2xl">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* AR Badge */}
                  {currentProduct.arEnabled && (
                    <div className="absolute top-4 right-4 glass-effect px-3 py-1 rounded-full">
                      <div className="flex items-center space-x-2">
                        <Icon name="Scan" size={16} className="text-brand-amber" />
                        <span className="text-xs font-bold text-brand-navy">AR View</span>
                      </div>
                    </div>
                  )}

                  {/* New Badge */}
                  {currentProduct.isNew && (
                    <div className="absolute top-4 left-4 bg-brand-green text-white px-3 py-1 rounded-full">
                      <span className="text-xs font-bold">NEW</span>
                    </div>
                  )}
                </div>

                {/* AR Controls */}
                <div className="flex justify-center space-x-4 mt-6">
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="RotateCcw"
                    iconPosition="left"
                    className="text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
                  >
                    360° View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Scan"
                    iconPosition="left"
                    className="text-brand-amber border-brand-amber hover:bg-brand-amber hover:text-brand-navy"
                  >
                    AR Preview
                  </Button>
                </div>
              </div>
            </div>

            {/* Product Selector */}
            <div className="flex space-x-4 justify-center">
              {innovations.map((product, index) => (
                <button
                  key={product.id}
                  onClick={() => setActiveProduct(index)}
                  className={`p-4 rounded-xl brand-transition ${
                    index === activeProduct
                      ? 'glass-hero shadow-brand'
                      : 'glass-effect hover:bg-white/20'
                  }`}
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="px-3 py-1 bg-brand-amber/20 text-brand-navy text-sm font-bold rounded-full">
                  {currentProduct.category}
                </span>
                {currentProduct.isNew && (
                  <span className="px-3 py-1 bg-brand-green/20 text-brand-green text-sm font-bold rounded-full">
                    Latest Release
                  </span>
                )}
              </div>
              <h3 className="text-3xl font-bold text-brand-navy">{currentProduct.name}</h3>
              <p className="text-lg text-text-secondary leading-relaxed">
                {currentProduct.description}
              </p>
              <div className="text-3xl font-bold text-brand-green">{currentProduct.price}</div>
            </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-brand-navy">Key Features</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-brand-green" />
                    <span className="text-text-primary">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-brand-navy">Technical Specifications</h4>
              <div className="glass-effect rounded-xl p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(currentProduct.specifications).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <dt className="text-sm font-medium text-text-secondary">{key}</dt>
                      <dd className="text-sm font-semibold text-brand-navy">{value}</dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/product-catalog" className="flex-1">
                <Button
                  variant="default"
                  fullWidth
                  iconName="ShoppingCart"
                  iconPosition="left"
                  className="cta-primary"
                >
                  Add to Cart
                </Button>
              </Link>
              <Button
                variant="outline"
                iconName="Heart"
                iconPosition="left"
                className="text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
              >
                Wishlist
              </Button>
              <Button
                variant="outline"
                iconName="Share"
                iconPosition="left"
                className="text-action-blue border-action-blue hover:bg-action-blue hover:text-white"
              >
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-hero rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-brand-navy">
                Experience the Future of Electrical Solutions
              </h3>
              <p className="text-text-secondary">
                Explore our complete range of smart products with AR visualization and IoT connectivity
              </p>
              <Link to="/product-catalog">
                <Button
                  variant="default"
                  size="lg"
                  iconName="Zap"
                  iconPosition="left"
                  className="cta-primary"
                >
                  Explore Smart Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSpotlight;