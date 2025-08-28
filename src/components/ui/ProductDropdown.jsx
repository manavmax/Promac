import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../AppIcon';

const ProductDropdown = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('circuit-protection');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      console.log('ProductDropdown opened, positioning:', dropdownRef.current?.getBoundingClientRect());
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleCategoryHover = (categoryId) => {
    setActiveCategory(categoryId);
    setSearchQuery('');
    setSearchResults([]);
  };

  const handleProductHover = (productName) => {
    setHoveredProduct(productName);
  };

  const handleSearchProducts = () => {
    if (searchQuery.trim()) {
      navigate(`/product-catalog?search=${encodeURIComponent(searchQuery.trim())}`);
      onClose();
    }
  };

  const handleViewCatalog = () => {
    navigate('/product-catalog');
    onClose();
  };

  const handleViewDetails = (productName) => {
    // Navigate to product catalog with search for this specific product
    navigate(`/product-catalog?search=${encodeURIComponent(productName)}`);
    onClose();
  };

  const handleViewAllCategory = (categoryName) => {
    // Navigate to product catalog with category filter
    const categorySlug = categoryName.toLowerCase().replace(/\s+/g, '-');
    navigate(`/product-catalog?category=${categorySlug}`);
    onClose();
  };

  const handleContactSales = () => {
    navigate('/contact-locations');
    onClose();
  };

  const handleDownloadCatalog = () => {
    navigate('/product-catalog?download=true');
    onClose();
  };

  const handleSearchInputChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim()) {
      // Search through all products in all categories
      const results = [];
      categories.forEach(category => {
        category.products.forEach(product => {
          if (product.name.toLowerCase().includes(query.toLowerCase()) ||
              product.description.toLowerCase().includes(query.toLowerCase())) {
            results.push({
              ...product,
              category: category.name,
              categoryId: category.id
            });
          }
        });
      });
      setSearchResults(results.slice(0, 5)); // Limit to 5 results
    } else {
      setSearchResults([]);
    }
  };

  const handleSearchResultClick = (product) => {
    navigate(`/product-catalog?search=${encodeURIComponent(product.name)}&category=${product.categoryId}`);
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  const categories = [
    {
      id: 'circuit-protection',
      name: 'Circuit Protection',
      icon: 'Shield',
      description: 'Advanced circuit breakers and protection devices',
      count: '156 Products',
      products: [
        { name: 'MCBs (Miniature Circuit Breakers)', description: 'High-quality circuit protection with advanced trip mechanisms', featured: true, rating: 4.9, reviews: 234 },
        { name: 'RCCBs (Residual Current Circuit Breakers)', description: 'Ground fault protection devices for enhanced electrical safety', featured: false, rating: 4.8, reviews: 189 },
        { name: 'Distribution Boards', description: 'Professional electrical distribution with modular design', featured: false, rating: 4.7, reviews: 156 },
        { name: 'Fuse Holders & Fuses', description: 'Reliable fuse protection systems for industrial applications', featured: false, rating: 4.6, reviews: 98 },
        { name: 'Surge Protection Devices', description: 'Advanced surge suppression with real-time monitoring', featured: true, rating: 4.9, reviews: 267 }
      ]
    },
    {
      id: 'switches-sockets',
      name: 'Switches & Sockets',
      icon: 'Settings',
      description: 'Premium electrical control solutions',
      count: '89 Products',
      products: [
        { name: 'Modular Switches', description: 'Modern design switches with premium aesthetics', featured: true, rating: 4.8, reviews: 312 },
        { name: 'Industrial Sockets', description: 'Heavy-duty power solutions for demanding environments', featured: false, rating: 4.7, reviews: 178 },
        { name: 'USB Charging Sockets', description: 'Smart charging integration with fast-charge technology', featured: true, rating: 4.9, reviews: 445 },
        { name: 'Dimmer Switches', description: 'Variable lighting control with smooth transitions', featured: false, rating: 4.6, reviews: 134 },
        { name: 'Weatherproof Switches', description: 'Outdoor electrical solutions with IP65 protection', featured: false, rating: 4.8, reviews: 223 }
      ]
    },
    {
      id: 'lighting-solutions',
      name: 'Lighting Solutions',
      icon: 'Zap',
      description: 'Innovative LED and smart lighting',
      count: '124 Products',
      products: [
        { name: 'LED Panel Lights', description: 'Energy-efficient panel lighting with uniform illumination', featured: true, rating: 4.9, reviews: 567 },
        { name: 'LED Strip Lights', description: 'Flexible decorative lighting with RGB control', featured: false, rating: 4.7, reviews: 289 },
        { name: 'Emergency Lights', description: 'Safety and backup lighting with battery backup', featured: false, rating: 4.8, reviews: 198 },
        { name: 'Smart Lighting', description: 'IoT-enabled lighting control with mobile app', featured: true, rating: 4.9, reviews: 423 },
        { name: 'Industrial Lighting', description: 'Heavy-duty lighting solutions for harsh environments', featured: false, rating: 4.7, reviews: 156 }
      ]
    },
    {
      id: 'smart-home',
      name: 'Smart Home',
      icon: 'Wifi',
      description: 'Next-generation home automation',
      count: '67 Products',
      products: [
        { name: 'Smart Switches', description: 'WiFi-enabled control switches with voice integration', featured: true, rating: 4.9, reviews: 334 },
        { name: 'WiFi Controllers', description: 'Central automation control with cloud connectivity', featured: false, rating: 4.8, reviews: 245 },
        { name: 'Home Automation', description: 'Complete smart home systems with scene control', featured: true, rating: 4.9, reviews: 189 },
        { name: 'IoT Devices', description: 'Internet-connected devices with remote monitoring', featured: false, rating: 4.7, reviews: 167 },
        { name: 'Voice Control Systems', description: 'Voice-activated controls with AI assistance', featured: false, rating: 4.8, reviews: 298 }
      ]
    },
    {
      id: 'cables-wires',
      name: 'Cables & Wires',
      icon: 'Activity',
      description: 'High-performance electrical conductors',
      count: '203 Products',
      products: [
        { name: 'Power Cables', description: 'Heavy-duty power transmission with fire resistance', featured: true, rating: 4.8, reviews: 456 },
        { name: 'Control Cables', description: 'Signal and control wiring with EMI protection', featured: false, rating: 4.7, reviews: 234 },
        { name: 'Flexible Cables', description: 'Flexible electrical solutions for moving applications', featured: false, rating: 4.6, reviews: 178 },
        { name: 'Armored Cables', description: 'Protected cable systems with mechanical protection', featured: true, rating: 4.9, reviews: 345 },
        { name: 'Data Cables', description: 'High-speed data transmission with low latency', featured: false, rating: 4.8, reviews: 267 }
      ]
    },
    {
      id: 'accessories',
      name: 'Accessories',
      icon: 'Package',
      description: 'Essential electrical components',
      count: '98 Products',
      products: [
        { name: 'Cable Ties & Clips', description: 'Professional cable management with UV resistance', featured: false, rating: 4.6, reviews: 145 },
        { name: 'Terminal Blocks', description: 'Secure connection solutions with screw terminals', featured: false, rating: 4.7, reviews: 189 },
        { name: 'Conduits & Trunking', description: 'Cable protection systems with easy installation', featured: false, rating: 4.8, reviews: 234 },
        { name: 'Tools & Testers', description: 'Professional electrical tools with calibration', featured: true, rating: 4.9, reviews: 378 },
        { name: 'Mounting Hardware', description: 'Installation components with corrosion resistance', featured: false, rating: 4.6, reviews: 123 }
      ]
    }
  ];

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 mt-3"
      style={{
        width: 'min(1200px, calc(100vw - 80px))',
        maxHeight: '80vh'
      }}
    >
      {/* Main Dropdown Container */}
      <div className="relative bg-white border border-gray-200 rounded-xl shadow-2xl overflow-hidden mx-4">
        {/* Premium Header */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Professional Electrical Solutions</h3>
              <p className="text-sm text-gray-600">Enterprise-grade components trusted by professionals worldwide</p>
            </div>
            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
              {/* Search Input */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-black placeholder-gray-500"
                />
                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {searchResults.map((product, index) => (
                      <div
                        key={index}
                        onClick={() => handleSearchResultClick(product)}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <div className="font-medium text-gray-900 text-sm">{product.name}</div>
                        <div className="text-xs text-gray-500">{product.category}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <button 
                onClick={handleSearchProducts}
                className="w-full sm:w-auto px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-lg cursor-pointer text-sm"
              >
                <Icon name="Search" size={16} className="mr-2" />
                Search
              </button>
              <button 
                onClick={handleViewCatalog}
                className="w-full sm:w-auto px-4 py-2 bg-white border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 cursor-pointer text-sm"
              >
                <Icon name="Grid" size={16} className="mr-2" />
                View Catalog
              </button>
            </div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto" style={{ maxHeight: 'calc(80vh - 200px)' }}>
          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
            {/* Categories Column */}
            <div className="bg-gray-50 p-4 sm:p-6 border-r border-gray-200">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Icon name="Grid" size={18} className="mr-2 text-blue-600" />
                Product Categories
              </h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    onMouseEnter={() => handleCategoryHover(category.id)}
                    className={`group cursor-pointer p-3 sm:p-4 rounded-lg transition-all duration-200 ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 border border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                        activeCategory === category.id
                          ? 'bg-white/20'
                          : 'bg-gray-100 group-hover:bg-blue-100'
                      }`}>
                        <Icon
                          name={category.icon}
                          size={16}
                          color={activeCategory === category.id ? "white" : "#3B82F6"}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-semibold text-sm truncate">{category.name}</h5>
                        <p className={`text-xs ${
                          activeCategory === category.id ? 'text-white/80' : 'text-gray-500'
                        } truncate`}>
                          {category.description}
                        </p>
                        <span className={`text-xs font-medium ${
                          activeCategory === category.id ? 'text-white/60' : 'text-gray-400'
                        }`}>
                          {category.count}
                        </span>
                      </div>
                      <Icon
                        name="ChevronRight"
                        size={14}
                        className={`transition-transform duration-200 flex-shrink-0 ${
                          activeCategory === category.id ? 'rotate-90 text-white' : 'text-gray-400'
                        }`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Products Column */}
            <div className="bg-white p-4 sm:p-6 col-span-2">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 space-y-2 sm:space-y-0">
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 flex items-center">
                  <Icon name="Package" size={20} className="mr-2 sm:mr-3 text-blue-600" />
                  {activeCategory ? categories.find(c => c.id === activeCategory)?.name : 'Select a Category'}
                </h4>
                {activeCategory && (
                  <div className="flex items-center space-x-2 sm:space-x-4 text-xs sm:text-sm text-gray-500">
                    <span className="flex items-center">
                      <Icon name="Package" size={14} className="mr-1" />
                      {categories.find(c => c.id === activeCategory)?.products.length} products
                    </span>
                    <span className="flex items-center">
                      <Icon name="Star" size={14} className="mr-1 text-yellow-400" />
                      Top Rated
                    </span>
                  </div>
                )}
              </div>

              {activeCategory ? (
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {categories.find(c => c.id === activeCategory)?.products.map((product, index) => (
                    <div
                      key={product.name}
                      onMouseEnter={() => handleProductHover(product.name)}
                      onClick={() => handleViewDetails(product.name)}
                      className={`group cursor-pointer p-3 sm:p-4 rounded-lg transition-all duration-200 border ${
                        hoveredProduct === product.name
                          ? 'border-blue-300 bg-blue-50 shadow-md'
                          : 'border-gray-200 hover:border-blue-200 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 mb-2">
                            <h6 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-200 truncate">
                              {product.name}
                            </h6>
                            {product.featured && (
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full border border-yellow-200 w-fit">
                                Featured
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                          {/* Product Meta */}
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs text-gray-500">
                            <span className="flex items-center">
                              <Icon name="Star" size={12} className="mr-1 text-yellow-400" />
                              {product.rating} ({product.reviews} reviews)
                            </span>
                            <span className="flex items-center">
                              <Icon name="Shield" size={12} className="mr-1 text-green-500" />
                              2-Year Warranty
                            </span>
                            <span className="flex items-center">
                              <Icon name="Truck" size={12} className="mr-1 text-blue-500" />
                              Free Shipping
                            </span>
                          </div>
                        </div>

                        <div className="ml-2 sm:ml-4 flex flex-col items-end space-y-2 flex-shrink-0">
                          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                            <Icon name="ArrowRight" size={14} color="#3B82F6" />
                          </div>
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              handleViewDetails(product.name);
                            }}
                            className="px-2 sm:px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded transition-colors duration-200 cursor-pointer whitespace-nowrap"
                          >
                            View Details
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 sm:py-16">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Package" size={32} color="#9CA3AF" />
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">Select a Category</h3>
                  <p className="text-sm text-gray-500">Choose a product category to view detailed information</p>
                </div>
              )}

              {/* View All Category */}
              {activeCategory && (
                <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-200">
                  <div className="flex justify-end">
                    <button 
                      onClick={() => handleViewAllCategory(categories.find(c => c.id === activeCategory)?.name)}
                      className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 cursor-pointer text-sm"
                    >
                      View All {categories.find(c => c.id === activeCategory)?.name} →
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Premium Footer */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-3 lg:space-y-0">
            <div className="flex flex-wrap items-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-600">
              <span className="flex items-center">
                <Icon name="Truck" size={14} className="mr-2 text-green-500" />
                Free Express Shipping
              </span>
              <span className="flex items-center">
                <Icon name="Shield" size={14} className="mr-2 text-blue-500" />
                2-Year Warranty
              </span>
              <span className="flex items-center">
                <Icon name="Clock" size={14} className="mr-2 text-purple-500" />
                24/7 Technical Support
              </span>
              <span className="flex items-center">
                <Icon name="CheckCircle" size={14} className="mr-2 text-green-500" />
                ISO 9001 Certified
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <button 
                onClick={handleContactSales}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 cursor-pointer text-sm"
              >
                Contact Sales
              </button>
              <button 
                onClick={handleDownloadCatalog}
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200 cursor-pointer text-sm"
              >
                Download Catalog →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDropdown;
