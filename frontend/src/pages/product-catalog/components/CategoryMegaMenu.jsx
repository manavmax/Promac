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
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          
          {/* Menu */}
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed top-8 left-8 right-8 bottom-8 z-50 bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col border border-gray-200"
          >
            {/* Header with Search */}
            <div className="p-4 border-b border-gray-200 bg-white">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-medium text-gray-900">
                    Browse Categories
                  </h3>
                  <p className="text-xs text-gray-500 mt-1">
                    Explore our comprehensive product catalog
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
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
                    className="w-full pl-10 pr-16 py-2 border border-gray-200 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-sm"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition-colors text-xs"
                  >
                    Search
                  </button>
                </div>
                
                {/* Search Results */}
                {searchQuery && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {isSearching ? (
                      <div className="p-4 text-center text-gray-500">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-500 mx-auto mb-2"></div>
                        Searching...
                      </div>
                    ) : searchResults.length > 0 ? (
                      <div className="p-2">
                        {searchResults.map((product) => (
                          <div
                            key={product.id}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                          >
                            <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                              <Star className="w-4 h-4 text-yellow-400" />
                            </div>
                            <div className="flex-1">
                              <div className="text-gray-900 font-medium">{product.name}</div>
                              <div className="text-sm text-gray-500">{product.category}</div>
                            </div>
                            <div className="text-right">
                              <div className="text-blue-600 font-bold">{product.price}</div>
                              <div className="text-xs text-gray-500">★ {product.rating}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-4 text-center text-gray-500">
                        No products found for "{searchQuery}"
                      </div>
                    )}
                  </div>
                )}
              </form>
            </div>

            {/* Main Content */}
            <div className="flex-1 p-4 bg-gray-50/30 overflow-y-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Categories */}
                <div>
                  <h4 className="text-sm font-medium text-gray-900 mb-3">Categories</h4>
                  <div className="space-y-1">
                    {Object.entries(categories).map(([key, category]) => (
                      <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`w-full text-left px-2 py-2 rounded-md transition-all duration-200 flex items-center gap-2 ${
                          activeCategory === key
                            ? 'bg-white shadow-sm border-l-2 border-blue-600'
                            : 'hover:bg-white/60'
                        }`}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center ${
                          activeCategory === key ? 'text-blue-600' : 'text-gray-500'
                        }`}>
                          {category.icon}
                        </div>
                        <span className="font-medium text-gray-900 text-xs">{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Featured Products */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-sm font-medium text-gray-900">
                      {categories[activeCategory]?.name || 'Products'}
                    </h4>
                    <button
                      onClick={() => window.location.href = '/product-catalog'}
                      className="text-blue-600 hover:text-blue-800 text-xs font-medium transition-colors"
                    >
                      View All →
                    </button>
                  </div>
                  
                  <div className="space-y-2">
                    {categories[activeCategory]?.products.map((product, index) => (
                      <div
                        key={index}
                        className="bg-white border border-gray-200 rounded-lg p-3 hover:border-gray-300 hover:shadow-sm transition-all cursor-pointer group"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                            {categories[activeCategory].icon}
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900 text-xs group-hover:text-blue-600 transition-colors">
                              {product}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              Premium Quality
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-3 bg-white border-t border-gray-200">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-4 text-gray-500">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3 h-3 text-green-600" />
                    Certified
                  </span>
                  <span className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-500" />
                    Premium
                  </span>
                  <span className="flex items-center gap-1">
                    <Zap className="w-3 h-3 text-blue-600" />
                    Fast Delivery
                  </span>
                </div>
                <button
                  onClick={() => window.location.href = '/product-catalog'}
                  className="text-blue-600 hover:text-blue-800 font-medium transition-colors text-xs"
                >
                  Browse Full Catalog →
                </button>
              </div>
            </div>
        </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CategoryMegaMenu;
