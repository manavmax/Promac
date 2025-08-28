import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, MessageCircle, Phone, Star, TrendingUp, Zap, Shield, Users, Award } from 'lucide-react';

const CategoryMegaMenu = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('lighting');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const menuRef = useRef(null);

  // Sample product data for search
  const products = [
    { id: 1, name: 'LED Panel Light', category: 'lighting', price: '$45.99', rating: 4.8 },
    { id: 2, name: 'Circuit Breaker', category: 'electrical', price: '$89.99', rating: 4.9 },
    { id: 3, name: 'Smart Switch', category: 'automation', price: '$34.99', rating: 4.7 },
    { id: 4, name: 'Cable Management', category: 'cables', price: '$12.99', rating: 4.6 },
    { id: 5, name: 'Power Distribution', category: 'electrical', price: '$156.99', rating: 4.9 },
  ];

  // Handle search functionality
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim()) {
      setIsSearching(true);
      setTimeout(() => {
        const results = products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(results);
        setIsSearching(false);
      }, 300);
    } else {
      setSearchResults([]);
      setIsSearching(false);
    }
  };

  // Handle search submission
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/product-catalog?search=${encodeURIComponent(searchQuery)}`;
    }
  };

  // Handle quick actions
  const handleQuickAction = (action) => {
    switch (action) {
      case 'bulk-order':
        window.location.href = '/business-solutions';
        break;
      case 'quote':
        window.location.href = '/contact-locations';
        break;
      case 'support':
        window.location.href = '/support-center';
        break;
      case 'contact':
        window.location.href = '/contact-locations';
        break;
      default:
        break;
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const categories = {
    lighting: {
      name: 'Lighting Solutions',
      icon: <Zap className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-yellow-500 to-orange-500',
      products: ['LED Panels', 'Smart Bulbs', 'Industrial Lighting', 'Emergency Lights']
    },
    electrical: {
      name: 'Electrical Equipment',
      icon: <Shield className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-blue-500 to-indigo-500',
      products: ['Circuit Breakers', 'Switches', 'Outlets', 'Fuse Boxes']
    },
    automation: {
      name: 'Smart Automation',
      icon: <TrendingUp className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-green-500 to-emerald-500',
      products: ['Smart Switches', 'Home Automation', 'IoT Devices', 'Control Systems']
    },
    cables: {
      name: 'Cables & Wiring',
      icon: <Users className="w-5 h-5" />,
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      products: ['Power Cables', 'Data Cables', 'Cable Management', 'Connectors']
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="absolute top-full left-0 right-0 z-50 min-w-[800px] max-w-[1200px] mx-auto"
        >
          <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden">
            {/* Header with Search */}
            <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-white">
                  Product Catalog
                </h3>
                <div className="flex items-center gap-2 text-gray-400">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-sm font-medium">Premium Selection</span>
                </div>
              </div>
              
              {/* Search Bar */}
              <form onSubmit={handleSearchSubmit} className="relative">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products, categories, or brands..."
                    value={searchQuery}
                    onChange={(e) => handleSearch(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-red-600 text-white rounded-md font-medium hover:bg-red-700 transition-colors"
                  >
                    Search
                  </button>
                </div>
                
                {/* Search Results */}
                {searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-gray-800 border border-gray-600 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {isSearching ? (
                      <div className="p-4 text-center text-gray-400">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-red-500 mx-auto mb-2"></div>
                        Searching...
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="p-2">
                        {searchResults.map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 cursor-pointer transition-colors"
                          >
                            <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center">
                              <Star className="w-4 h-4 text-yellow-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-white font-medium">{product.name}</div>
                              <div className="text-sm text-gray-400">{product.category}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-red-400 font-bold">{product.price}</div>
                              <div className="text-xs text-gray-500">★ {product.rating}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-gray-400">
                        No products found for "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* Main Content */}
            <div className="p-6">
              <div className="grid grid-cols-3 gap-6">
                {/* Categories */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-red-500" />
                    Categories
                  </h4>
                  <div className="space-y-2">
                    {Object.entries(categories).map(([key, category]) => (
                      <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 flex items-center gap-3 ${
                          activeCategory === key
                            ? 'bg-red-600/20 border border-red-500/30 text-white'
                            : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                        }`}
                      >
                        <div className={`w-8 h-8 rounded-lg ${category.color} flex items-center justify-center`}>
                          {category.icon}
                        </div>
                        <span className="font-medium">{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Featured Products */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-yellow-500" />
                      Featured Products
                    </h4>
                    <button
                      onClick={() => window.location.href = '/product-catalog'}
                      className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors"
                    >
                      View All →
                    </button>
                  </div>
                  
                  <div className="space-y-3">
                    {categories[activeCategory]?.products.map((product, index) => (
                      <div
                        key={index}
                        className="bg-gray-800 border border-gray-600 rounded-lg p-3 hover:border-red-500/30 transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg ${categories[activeCategory].color} flex items-center justify-center`}>
                            {categories[activeCategory].icon}
                          </div>
                          <div>
                            <div className="text-white font-medium group-hover:text-red-400 transition-colors">
                              {product}
                            </div>
                            <div className="text-sm text-gray-400">
                              Premium Quality
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Quick Actions */}
                <div>
                  <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                    <Zap className="w-5 h-5 text-blue-500" />
                    Quick Actions
                  </h4>
                  <div className="space-y-3">
                    <button
                      onClick={() => handleQuickAction('bulk-order')}
                      className="w-full p-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-3"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      Bulk Order
                    </button>
                    
                    <button
                      onClick={() => handleQuickAction('quote')}
                      className="w-full p-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center gap-3"
                    >
                      <MessageCircle className="w-5 h-5" />
                      Get Quote
                    </button>
                    
                    <button
                      onClick={() => handleQuickAction('support')}
                      className="w-full p-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors flex items-center gap-3"
                    >
                      <Shield className="w-5 h-5" />
                      Technical Support
                    </button>
                    
                    <button
                      onClick={() => handleQuickAction('contact')}
                      className="w-full p-3 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center gap-3"
                    >
                      <Phone className="w-5 h-5" />
                      Contact Support
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 bg-gray-800 border-t border-gray-700">
              <div className="flex items-center justify-between text-sm text-gray-400">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-2">
                    <Shield className="w-4 h-4 text-green-500" />
                    Certified Products
                  </span>
                  <span className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    Premium Quality
                  </span>
                  <span className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-500" />
                    Fast Delivery
                  </span>
                </div>
                <button
                  onClick={() => window.location.href = '/product-catalog'}
                  className="text-red-400 hover:text-red-300 font-medium transition-colors"
                >
                  Browse Full Catalog →
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CategoryMegaMenu;
