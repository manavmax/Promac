import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Image from '../../components/AppImage';
import CartItem from './components/CartItem';
import CartSummary from './components/CartSummary';
import SmartRecommendations from './components/SmartRecommendations';
import TechnicalSupport from './components/TechnicalSupport';
import EmptyCart from './components/EmptyCart';
import { useCart } from '../../contexts/CartContext';

const SmartCartManagementHub = () => {
  const navigate = useNavigate();
  const { items: cartItems, totalItems, removeFromCart, updateQuantity, clearCart, addToCart } = useCart();
  const [savedForLater, setSavedForLater] = useState([]);
  const [showSavedItems, setShowSavedItems] = useState(false);
  const [expandedItems, setExpandedItems] = useState(new Set());

  // Load saved items from localStorage
  useEffect(() => {
    const savedItems = localStorage.getItem('promac-saved-items');
    if (savedItems) {
      setSavedForLater(JSON.parse(savedItems));
    }
  }, []);



  const handleUpdateQuantity = (itemId, newQuantity) => {
    updateQuantity(itemId, newQuantity);
  };

  const handleRemoveItem = (itemId) => {
    removeFromCart(itemId);
  };

  const handleToggleExpand = (itemId) => {
    setExpandedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
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
    addToCart(product);
  };

  const handleApplyCoupon = (couponCode) => {
    console.log('Applied coupon:', couponCode);
  };

  const handleClearCart = () => {
    clearCart();
  };



  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Smart Cart Management Hub - Promac Electrical</title>
        <meta name="description" content="Intelligent cart management with bulk pricing, technical support, and smart recommendations for electrical components." />
      </Helmet>
      <div className="pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems?.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              {/* Page Header */}
              <div className="flex items-start justify-between mb-12">
                <div className="flex items-center space-x-4">
                  <div className="flex flex-col items-center">
                    <Image
                      src="/assets/images/promac-high-resolution-logo-transparent.png"
                      alt="Promac Electrical"
                      className="h-12 w-auto"
                    />
                    <div className="flex items-center space-x-2 mt-2">
                      <Icon name="ShoppingCart" size={20} className="text-black" />
                      <span className="text-sm font-light text-gray-600">
                        {totalItems} {totalItems === 1 ? 'item' : 'items'} in your cart
                      </span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    iconName="Heart"
                    iconPosition="left"
                    onClick={() => setShowSavedItems(!showSavedItems)}
                    className="border-black bg-black text-white hover:bg-white hover:text-black transition-all duration-200 font-light"
                  >
                    Saved Items ({savedForLater?.length})
                  </Button>
                  
                  {cartItems?.length > 0 && (
                    <Button
                      variant="ghost"
                      iconName="Trash2"
                      iconPosition="left"
                      onClick={handleClearCart}
                      className="text-gray-600 hover:text-black hover:bg-gray-100 transition-all duration-200 font-light"
                    >
                      Clear Cart
                    </Button>
                  )}
                </div>
              </div>
              
              {/* Back to Home Button - Left Side */}
              <div className="flex justify-start mb-8">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => navigate('/')}
                  iconName="ArrowLeft"
                  iconPosition="left"
                  iconSize={16}
                  className="border-gray-300 text-white hover:border-white hover:text-white font-light"
                >
                  Back to Home
                </Button>
              </div>

              {/* Saved Items Section */}
              {showSavedItems && savedForLater?.length > 0 && (
                <div className="mb-8">
                  <div className="glass-card rounded-lg p-6">
                    <h2 className="text-xl font-semibold text-foreground mb-4">
                      Saved for Later ({savedForLater?.length})
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {savedForLater?.map((item) => (
                        <div key={item?.id} className="flex items-center space-x-4 p-4 glass-card rounded-lg">
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
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 py-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Cart Items List */}
                  <div className="space-y-4">
                    {cartItems?.map((item) => (
                      <CartItem
                        key={item?.id}
                        item={{...item, expanded: expandedItems.has(item.id)}}
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
                <div className="lg:col-span-1 space-y-6">
                  {/* Cart Summary */}
                  <CartSummary
                    cartItems={cartItems}
                    onApplyCoupon={handleApplyCoupon}
                  />

                  {/* Technical Support */}
                  <TechnicalSupport />
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