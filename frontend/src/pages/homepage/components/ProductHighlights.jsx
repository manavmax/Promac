import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ProductHighlights = () => {
  const [activeCategory, setActiveCategory] = useState('New In');
  const scrollContainerRef = useRef(null);

  const categories = [
    'New In',
    'Smart Switches',
    'MCB & Protection',
    'LED Lighting',
    'Smart Home'
  ];

  const products = {
    'New In': [
      {
        id: 1,
        name: 'Smart MCB Pro Series 32A',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop',
        badge: 'New',
        collection: 'PRO SERIES',
        features: [
          'IoT Monitoring',
          'Remote Control',
          'Energy Analytics'
        ],
        rating: 5,
        price: '₹2,499'
      },
      {
        id: 2,
        name: 'Modular Switch Premium Gold',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop',
        badge: 'New',
        collection: 'PREMIUM COLLECTION',
        features: [
          'Gold Finish',
          'Touch Control',
          'LED Indicators'
        ],
        rating: 5,
        price: '₹899'
      },
      {
        id: 3,
        name: 'Smart WiFi Plug Pro',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=1000&auto=format&fit=crop',
        badge: 'New',
        collection: 'SMART HOME',
        features: [
          'Voice Control',
          'Energy Monitoring',
          'Timer Functions'
        ],
        rating: 5,
        price: '₹1,299'
      },
      {
        id: 4,
        name: 'LED Panel Light 24W',
        image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop',
        badge: 'New',
        collection: 'ENERGY SAVER',
        features: [
          '24W Power',
          'Dimmable',
          '5 Year Warranty'
        ],
        rating: 5,
        price: '₹1,599'
      },
      {
        id: 5,
        name: 'Smart Motion Sensor',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=1000&auto=format&fit=crop',
        badge: 'New',
        collection: 'AUTOMATION',
        features: [
          'PIR Detection',
          'Auto Dimming',
          'Weather Resistant'
        ],
        rating: 5,
        price: '₹799'
      }
    ],
    'Smart Switches': [
      {
        id: 6,
        name: 'Touch Switch 2-Gang',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop',
        badge: 'Smart',
        collection: 'TOUCH SERIES',
        features: [
          'Touch Control',
          'WiFi Enabled',
          'App Control'
        ],
        rating: 5,
        price: '₹1,199'
      },
      {
        id: 7,
        name: 'Smart Dimmer Switch',
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1000&auto=format&fit=crop',
        badge: 'Smart',
        collection: 'DIMMER PRO',
        features: [
          'Smooth Dimming',
          'Voice Control',
          'Scene Setting'
        ],
        rating: 5,
        price: '₹1,499'
      }
    ],
    'MCB & Protection': [
      {
        id: 8,
        name: 'MCB 16A Type C',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop',
        badge: 'BIS Certified',
        collection: 'PROTECTION',
        features: [
          'Type C Trip',
          '16A Rating',
          'BIS Certified'
        ],
        rating: 5,
        price: '₹399'
      },
      {
        id: 9,
        name: 'RCCB 30mA 2P',
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1000&auto=format&fit=crop',
        badge: 'Safety',
        collection: 'SAFETY PRO',
        features: [
          '30mA Sensitivity',
          '2 Pole',
          'Test Function'
        ],
        rating: 5,
        price: '₹1,899'
      }
    ],
    'LED Lighting': [
      {
        id: 10,
        name: 'LED Strip Light 5M',
        image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop',
        badge: 'RGB',
        collection: 'STRIP LIGHT',
        features: [
          'RGB Colors',
          'Remote Control',
          'Waterproof'
        ],
        rating: 5,
        price: '₹999'
      },
      {
        id: 11,
        name: 'LED Downlight 12W',
        image: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814?q=80&w=1000&auto=format&fit=crop',
        badge: 'Energy Saver',
        collection: 'DOWNLIGHT',
        features: [
          '12W Power',
          'Warm White',
          'Easy Install'
        ],
        rating: 5,
        price: '₹699'
      }
    ],
    'Smart Home': [
      {
        id: 12,
        name: 'Smart Hub Controller',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=1000&auto=format&fit=crop',
        badge: 'Hub',
        collection: 'CONTROL CENTER',
        features: [
          'Central Control',
          'Multiple Protocols',
          'Voice Integration'
        ],
        rating: 5,
        price: '₹3,999'
      },
      {
        id: 13,
        name: 'Smart Door Sensor',
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?q=80&w=1000&auto=format&fit=crop',
        badge: 'Sensor',
        collection: 'SECURITY',
        features: [
          'Door Detection',
          'Battery Powered',
          'App Alerts'
        ],
        rating: 5,
        price: '₹1,199'
      }
    ]
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth'
      });
    }
  };

  const currentProducts = products[activeCategory] || [];

  return (
    <section className="pt-12 pb-20 section-premium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <span className="text-[#FF0C0D]">Promac</span>
            <span className="text-white"> Product Highlights</span>
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Explore our premium electrical components and smart home solutions trusted by professionals and homeowners across India
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 backdrop-blur-md border mr-3 ${
                activeCategory === category
                  ? 'bg-[#FF0C0D] text-white border-[#FF0C0D] shadow-lg'
                  : 'bg-white/10 text-slate-200 border-white/20 hover:bg-white/15 hover:border-white/25'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <div 
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {currentProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/20 hover:border-white/30 block"
              >
                {/* Product Image */}
                <div className="relative h-48 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  

                </div>

                {/* Product Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-white text-lg mb-3 line-clamp-2">
                    {product.name}
                  </h3>
                  
                  {/* Features */}
                  <div className="space-y-1 mb-4">
                    {product.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-200">
                        <Icon name="Check" size={14} className="text-[#FF0C0D] mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">
                      {product.price}
                    </span>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        window.location.href = `/product/${product.id}`;
                      }}
                      className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/30 transition-colors shadow-lg border border-white/30"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Scroll Buttons */}
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:bg-white/30 transition-colors z-10 border border-white/30"
            aria-label="Scroll left"
          >
            <Icon name="ChevronLeft" size={20} className="text-white" />
          </button>
          
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:bg-white/30 transition-colors z-10 border border-white/30"
            aria-label="Scroll right"
          >
            <Icon name="ChevronRight" size={20} className="text-white" />
          </button>
        </div>

        {/* View All Button */}
        <div className="text-center mt-8">
          <Link
            to="/product-catalog"
            className="inline-flex items-center gap-2 bg-[#FF0C0D] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#FF0C0D]/90 transition-colors shadow-lg"
          >
            View All Products
            <Icon name="ArrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductHighlights;
