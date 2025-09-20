import React, { useState, useEffect, useMemo, useCallback } from 'react';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { Footer } from '../../components/ui/Footer';

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

  const handleFilterChange = useCallback((filterType, value) => {
    if (filterType === 'clear') {
      setFilters({});
    } else {
      setFilters(prev => ({
        ...prev,
        [filterType]: value
      }));
    }
  }, []);

  const handleSearch = useCallback((query) => {
    setSearchQuery(query);
    // Scroll to products section
    setTimeout(() => {
      const productsSection = document.querySelector('.product-grid-section');
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  }, []);

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

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return product.name.toLowerCase().includes(query) ||
               product.brand.toLowerCase().includes(query);
      }
      return true;
    });
  }, [products, searchQuery]);

  // Apply sorting logic
  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
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
        case 'discount': {
          const discountA = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) * 100 : 0;
          const discountB = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) * 100 : 0;
          return discountB - discountA;
        }
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
  }, [filteredProducts, sortBy, searchQuery]);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Main Container - Like the reference */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        {/* White Container - Like the reference */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
          {/* Page Title */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Products</h1>
          </div>

          {/* Category Filters - Like the reference */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              <button className="px-4 py-2 bg-gray-800 text-white text-sm font-medium rounded-lg">
                All Products
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50">
                Most Purchased
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50">
                Switches
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50">
                Circuit Breakers
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50">
                Smart Devices
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50">
                Lighting
              </button>
              <button className="px-4 py-2 bg-white text-gray-600 text-sm font-medium rounded-lg border border-gray-200 hover:bg-gray-50">
                Cables
              </button>
            </div>
          </div>

          {/* Search and Add Product Section */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
            <div className="flex-1 max-w-md">
              <SearchBar
                onSearch={handleSearch}
                onSuggestionSelect={handleSuggestionSelect}
                products={mockProducts}
              />
            </div>
            <Button
              variant="outline"
              iconName="Plus"
              iconPosition="left"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 whitespace-nowrap"
            >
              Add New Product
            </Button>
          </div>

        {/* Sorting Controls */}
        <div className="mb-6">
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

        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-80 flex-shrink-0">
            <div className="sticky top-6">
              <FilterSidebar
                isOpen={showFilters}
                onClose={() => setShowFilters(false)}
                filters={filters}
                onFilterChange={handleFilterChange}
              />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">

            {/* Active Filters */}
            {Object.keys(filters).length > 0 && (
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-gray-900 text-sm">Active Filters</h3>
                  <button
                    onClick={() => handleFilterChange('clear', null)}
                    className="text-gray-500 hover:text-gray-700 text-sm font-medium transition-colors"
                  >
                    Clear All
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(filters).map(([key, values]) => {
                    if (Array.isArray(values)) {
                      return values.map((value, index) => (
                        <span
                          key={`${key}-${index}`}
                          className="inline-flex items-center space-x-2 px-3 py-1.5 bg-white border border-gray-300 text-gray-700 text-sm rounded-md hover:bg-gray-50 transition-colors"
                        >
                          <span>{value}</span>
                          <button
                            onClick={() => {
                              const newValues = values.filter(v => v !== value);
                              handleFilterChange(key, newValues.length > 0 ? newValues : []);
                            }}
                            className="hover:bg-gray-200 rounded-full p-0.5 transition-colors"
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

          {/* Product Grid - Like the reference */}
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
          <div className="text-center mt-8">
            <Button
              variant="default"
              size="lg"
              iconName="ChevronDown"
              iconPosition="right"
              onClick={handleLoadMore}
              className="bg-gray-800 hover:bg-gray-900 text-white font-medium py-3 px-8 rounded-lg transition-colors"
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