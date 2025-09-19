import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SmartRecommendations = ({ cartItems, onAddToCart }) => {
  const [activeTab, setActiveTab] = useState('complementary');

  // Mock recommendation data based on cart contents
  const recommendations = {
    complementary: [
      {
        id: 'rec-1',
        name: 'Schneider Electric Modular Switch Plate',
        price: 145,
        originalPrice: 180,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
        brand: 'Schneider Electric',
        rating: 4.6,
        reviews: 234,
        reason: 'Perfect match for your selected outlets',
        discount: 19,
        inStock: true,
        deliveryTime: '2-3 days'
      },
      {
        id: 'rec-2',
        name: 'Legrand Arteor USB Charger Socket',
        price: 890,
        originalPrice: 1050,
        image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=300&fit=crop',
        brand: 'Legrand',
        rating: 4.8,
        reviews: 156,
        reason: 'Customers who bought switches also bought this',
        discount: 15,
        inStock: true,
        deliveryTime: '1-2 days'
      },
      {
        id: 'rec-3',
        name: 'Havells Crabtree Athena Switch',
        price: 320,
        originalPrice: 380,
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop',
        brand: 'Havells',
        rating: 4.4,
        reviews: 89,
        reason: 'Complete your electrical setup',
        discount: 16,
        inStock: true,
        deliveryTime: '2-3 days'
      }
    ],
    safety: [
      {
        id: 'safety-1',
        name: 'MCB Circuit Breaker 32A',
        price: 450,
        originalPrice: 520,
        image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=300&fit=crop',
        brand: 'Schneider Electric',
        rating: 4.7,
        reviews: 312,
        reason: 'Essential safety for your electrical installation',
        discount: 13,
        inStock: true,
        deliveryTime: '1-2 days'
      },
      {
        id: 'safety-2',
        name: 'ELCB Earth Leakage Circuit Breaker',
        price: 1250,
        originalPrice: 1450,
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop',
        brand: 'Siemens',
        rating: 4.9,
        reviews: 178,
        reason: 'Recommended for industrial applications',
        discount: 14,
        inStock: true,
        deliveryTime: '2-3 days'
      }
    ],
    trending: [
      {
        id: 'trend-1',
        name: 'Smart WiFi Switch with App Control',
        price: 1890,
        originalPrice: 2200,
        image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=300&h=300&fit=crop',
        brand: 'Philips',
        rating: 4.5,
        reviews: 445,
        reason: 'Trending in smart home automation',
        discount: 14,
        inStock: true,
        deliveryTime: '3-4 days',
        badge: 'Trending'
      },
      {
        id: 'trend-2',
        name: 'LED Panel Light 18W Square',
        price: 680,
        originalPrice: 850,
        image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop',
        brand: 'Syska',
        rating: 4.3,
        reviews: 267,
        reason: 'Popular choice this month',
        discount: 20,
        inStock: true,
        deliveryTime: '1-2 days',
        badge: 'Best Seller'
      }
    ]
  };

  const tabs = [
    { id: 'complementary', label: 'Complementary Items', icon: 'Puzzle' },
    { id: 'safety', label: 'Safety Equipment', icon: 'Shield' },
    { id: 'trending', label: 'Trending Products', icon: 'TrendingUp' }
  ];

  const handleAddToCart = (product) => {
    onAddToCart({
      ...product,
      quantity: 1,
      specifications: [
        { label: 'Voltage', value: '230V AC' },
        { label: 'Current', value: '16A' },
        { label: 'Material', value: 'Polycarbonate' },
        { label: 'Color', value: 'White' }
      ],
      compatibility: ['Standard Modular', 'European Standard'],
      stock: 150,
      sku: `SKU-${product?.id?.toUpperCase()}`,
      expanded: false
    });
  };

  return (
    <div className="bg-white border border-gray-200 shadow-sm">
      <div className="p-8">
        <div className="flex items-center space-x-2 mb-8">
          <Icon name="Lightbulb" size={20} className="text-black" />
          <h2 className="text-xl font-light text-black">Smart Recommendations</h2>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 mb-8 bg-gray-100 p-1">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex-1 flex items-center justify-center space-x-2 px-3 py-2 text-sm font-light transition-all duration-200 ${
                activeTab === tab?.id
                  ? 'bg-black text-white'
                  : 'text-gray-600 hover:text-black'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span className="hidden sm:inline">{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Recommendations Grid */}
        <div className="space-y-4">
          {recommendations?.[activeTab]?.map((product) => (
            <div
              key={product?.id}
              className="flex items-start space-x-4 p-4 border border-gray-200 hover:shadow-md transition-all duration-200"
            >
              {/* Product Image */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden relative">
                  <Image
                    src={product?.image}
                    alt={product?.name}
                    className="w-full h-full object-cover"
                  />
                  {product?.badge && (
                    <div className="absolute -top-1 -right-1 bg-black text-white text-xs px-1 py-0.5 border border-gray-200">
                      {product?.badge}
                    </div>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-light text-black mb-1 line-clamp-2">
                  {product?.name}
                </h3>
                <p className="text-xs text-gray-600 mb-2 font-light">{product?.brand}</p>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center space-x-1">
                    <Icon name="Star" size={12} className="text-black fill-current" />
                    <span className="text-xs text-black font-light">{product?.rating}</span>
                  </div>
                  <span className="text-xs text-gray-600 font-light">
                    ({product?.reviews} reviews)
                  </span>
                </div>

                {/* Reason */}
                <p className="text-xs text-black mb-3 font-light">{product?.reason}</p>

                {/* Price and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-light text-black">
                      ₹{product?.price?.toLocaleString('en-IN')}
                    </span>
                    {product?.originalPrice > product?.price && (
                      <>
                        <span className="text-xs text-gray-400 line-through font-light">
                          ₹{product?.originalPrice?.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-black font-light">
                          {product?.discount}% off
                        </span>
                      </>
                    )}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleAddToCart(product)}
                    iconName="Plus"
                    iconPosition="left"
                    iconSize={14}
                    className="text-xs border-black bg-black text-white hover:bg-white hover:text-black font-light"
                  >
                    Add
                  </Button>
                </div>

                {/* Delivery Info */}
                <div className="flex items-center space-x-1 mt-2">
                  <Icon name="Truck" size={10} className="text-gray-600" />
                  <span className="text-xs text-gray-600 font-light">{product?.deliveryTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="mt-8 text-center">
          <Button
            variant="ghost"
            className="text-black hover:text-gray-600 font-light"
            iconName="ArrowRight"
            iconPosition="right"
            iconSize={16}
          >
            View More Recommendations
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SmartRecommendations;