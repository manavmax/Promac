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
    navigate('/adaptive-user-dashboard');
  };

  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
      {/* Empty Cart Illustration */}
      <div className="w-32 h-32 bg-muted/50 rounded-full flex items-center justify-center mb-8">
        <Icon name="ShoppingCart" size={48} className="text-muted-foreground" />
      </div>
      {/* Main Message */}
      <h1 className="text-2xl font-semibold text-foreground mb-3">
        Your cart is empty
      </h1>
      <p className="text-muted-foreground mb-8 max-w-md">
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
        >
          Continue Shopping
        </Button>
        <Button
          variant="outline"
          size="lg"
          iconName="Search"
          iconPosition="left"
        >
          Search Products
        </Button>
      </div>
      {/* Popular Categories */}
      <div className="w-full max-w-4xl mb-12">
        <h2 className="text-xl font-semibold text-foreground mb-6">Popular Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {popularCategories?.map((category, index) => (
            <div
              key={index}
              className="p-6 bg-card border border-border rounded-lg hover:shadow-precision transition-all duration-200 cursor-pointer group"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon name={category?.icon} size={24} className="text-primary" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                {category?.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {category?.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="text-xs text-primary font-medium">
                  {category?.itemCount}
                </span>
                <Icon name="ArrowRight" size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Recently Viewed */}
      <div className="w-full max-w-4xl">
        <h2 className="text-xl font-semibold text-foreground mb-6">Recently Viewed</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentlyViewed?.map((product) => (
            <div
              key={product?.id}
              className="p-4 bg-card border border-border rounded-lg hover:shadow-precision transition-all duration-200 cursor-pointer"
            >
              <div className="w-full h-32 bg-muted rounded-lg overflow-hidden mb-4">
                <img
                  src={product?.image}
                  alt={product?.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = '/assets/images/no_image.png';
                  }}
                />
              </div>
              <h3 className="text-sm font-medium text-foreground mb-1 line-clamp-2">
                {product?.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-2">{product?.brand}</p>
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-foreground">
                  ₹{product?.price?.toLocaleString('en-IN')}
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Plus"
                  iconSize={14}
                >
                  Add
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Support Section */}
      <div className="w-full max-w-2xl mt-12 p-6 bg-muted/50 rounded-lg">
        <div className="flex items-center justify-center space-x-3 mb-4">
          <Icon name="Headphones" size={24} className="text-primary" />
          <h3 className="text-lg font-medium text-foreground">Need Help Finding Products?</h3>
        </div>
        <p className="text-sm text-muted-foreground mb-4 text-center">
          Our electrical experts are here to help you find the right components for your project.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            variant="outline"
            iconName="Phone"
            iconPosition="left"
          >
            Call Expert
          </Button>
          <Button
            variant="outline"
            iconName="MessageCircle"
            iconPosition="left"
          >
            Live Chat
          </Button>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;