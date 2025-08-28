import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import { useCart } from '../../../contexts/CartContext';
import { useWishlist } from '../../../contexts/WishlistContext';
import Notification from '../../../components/ui/Notification';
import ShareModal from '../../../components/ui/ShareModal';

const InnovationSpotlight = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [notification, setNotification] = useState({ show: false, message: '', type: 'success' });
  const [shareModalOpen, setShareModalOpen] = useState(false);
  const [show360View, setShow360View] = useState(false);
  const [showARPreview, setShowARPreview] = useState(false);
  
  const { addToCart, isInCart, getCartItemQuantity } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

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

  const handleAddToCart = () => {
    addToCart(currentProduct);
    setNotification({
      show: true,
      message: `${currentProduct.name} added to cart!`,
      type: 'success'
    });
  };

  const handleToggleWishlist = () => {
    toggleWishlist(currentProduct);
    const isWishlisted = isInWishlist(currentProduct.id);
    setNotification({
      show: true,
      message: isWishlisted 
        ? `${currentProduct.name} removed from wishlist` 
        : `${currentProduct.name} added to wishlist!`,
      type: 'success'
    });
  };

  const handleShare = () => {
    setShareModalOpen(true);
  };

  const handleShareSuccess = (message) => {
    setNotification({
      show: true,
      message: message || 'Product shared successfully!',
      type: 'success'
    });
  };

  const closeNotification = () => {
    setNotification({ show: false, message: '', type: 'success' });
  };

  const handle360View = () => {
    setShow360View(true);
    setNotification({
      show: true,
      message: `Opening 360° view for ${currentProduct.name}`,
      type: 'info'
    });
  };

  const handleARPreview = () => {
    setShowARPreview(true);
    setNotification({
      show: true,
      message: `Launching AR preview for ${currentProduct.name}`,
      type: 'info'
    });
  };

  return (
    <section className="py-20 section-premium">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 glass-ios px-4 py-2 rounded-full">
            <Icon name="Zap" size={16} className="text-blue-400" />
            <span className="text-sm font-medium text-white">Innovation Spotlight</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            <span className="text-white">Future-Ready </span>
            <span className="text-[#FF0C0D]">Smart</span>
            <span className="text-white"> Solutions</span>
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
              <div className="glass-ios rounded-3xl p-8 shadow-xl">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* AR Badge */}
                  {currentProduct.arEnabled && (
                    <div className="absolute top-4 right-4 glass-ios px-3 py-1 rounded-full">
                      <div className="flex items-center space-x-2">
                        <Icon name="Scan" size={16} className="text-blue-400" />
                        <span className="text-xs font-bold text-white">AR View</span>
                      </div>
                    </div>
                  )}

                  {/* New Badge */}
                  {currentProduct.isNew && (
                    <div className="absolute top-4 left-4 bg-[#FF0C0D] text-white px-3 py-1 rounded-full">
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
                    className="text-white border-white/60 hover:bg-white hover:text-slate-900"
                    onClick={handle360View}
                  >
                    360° View
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName="Scan"
                    iconPosition="left"
                    className="text-blue-400 border-blue-400/60 hover:bg-blue-400 hover:text-white"
                    onClick={handleARPreview}
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
                      ? 'glass-hero shadow-lg bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600/30'
                      : 'glass-effect hover:bg-blue-500/10 border border-blue-400/10'
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
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-white/10 text-white ring-1 ring-white/15">
                    {currentProduct.category}
                  </span>
                  {currentProduct.isNew && (
                    <span className="px-3 py-1 rounded-full text-sm font-semibold bg-white/10 text-white ring-1 ring-white/15">
                      Latest Release
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-bold text-white">{currentProduct.name}</h3>
                <p className="text-lg text-slate-300 leading-relaxed">
                  {currentProduct.description}
                </p>
                <div className="text-3xl font-bold text-blue-400">{currentProduct.price}</div>
              </div>

            {/* Features */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-text-headline">Key Features</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {currentProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="CheckCircle" size={16} className="text-blue-400" />
                    <span className="text-white">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-text-headline">Technical Specifications</h4>
                <div className="glass-ios rounded-xl p-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  {Object.entries(currentProduct.specifications).map(([key, value]) => (
                    <div key={key} className="space-y-1">
                      <dt className="text-sm font-medium text-text-secondary">{key}</dt>
                      <dd className="text-sm font-semibold text-text-headline">{value}</dd>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                fullWidth
                iconName="ShoppingCart"
                iconPosition="left"
                className={`cta-primary ${isInCart(currentProduct.id) ? 'bg-brand-green hover:bg-brand-green/90' : ''}`}
                onClick={handleAddToCart}
              >
                {isInCart(currentProduct.id) ? 'Added to Cart' : 'Add to Cart'}
              </Button>
              <Button
                variant="outline"
                iconName={isInWishlist(currentProduct.id) ? "Heart" : "Heart"}
                iconPosition="left"
                className={`bg-white text-slate-900 border-white ${isInWishlist(currentProduct.id) ? '[&>svg]:text-[#FF0C0D] [&>svg]:fill-[#FF0C0D]' : ''}`}
                onClick={handleToggleWishlist}
              >
                {isInWishlist(currentProduct.id) ? 'Wishlisted' : 'Wishlist'}
              </Button>
              <Button
                variant="outline"
                iconName="Share"
                iconPosition="left"
                className="bg-white text-slate-900 border-white"
                onClick={handleShare}
              >
                Share
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="glass-ios rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Experience the Future of Electrical Solutions
              </h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
                Explore our complete range of smart products with AR visualization and IoT connectivity
              </p>
              <div className="pt-4">
                <Link to="/product-catalog">
                  <Button
                    variant="default"
                    size="lg"
                    iconName="Zap"
                    iconPosition="left"
                    className="bg-[#FF0C0D] hover:bg-[#FF0C0D]/90 text-white px-6 py-3 text-xs sm:text-sm font-semibold rounded-lg shadow-lg"
                  >
                    Explore Smart Products
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Notification */}
      <Notification
        show={notification.show}
        message={notification.message}
        type={notification.type}
        onClose={closeNotification}
      />

      {/* Share Modal */}
      <ShareModal
        product={currentProduct}
        isOpen={shareModalOpen}
        onClose={() => setShareModalOpen(false)}
        onShareSuccess={handleShareSuccess}
      />

      {/* 360° View Modal */}
      {show360View && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900">360° View - {currentProduct.name}</h3>
              <button
                onClick={() => setShow360View(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* 3D Model Container */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="relative w-64 h-64">
                  {/* Product 3D Model */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full animate-pulse"></div>
                  <div className="absolute inset-4 bg-gradient-to-br from-slate-300 to-slate-400 rounded-full shadow-lg"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full"></div>
                  
                  {/* Product Details Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Icon name={currentProduct.category === "Home Automation" ? "Home" : currentProduct.category === "Circuit Protection" ? "Shield" : "Settings"} size={48} className="text-slate-600 mx-auto" />
                      <div className="w-16 h-1 bg-slate-400 rounded-full mx-auto"></div>
                    </div>
                  </div>
                  
                  {/* Rotation Controls */}
                  <div className="absolute top-2 left-2 bg-white/80 rounded-full p-2">
                    <Icon name="RotateCw" size={16} className="text-slate-600" />
                  </div>
                  <div className="absolute top-2 right-2 bg-white/80 rounded-full p-2">
                    <Icon name="ZoomIn" size={16} className="text-slate-600" />
                  </div>
                </div>
              </div>
              
              {/* Instructions */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-lg p-3">
                <p className="text-sm text-slate-600 text-center">Drag to rotate • Scroll to zoom • Click for details</p>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-slate-600">Interactive 360° view of {currentProduct.name}</p>
            </div>
          </div>
        </div>
      )}

      {/* AR Preview Modal */}
      {showARPreview && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-slate-900">AR Preview - {currentProduct.name}</h3>
              <button
                onClick={() => setShowARPreview(false)}
                className="text-slate-500 hover:text-slate-700"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            <div className="aspect-square bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl flex items-center justify-center relative overflow-hidden">
              {/* AR Camera View */}
              <div className="w-full h-full relative">
                {/* Camera Grid Overlay */}
                <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 opacity-20">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border border-blue-300"></div>
                  ))}
                </div>
                
                {/* AR Product Model */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Product Shadow */}
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-4 bg-black/20 rounded-full blur-sm"></div>
                    
                    {/* Product 3D Model */}
                    <div className="relative w-48 h-48">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full animate-pulse"></div>
                      <div className="absolute inset-2 bg-gradient-to-br from-slate-200 to-slate-300 rounded-full shadow-xl"></div>
                      <div className="absolute inset-4 bg-gradient-to-br from-slate-100 to-slate-200 rounded-full"></div>
                      
                      {/* Product Icon */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Icon name={currentProduct.category === "Home Automation" ? "Home" : currentProduct.category === "Circuit Protection" ? "Shield" : "Settings"} size={40} className="text-slate-600" />
                      </div>
                      
                      {/* AR Placement Indicator */}
                      <div className="absolute -top-2 -right-2 bg-green-500 rounded-full p-1">
                        <Icon name="Check" size={12} className="text-white" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* AR Controls */}
                <div className="absolute top-4 left-4 bg-white/90 rounded-lg p-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Camera" size={16} className="text-blue-600" />
                    <span className="text-xs text-slate-700">AR Active</span>
                  </div>
                </div>
                
                <div className="absolute top-4 right-4 bg-white/90 rounded-lg p-2">
                  <div className="flex items-center space-x-2">
                    <Icon name="Move" size={16} className="text-blue-600" />
                    <span className="text-xs text-slate-700">Move</span>
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 rounded-lg p-3">
                  <p className="text-sm text-slate-600 text-center">Point camera at surface • Tap to place • Drag to move</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <p className="text-slate-600">Augmented Reality preview of {currentProduct.name}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default InnovationSpotlight;