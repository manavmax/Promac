import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';
import SmartRecommendations from './components/SmartRecommendations';
import TechnicalSupport from './components/TechnicalSupport';
import EmptyCart from './components/EmptyCart';

const SmartCartManagementHub = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [savedForLater, setSavedForLater] = useState([]);
  const [showSavedItems, setShowSavedItems] = useState(false);

  // Mock cart data
  const mockCartItems = [
    {
      id: 'cart-1',
      name: 'Schneider Electric Livia 16A 3-Pin Socket with USB Charger',
      price: 890,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=400&fit=crop',
      brand: 'Schneider Electric',
      sku: 'SCH-LIV-16A-USB',
      stock: 150,
      deliveryTime: '2-3 days delivery',
      specifications: [
        { label: 'Current Rating', value: '16A' },
        { label: 'Voltage', value: '230V AC' },
        { label: 'Material', value: 'Polycarbonate' },
        { label: 'Color', value: 'Pearl White' },
        { label: 'USB Output', value: '5V, 2.4A' },
        { label: 'Certification', value: 'ISI, BIS' }
      ],
      compatibility: ['Standard Modular Box', 'European Standard', 'Indian Standard'],
      expanded: false
    },
    {
      id: 'cart-2',
      name: 'Legrand Arteor 20A Industrial Socket 3-Phase',
      price: 1450,
      quantity: 5,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      brand: 'Legrand',
      sku: 'LEG-ART-20A-3PH',
      stock: 85,
      deliveryTime: '1-2 days delivery',
      specifications: [
        { label: 'Current Rating', value: '20A' },
        { label: 'Voltage', value: '415V AC' },
        { label: 'Phases', value: '3-Phase + Neutral' },
        { label: 'Material', value: 'High-grade Plastic' },
        { label: 'IP Rating', value: 'IP44' },
        { label: 'Certification', value: 'CE, ISI' }
      ],
      compatibility: ['Industrial Applications', '3-Phase Systems', 'Heavy Duty Equipment'],
      expanded: false
    },
    {
      id: 'cart-3',
      name: 'Havells Crabtree Athena 6A Switch with Indicator',
      price: 320,
      quantity: 12,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
      brand: 'Havells',
      sku: 'HAV-ATH-6A-IND',
      stock: 8,
      deliveryTime: '3-4 days delivery',
      specifications: [
        { label: 'Current Rating', value: '6A' },
        { label: 'Voltage', value: '230V AC' },
        { label: 'Switch Type', value: 'One Way' },
        { label: 'Indicator', value: 'LED Neon' },
        { label: 'Material', value: 'Polycarbonate' },
        { label: 'Finish', value: 'Glossy White' }
      ],
      compatibility: ['Modular Switches', 'Standard Wiring', 'LED Compatible'],
      expanded: false
    }
  ];

  const mockSavedItems = [
    {
      id: 'saved-1',
      name: 'Siemens 5SL Series MCB 32A Single Pole',
      price: 450,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop',
      brand: 'Siemens',
      sku: 'SIE-5SL-32A-SP',
      stock: 200,
      deliveryTime: '1-2 days delivery'
    },
    {
      id: 'saved-2',
      name: 'ABB System Pro M Compact MCCB 100A',
      price: 2890,
      image: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=400&fit=crop',
      brand: 'ABB',
      sku: 'ABB-SPM-100A-MCCB',
      stock: 45,
      deliveryTime: '2-3 days delivery'
    }
  ];

  useEffect(() => {
    // Simulate loading cart data
    const timer = setTimeout(() => {
      setCartItems(mockCartItems);
      setSavedForLater(mockSavedItems);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(items =>
      items?.map(item =>
        item?.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(items => items?.filter(item => item?.id !== itemId));
  };

  const handleToggleExpand = (itemId) => {
    setCartItems(items =>
      items?.map(item =>
        item?.id === itemId ? { ...item, expanded: !item?.expanded } : item
      )
    );
  };

  const handleSaveForLater = (itemId) => {
    const item = cartItems?.find(item => item?.id === itemId);
    if (item) {
      setSavedForLater(prev => [...prev, item]);
      handleRemoveItem(itemId);
    }
  };

  const handleMoveToCart = (itemId) => {
    const item = savedForLater?.find(item => item?.id === itemId);
    if (item) {
      const cartItem = {
        ...item,
        quantity: 1,
        specifications: [
          { label: 'Current Rating', value: '32A' },
          { label: 'Voltage', value: '230V AC' },
          { label: 'Breaking Capacity', value: '6kA' },
          { label: 'Poles', value: 'Single Pole' }
        ],
        compatibility: ['Standard DIN Rail', 'Residential Use', 'Commercial Use'],
        expanded: false
      };
      setCartItems(prev => [...prev, cartItem]);
      setSavedForLater(prev => prev?.filter(item => item?.id !== itemId));
    }
  };

  const handleAddToCart = (product) => {
    const existingItem = cartItems?.find(item => item?.id === product?.id);
    if (existingItem) {
      handleUpdateQuantity(product?.id, existingItem?.quantity + 1);
    } else {
      setCartItems(prev => [...prev, product]);
    }
  };

  const handleApplyCoupon = (couponCode) => {
    console.log('Applied coupon:', couponCode);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const totalItems = cartItems?.reduce((sum, item) => sum + item?.quantity, 0);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-center min-h-[60vh]">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
                  <Icon name="ShoppingCart" size={32} className="text-primary" />
                </div>
                <p className="text-muted-foreground">Loading your cart...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Smart Cart Management Hub - Promac Electrical</title>
        <meta name="description" content="Intelligent cart management with bulk pricing, technical support, and smart recommendations for electrical components." />
      </Helmet>
      <Header />
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {cartItems?.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              {/* Page Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="text-3xl font-bold text-foreground mb-2">
                    Shopping Cart
                  </h1>
                  <p className="text-muted-foreground">
                    {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    iconName="Heart"
                    iconPosition="left"
                    onClick={() => setShowSavedItems(!showSavedItems)}
                  >
                    Saved Items ({savedForLater?.length})
                  </Button>
                  
                  {cartItems?.length > 0 && (
                    <Button
                      variant="ghost"
                      iconName="Trash2"
                      iconPosition="left"
                      onClick={handleClearCart}
                      className="text-error hover:text-error"
                    >
                      Clear Cart
                    </Button>
                  )}
                </div>
              </div>

              {/* Saved Items Section */}
              {showSavedItems && savedForLater?.length > 0 && (
                <div className="mb-8">
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      Saved for Later ({savedForLater?.length})
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {savedForLater?.map((item) => (
                        <div key={item?.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                          <div className="w-16 h-16 bg-muted rounded-lg overflow-hidden">
                            <img
                              src={item?.image}
                              alt={item?.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.src = '/assets/images/no_image.png';
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="text-sm font-medium text-foreground line-clamp-2 mb-1">
                              {item?.name}
                            </h3>
                            <p className="text-xs text-muted-foreground mb-2">{item?.brand}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-sm font-semibold text-foreground">
                                ₹{item?.price?.toLocaleString('en-IN')}
                              </span>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleMoveToCart(item?.id)}
                                iconName="ShoppingCart"
                                iconSize={14}
                              >
                                Move to Cart
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Main Content */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Cart Items List */}
                  <div className="space-y-4">
                    {cartItems?.map((item) => (
                      <CartItem
                        key={item?.id}
                        item={item}
                        onUpdateQuantity={handleUpdateQuantity}
                        onRemove={handleRemoveItem}
                        onToggleExpand={handleToggleExpand}
                        onSaveForLater={handleSaveForLater}
                      />
                    ))}
                  </div>

                  {/* Smart Recommendations */}
                  <SmartRecommendations
                    cartItems={cartItems}
                    onAddToCart={handleAddToCart}
                  />
                </div>

                {/* Sidebar */}
                <div className="space-y-6">
                  {/* Cart Summary */}
                  <CartSummary
                    cartItems={cartItems}
                    onApplyCoupon={handleApplyCoupon}
                  />

                  {/* Technical Support */}
                  <TechnicalSupport />

                  {/* Trust Indicators */}
                  <div className="bg-card border border-border rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      Why Choose Promac?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <Icon name="Shield" size={20} className="text-success" />
                        <div>
                          <p className="text-sm font-medium text-foreground">25+ Years Experience</p>
                          <p className="text-xs text-muted-foreground">Trusted electrical supplier</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Truck" size={20} className="text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Fast Delivery</p>
                          <p className="text-xs text-muted-foreground">Same day dispatch available</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Award" size={20} className="text-warning" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Quality Assured</p>
                          <p className="text-xs text-muted-foreground">ISI, BIS certified products</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Icon name="Headphones" size={20} className="text-primary" />
                        <div>
                          <p className="text-sm font-medium text-foreground">Expert Support</p>
                          <p className="text-xs text-muted-foreground">Technical consultation available</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SmartCartManagementHub;