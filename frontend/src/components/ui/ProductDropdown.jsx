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
    <>
      <div
        ref={dropdownRef}
        className="absolute top-full left-1/2 transform -translate-x-1/2 z-50 mt-2 lg:block hidden"
        style={{
          width: 'min(1200px, calc(100vw - 40px))',
          maxHeight: '85vh'
        }}
      >
        {/* Main Dropdown Container - Minimalist Corporate Design */}
        <div className="relative bg-white rounded-lg shadow-xl overflow-hidden border border-gray-200">
          {/* Content Grid - Clean Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            
            {/* PRODUCTS Section - Left Column */}
            <div className="p-6 border-r border-gray-100 bg-gray-50/20">
              <h4 className="text-sm font-medium text-gray-900 mb-6">Categories</h4>
              <div className="space-y-1">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    onMouseEnter={() => handleCategoryHover(category.id)}
                    className={`group cursor-pointer px-3 py-2.5 rounded-md transition-all duration-200 ${
                      activeCategory === category.id 
                        ? 'bg-white shadow-sm border-l-2 border-blue-600' 
                        : 'hover:bg-white/60'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-5 h-5 rounded flex items-center justify-center transition-colors duration-200 ${
                        activeCategory === category.id ? 'text-blue-600' : 'text-gray-500 group-hover:text-gray-700'
                      }`}>
                        <Icon name={category.icon} size={14} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-gray-900 text-sm truncate">{category.name}</h5>
                        <p className="text-xs text-gray-500 truncate">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main Content Area - Products Display */}
            <div className="col-span-3 p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-medium text-gray-900">
                  {categories.find(cat => cat.id === activeCategory)?.name || 'Products'}
                </h4>
                <button
                  onClick={() => handleViewAllCategory(categories.find(cat => cat.id === activeCategory)?.name || 'All Products')}
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium transition-colors"
                >
                  View All →
                </button>
              </div>
              
              {/* Products Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {categories.find(cat => cat.id === activeCategory)?.products?.slice(0, 6).map((product, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => handleProductHover(product.name)}
                    className="group cursor-pointer p-4 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                        <Icon name="Package" size={16} className="text-gray-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h5 className="font-medium text-gray-900 text-sm mb-1 truncate">{product.name}</h5>
                        <p className="text-xs text-gray-500 mb-2 line-clamp-2">{product.description}</p>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            <div className="flex text-yellow-400">
                              {[...Array(5)].map((_, i) => (
                                <Icon key={i} name="Star" size={10} className={i < Math.floor(product.rating) ? 'fill-current' : ''} />
                              ))}
                            </div>
                            <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                          </div>
                          <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                        </div>
                        {product.featured && (
                          <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions Sidebar */}
            <div className="p-6 border-l border-gray-100 bg-gray-50/20">
              <h4 className="text-sm font-medium text-gray-900 mb-6">Quick Actions</h4>
              <div className="space-y-3">
                <button
                  onClick={handleViewCatalog}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-all duration-200 text-left"
                >
                  <Icon name="Package" size={16} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">Browse Catalog</span>
                </button>
                
                <button
                  onClick={() => navigate('/product-catalog?filter=new')}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-all duration-200 text-left"
                >
                  <Icon name="Gift" size={16} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">New Arrivals</span>
                </button>
                
                <button
                  onClick={handleContactSales}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-all duration-200 text-left"
                >
                  <Icon name="Users" size={16} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">Bulk Orders</span>
                </button>
                
                <button
                  onClick={handleDownloadCatalog}
                  className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-white transition-all duration-200 text-left"
                >
                  <Icon name="Download" size={16} className="text-gray-600" />
                  <span className="text-sm font-medium text-gray-900">Download Catalog</span>
                </button>
              </div>
            </div>
          </div>

          {/* Search Bar - Bottom Section */}
          <div className="border-t border-gray-100 p-6 bg-white">
            <div className="flex items-center space-x-4">
              <div className="flex-1 relative">
                <div className="relative">
                  <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products, categories, or specifications..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 placeholder-gray-500 bg-white transition-all duration-200"
                  />
                </div>
                {searchResults.length > 0 && (
                  <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-10 max-h-60 overflow-y-auto">
                    {searchResults.map((product, index) => (
                      <div
                        key={index}
                        onClick={() => handleSearchResultClick(product)}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-b-0 transition-all duration-200"
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
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all duration-200 hover:shadow-md cursor-pointer text-sm flex items-center space-x-2"
              >
                <Icon name="Search" size={16} />
                <span>Search</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Product Dropdown */}
      <div className="lg:hidden">
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h3 className="text-lg font-medium text-gray-900">Products</h3>
              <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Icon name="X" size={20} className="text-gray-600" />
              </button>
            </div>
            
            <div className="p-4 border-b border-gray-100">
              <div className="flex space-x-3">
                <div className="flex-1 relative">
                  <Icon name="Search" size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm text-gray-900 placeholder-gray-500 bg-white"
                  />
                </div>
                <button 
                  onClick={handleSearchProducts}
                  className="px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Icon name="Search" size={16} />
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-4">
              <h4 className="text-sm font-medium text-gray-900 mb-4">Categories</h4>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div
                    key={category.id}
                    onClick={() => handleCategoryHover(category.id)}
                    className={`cursor-pointer p-3 rounded-lg transition-all duration-200 ${
                      activeCategory === category.id 
                        ? 'bg-blue-50 border border-blue-200' 
                        : 'hover:bg-gray-50 border border-transparent'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        activeCategory === category.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'
                      }`}>
                        <Icon name={category.icon} size={16} />
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900 text-sm">{category.name}</h5>
                        <p className="text-xs text-gray-500">{category.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {activeCategory && (
              <div className="p-4 border-t border-gray-100">
                <h4 className="text-sm font-medium text-gray-900 mb-4">
                  {categories.find(c => c.id === activeCategory)?.name}
                </h4>
                <div className="space-y-3">
                  {categories.find(c => c.id === activeCategory)?.products.slice(0, 4).map((product, index) => (
                    <div
                      key={product.name}
                      onClick={() => handleViewDetails(product.name)}
                      className="cursor-pointer p-3 border border-gray-200 rounded-lg hover:border-gray-300 hover:shadow-sm transition-all duration-200"
                    >
                      <h6 className="font-medium text-gray-900 text-sm mb-1">{product.name}</h6>
                      <p className="text-xs text-gray-500 mb-2">{product.description}</p>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <div className="flex text-yellow-400">
                            {[...Array(5)].map((_, i) => (
                              <Icon key={i} name="Star" size={10} className={i < Math.floor(product.rating) ? 'fill-current' : ''} />
                            ))}
                          </div>
                          <span className="text-xs text-gray-500 ml-1">{product.rating}</span>
                        </div>
                        <span className="text-xs text-gray-400">({product.reviews} reviews)</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDropdown;
