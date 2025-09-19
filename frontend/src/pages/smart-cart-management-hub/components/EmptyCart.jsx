import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { useNavigate } from 'react-router-dom';

const EmptyCart = () => {
  const navigate = useNavigate();

  const popularCategories = [
    {
      name: 'Switches & Sockets',
      icon: 'Zap',
      description: 'Modular switches, outlets, and plates',
      itemCount: '500+ items'
    },
    {
      name: 'Circuit Breakers',
      icon: 'Shield',
      description: 'MCBs, RCCBs, and safety equipment',
      itemCount: '200+ items'
    },
    {
      name: 'LED Lighting',
      icon: 'Lightbulb',
      description: 'Panel lights, bulbs, and fixtures',
      itemCount: '300+ items'
    },
    {
      name: 'Cables & Wires',
      icon: 'Cable',
      description: 'Power cables, control wires, and accessories',
      itemCount: '150+ items'
    }
  ];

  const recentlyViewed = [
    {
      id: 1,
      name: 'Schneider Electric Livia Switch',
      price: 245,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=200&h=200&fit=crop',
      brand: 'Schneider Electric'
    },
    {
      id: 2,
      name: 'Legrand Myrius Socket',
      price: 180,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=200&h=200&fit=crop',
      brand: 'Legrand'
    },
    {
      id: 3,
      name: 'Havells Crabtree Switch',
      price: 320,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop',
      brand: 'Havells'
    }
  ];

  const handleContinueShopping = () => {
    navigate('/dashboard');
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      {/* Empty Cart Illustration */}
      <div className="w-40 h-40 bg-gray-100 border border-gray-200 rounded-full flex items-center justify-center mb-8 shadow-sm">
        <Icon name="ShoppingCart" size={56} className="text-gray-400" />
      </div>
      {/* Main Message */}
      <h1 className="text-4xl font-light text-black mb-4 tracking-tight">
        Your cart is empty
      </h1>
      <p className="text-gray-600 text-lg mb-10 max-w-lg leading-relaxed font-light">
        Start building your electrical project with quality components from India's most trusted electrical supplier.
      </p>
      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12">
        <Button
          variant="default"
          size="lg"
          onClick={handleContinueShopping}
          iconName="ArrowRight"
          iconPosition="right"
          className="bg-black hover:bg-gray-800 text-white font-light px-8 py-4 shadow-sm hover:shadow-md transition-all duration-200"
        >
          Continue Shopping
        </Button>
        <Button
          variant="outline"
          size="lg"
          iconName="Search"
          iconPosition="left"
          className="border-black bg-black text-white hover:bg-white hover:text-black font-light px-8 py-4 transition-all duration-200"
        >
          Search Products
        </Button>
      </div>
      {/* Popular Categories */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-2xl font-light text-black mb-8 tracking-tight">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCategories?.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-white border border-gray-200 hover:shadow-md hover:bg-gray-50 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-14 h-14 bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-all duration-200">
                <Icon name={category?.icon} size={28} className="text-black" />
              </div>
              <h3 className="text-lg font-light text-black mb-2">
                {category?.name}
              </h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed font-light">
                {category?.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-black font-light bg-gray-100 px-2 py-1 border border-gray-200">
                  {category?.itemCount}
                </span>
                <Icon name="ArrowRight" size={16} className="text-gray-400 group-hover:text-black transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recently Viewed */}
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-light text-black mb-8 tracking-tight">Recently Viewed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentlyViewed?.map((product) => (
            <div
              key={product?.id}
              className="p-5 bg-white border border-gray-200 hover:shadow-md hover:bg-gray-50 transition-all duration-200 cursor-pointer group"
            >
              <div className="w-full h-36 bg-gray-100 overflow-hidden mb-4 border border-gray-200 group-hover:border-gray-300 transition-all duration-200">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                  onError={(e) => {
                    e.target.src = '/assets/images/no_image.png';
                  }}
                />
              </div>
              <h3 className="text-sm font-light text-black mb-2 line-clamp-2">
                {product?.name}
              </h3>
              <p className="text-xs text-gray-600 mb-3 font-light">{product?.brand}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-light text-black">
                  ₹{product?.price?.toLocaleString('en-IN')}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Plus"
                  iconSize={14}
                  className="bg-white border-gray-300 text-black hover:bg-black hover:text-white hover:border-black font-light"
                >
                  Add
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Support Section */}
      <div className="w-full max-w-2xl mt-12 p-8 bg-white border border-gray-200 shadow-sm">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Icon name="Headphones" size={28} className="text-black" />
          <h3 className="text-xl font-light text-black">Need Help Finding Products?</h3>
        </div>
        <p className="text-gray-600 mb-6 text-center leading-relaxed font-light">
          Our electrical experts are here to help you find the right components for your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            iconName="Phone"
            iconPosition="left"
            className="border-black bg-black text-white hover:bg-white hover:text-black font-light px-6 py-3"
          >
            Call Expert
          </Button>
          <Button
            variant="outline"
            iconName="MessageCircle"
            iconPosition="left"
            className="border-black bg-black text-white hover:bg-white hover:text-black font-light px-6 py-3"
          >
            Live Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;