import React, { useState, useEffect } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { Footer } from '../../components/ui/Footer';
import { AuroraBackground } from '../../components/ui/aurora-background';

// Import components
import CategoryMegaMenu from './components/CategoryMegaMenu';
import FilterSidebar from './components/FilterSidebar';
import SearchBar from './components/SearchBar';
import SortingControls from './components/SortingControls';
import ProductGrid from './components/ProductGrid';
import ComparisonBar from './components/ComparisonBar';
import QuickViewModal from './components/QuickViewModal';

// Mock products data
const mockProducts = [
  {
    id: 1,
    name: "Schneider Electric Modular Switch 16A",
    brand: "Schneider Electric",
    price: 245,
    originalPrice: 295,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop"
    ],
    rating: 4.5,
    reviewCount: 128,
    stock: 45,
    isNew: true,
    isBestSeller: false,
    certifications: ['BIS', 'ISI'],
    createdAt: '2024-01-15',
    keySpecs: [
      { label: 'Current Rating', value: '16A' },
      { label: 'Voltage', value: '230V AC' },
      { label: 'Material', value: 'PC/ABS' },
      { label: 'Color', value: 'White' }
    ],
    bulkPricing: true,
    fastDelivery: true,
    warranty: '2 Years',
    variants: [
      { id: 'v1', name: '6A', price: 195 },
      { id: 'v2', name: '16A', price: 245 },
      { id: 'v3', name: '25A', price: 345 }
    ]
  },
  {
    id: 2,
    name: "Siemens Circuit Breaker MCB 32A",
    brand: "Siemens",
    price: 1250,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 89,
    stock: 23,
    isNew: false,
    isBestSeller: true,
    certifications: ['BIS', 'CE'],
    createdAt: '2024-01-10',
    keySpecs: [
      { label: 'Current Rating', value: '32A' },
      { label: 'Breaking Capacity', value: '10kA' },
      { label: 'Poles', value: 'Single Pole' },
      { label: 'Curve Type', value: 'C-Curve' }
    ],
    bulkPricing: true,
    fastDelivery: true,
    warranty: '3 Years'
  },
  {
    id: 3,
    name: "ABB Smart WiFi Switch with App Control",
    brand: "ABB",
    price: 2850,
    originalPrice: 3200,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    rating: 4.3,
    reviewCount: 67,
    stock: 12,
    isNew: true,
    isBestSeller: false,
    certifications: ['BIS', 'WiFi'],
    createdAt: '2024-01-20',
    keySpecs: [
      { label: 'Connectivity', value: 'WiFi 2.4GHz' },
      { label: 'Load Capacity', value: '10A' },
      { label: 'App Support', value: 'iOS/Android' },
      { label: 'Voice Control', value: 'Alexa/Google' }
    ],
    bulkPricing: false,
    fastDelivery: true,
    warranty: '1 Year'
  },
  {
    id: 4,
    name: "Legrand Myrius Socket Outlet 16A",
    brand: "Legrand",
    price: 185,
    originalPrice: 220,
    image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=400&h=400&fit=crop",
    rating: 4.2,
    reviewCount: 156,
    stock: 78,
    isNew: false,
    isBestSeller: true,
    certifications: ['BIS', 'ISI'],
    createdAt: '2024-01-05',
    keySpecs: [
      { label: 'Current Rating', value: '16A' },
      { label: 'Voltage', value: '230V AC' },
      { label: 'Material', value: 'Fire Retardant' },
      { label: 'Finish', value: 'Matte White' }
    ],
    bulkPricing: true,
    fastDelivery: true,
    warranty: '2 Years'
  },
  {
    id: 5,
    name: "Havells LED Panel Light 24W",
    brand: "Havells",
    price: 850,
    originalPrice: 950,
    image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 203,
    stock: 34,
    isNew: false,
    isBestSeller: true,
    certifications: ['BIS', 'ISI'],
    createdAt: '2024-01-08',
    keySpecs: [
      { label: 'Power', value: '24W' },
      { label: 'Luminosity', value: '2400 Lumens' },
      { label: 'Color Temperature', value: '6500K' },
      { label: 'Life Span', value: '25,000 Hours' }
    ],
    bulkPricing: true,
    fastDelivery: false,
    warranty: '3 Years'
  },
  {
    id: 6,
    name: "Philips Smart WiFi Bulb",
    brand: "Philips",
    price: 650,
    originalPrice: 750,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=400&h=400&fit=crop",
    rating: 4.4,
    reviewCount: 89,
    stock: 56,
    isNew: true,
    isBestSeller: false,
    certifications: ['BIS', 'WiFi'],
    createdAt: '2024-01-12',
    keySpecs: [
      { label: 'Power', value: '9W' },
      { label: 'Connectivity', value: 'WiFi 2.4GHz' },
      { label: 'Color Range', value: '16 Million' },
      { label: 'Voice Control', value: 'Alexa/Google' }
    ],
    bulkPricing: false,
    fastDelivery: true,
    warranty: '2 Years'
  },
  {
    id: 7,
    name: "Schneider RCCB 40A 30mA",
    brand: "Schneider Electric",
    price: 3450,
    originalPrice: null,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 45,
    stock: 18,
    isNew: true,
    isBestSeller: false,
    createdAt: '2024-01-18',
    certifications: ['BIS', 'CE'],
    keySpecs: [
      { label: 'Current Rating', value: '40A' },
      { label: 'Sensitivity', value: '30mA' },
      { label: 'Poles', value: '4-Pole' },
      { label: 'Type', value: 'AC Type' }
    ],
    bulkPricing: true,
    fastDelivery: true,
    warranty: '3 Years'
  },
  {
    id: 8,
    name: "Eaton Power Distribution Unit 32A",
    brand: "Eaton",
    price: 4200,
    originalPrice: 4800,
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 67,
    stock: 15,
    isNew: true,
    isBestSeller: false,
    certifications: ['BIS', 'CE', 'ISO'],
    createdAt: '2024-01-22',
    keySpecs: [
      { label: 'Current Rating', value: '32A' },
      { label: 'Voltage', value: '400V AC' },
      { label: 'Poles', value: '3 Pole' },
      { label: 'Breaking Capacity', value: '25kA' }
    ],
    bulkPricing: true,
    fastDelivery: true,
    warranty: '5 Years'
  }
];

const ProductCatalog = () => {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState(mockProducts);
  const [loading, setLoading] = useState(false);
  const [displayedProducts, setDisplayedProducts] = useState(6);
  const [compareList, setCompareList] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [showQuickView, setShowQuickView] = useState(false);

  const handleFilterChange = (filterType, value) => {
    if (filterType === 'clear') {
      setFilters({});
    } else {
      setFilters(prev => ({
        ...prev,
        [filterType]: value
      }));
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    // Scroll to products section
    setTimeout(() => {
      const productsSection = document.querySelector('.product-grid-section');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleSuggestionSelect = (suggestion) => {
    if (suggestion.type === 'product' && suggestion.product) {
      // Navigate directly to product detail page
      navigate(`/product/${suggestion.product.id}`);
    } else {
      setSearchQuery(suggestion.text);
    }
  };

  const handleCompare = (product) => {
    setCompareList(prev => {
      const exists = prev.find(item => item.id === product.id);
      if (exists) {
        return prev.filter(item => item.id !== product.id);
      } else if (prev.length < 4) {
        return [...prev, product];
      }
      return prev;
    });
  };

  const handleRemoveFromCompare = (productId) => {
    setCompareList(prev => prev.filter(item => item.id !== productId));
  };

  const handleQuickView = (product) => {
    console.log('QuickView triggered for:', product.name);
    setQuickViewProduct(product);
    setShowQuickView(true);
  };



  const handleLoadMore = () => {
    setDisplayedProducts(prev => prev + 6);
  };

  const handleAddToCart = (product) => {
    console.log('Adding to cart:', product);
    // This will be handled by the cart context in the QuickViewModal
  };

  const filteredProducts = products.filter(product => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return product.name.toLowerCase().includes(query) ||
             product.brand.toLowerCase().includes(query);
    }
    return true;
  });

  // Apply sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return new Date(b.createdAt || '2024-01-01') - new Date(a.createdAt || '2024-01-01');
      case 'popularity':
        return b.reviewCount - a.reviewCount;
      case 'name-az':
        return a.name.localeCompare(b.name);
      case 'name-za':
        return b.name.localeCompare(a.name);
      case 'stock':
        return b.stock - a.stock;
      case 'discount':
        const discountA = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) * 100 : 0;
        const discountB = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) * 100 : 0;
        return discountB - discountA;
      case 'relevance':
      default:
        // Best match - prioritize search relevance, then rating, then popularity
        if (searchQuery) {
          const query = searchQuery.toLowerCase();
          const aRelevance = a.name.toLowerCase().includes(query) ? 2 : 
                            a.brand.toLowerCase().includes(query) ? 1 : 0;
          const bRelevance = b.name.toLowerCase().includes(query) ? 2 : 
                            b.brand.toLowerCase().includes(query) ? 1 : 0;
          if (aRelevance !== bRelevance) return bRelevance - aRelevance;
        }
        return b.rating - a.rating || b.reviewCount - a.reviewCount;
    }
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <AuroraBackground className="w-full dark !h-auto">
        <div className="pt-28 pb-24 w-full relative">
          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-white">
              Electrical <span className="text-[#FF0C0D]">Product</span> Catalog
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover premium electrical components with BIS certification, competitive pricing, and expert support
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <SearchBar
              onSearch={handleSearch}
              onSuggestionSelect={handleSuggestionSelect}
              products={mockProducts}
            />
          </div>

          {/* Quick Category Access */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowCategoryMenu(true)}
              iconName="Grid3X3"
              iconPosition="left"
              className="bg-white border-white/50 text-gray-900 hover:bg-gray-50 hover:border-white/70 hover:text-gray-900 !hover:text-gray-900"
            >
              Browse Categories
            </Button>
          </div>
        </div>
      </div>
    </AuroraBackground>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-white">
        {/* Sorting Controls - Fixed at top */}
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 -mx-8 px-8 mb-8">
          <SortingControls
            sortBy={sortBy}
            onSortChange={setSortBy}
            viewMode={viewMode}
            onViewModeChange={setViewMode}
            resultsCount={filteredProducts.length}
            onFilterToggle={() => setShowFilters(true)}
            filteredProducts={filteredProducts}
          />
        </div>

        <div className="flex gap-10">
          {/* Sidebar */}
          <div className="w-72 flex-shrink-0">
            <div className="sticky top-24">
              <FilterSidebar
                isOpen={showFilters}
                onClose={() => setShowFilters(false)}
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-white p-4 rounded-lg">

            {/* Active Filters */}
            {Object.keys(filters).length > 0 && (
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 text-lg">Active Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleFilterChange('clear', null)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    Clear All
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {Object.entries(filters).map(([key, values]) => {
                    if (Array.isArray(values)) {
                      return values.map((value, index) => (
                        <span
                          key={`${key}-${index}`}
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-200"
                        >
                          <span>{value}</span>
                          <button
                            onClick={() => {
                              const newValues = values.filter(v => v !== value);
                              handleFilterChange(key, newValues.length > 0 ? newValues : []);
                            }}
                            className="hover:bg-white/20 rounded-full p-1 transition-colors"
                          >
                            <Icon name="X" size={12} />
                          </button>
                        </span>
                      ));
                    }
                    return null;
                  })}
                </div>
              </div>
            )}

            {/* Product Grid */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 product-grid-section">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Products</h3>
              </div>
              <ProductGrid
                products={sortedProducts.slice(0, displayedProducts)}
                loading={loading}
                onCompare={handleCompare}
                onQuickView={handleQuickView}
                compareList={compareList}
                viewMode={viewMode}
              />
            </div>

            {/* Load More */}
            {!loading && sortedProducts.length > displayedProducts && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ChevronDown"
                  iconPosition="right"
                  onClick={handleLoadMore}
                  className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-white border-slate-600 hover:from-slate-800 hover:to-slate-900"
                >
                  Load More Products
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Category Mega Menu */}
      <CategoryMegaMenu
        isOpen={showCategoryMenu}
        onClose={() => setShowCategoryMenu(false)}
      />

      {/* Comparison Bar */}
      <ComparisonBar
        compareList={compareList}
        onRemove={handleRemoveFromCompare}
        onCompare={() => console.log('Compare products:', compareList)}
        onClear={() => setCompareList([])}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        isOpen={showQuickView}
        onClose={() => setShowQuickView(false)}
        onAddToCart={handleAddToCart}
        onCompare={handleCompare}
      />

      {/* Footer Spacer for Comparison Bar */}
      {compareList.length > 0 && <div className="h-32" />}
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ProductCatalog;