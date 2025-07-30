import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

// Import components
import CategoryMegaMenu from './components/CategoryMegaMenu';
import FilterSidebar from './components/FilterSidebar';
import SearchBar from './components/SearchBar';
import SortingControls from './components/SortingControls';
import ProductGrid from './components/ProductGrid';
import ComparisonBar from './components/ComparisonBar';
import QuickViewModal from './components/QuickViewModal';

const ProductCatalog = () => {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState('relevance');
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [compareList, setCompareList] = useState([]);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [showQuickView, setShowQuickView] = useState(false);

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
      keySpecs: [
        { label: 'Current Rating', value: '16A' },
        { label: 'Socket Type', value: '3-Pin' },
        { label: 'Material', value: 'Polycarbonate' },
        { label: 'Finish', value: 'Glossy White' }
      ],
      bulkPricing: true,
      fastDelivery: true,
      warranty: '2 Years'
    },
    {
      id: 5,
      name: "Havells LED Panel Light 18W",
      brand: "Havells",
      price: 890,
      originalPrice: 1050,
      image: "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=400&h=400&fit=crop",
      rating: 4.6,
      reviewCount: 234,
      stock: 156,
      isNew: false,
      isBestSeller: true,
      certifications: ['BIS', 'Energy Star'],
      keySpecs: [
        { label: 'Wattage', value: '18W' },
        { label: 'Lumens', value: '1440 lm' },
        { label: 'Color Temperature', value: '6500K' },
        { label: 'Size', value: '300x300mm' }
      ],
      bulkPricing: true,
      fastDelivery: true,
      warranty: '2 Years'
    },
    {
      id: 6,
      name: "Anchor Roma Classic Switch 6A",
      brand: "Anchor by Panasonic",
      price: 125,
      originalPrice: 145,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
      rating: 4.1,
      reviewCount: 89,
      stock: 234,
      isNew: false,
      isBestSeller: false,
      certifications: ['BIS'],
      keySpecs: [
        { label: 'Current Rating', value: '6A' },
        { label: 'Voltage', value: '230V AC' },
        { label: 'Material', value: 'Polycarbonate' },
        { label: 'Type', value: '1-Way Switch' }
      ],
      bulkPricing: true,
      fastDelivery: false,
      warranty: '1 Year'
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
      name: "Siemens Motor Starter 7.5HP",
      brand: "Siemens",
      price: 8950,
      originalPrice: 9800,
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=400&fit=crop",
      rating: 4.9,
      reviewCount: 23,
      stock: 8,
      isNew: false,
      isBestSeller: true,
      certifications: ['BIS', 'CE', 'ISO'],
      keySpecs: [
        { label: 'Motor Rating', value: '7.5HP' },
        { label: 'Voltage', value: '415V AC' },
        { label: 'Protection', value: 'Overload' },
        { label: 'Enclosure', value: 'IP65' }
      ],
      bulkPricing: true,
      fastDelivery: false,
      warranty: '2 Years'
    }
  ];

  useEffect(() => {
    // Simulate loading
    setLoading(true);
    setTimeout(() => {
      setProducts(mockProducts);
      setLoading(false);
    }, 1000);
  }, []);

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
    // Implement search logic here
  };

  const handleSuggestionSelect = (suggestion) => {
    setSearchQuery(suggestion.text);
    // Implement suggestion selection logic here
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
    setQuickViewProduct(product);
    setShowQuickView(true);
  };

  const handleAddToCart = (productData) => {
    console.log('Adding to cart:', productData);
    // Implement add to cart logic here
  };

  const filteredProducts = products.filter(product => {
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      return product.name.toLowerCase().includes(query) ||
             product.brand.toLowerCase().includes(query);
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-brand-navy to-action-blue text-white pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Electrical Product Catalog
            </h1>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Discover premium electrical components with BIS certification, competitive pricing, and expert support
            </p>
          </div>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <SearchBar
              onSearch={handleSearch}
              onSuggestionSelect={handleSuggestionSelect}
            />
          </div>

          {/* Quick Category Access */}
          <div className="flex justify-center">
            <Button
              variant="outline"
              onClick={() => setShowCategoryMenu(true)}
              iconName="Grid3X3"
              iconPosition="left"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
            >
              Browse Categories
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <FilterSidebar
            isOpen={showFilters}
            onClose={() => setShowFilters(false)}
            filters={filters}
            onFilterChange={handleFilterChange}
          />

          {/* Main Content */}
          <div className="flex-1">
            {/* Sorting Controls */}
            <SortingControls
              sortBy={sortBy}
              onSortChange={setSortBy}
              viewMode={viewMode}
              onViewModeChange={setViewMode}
              resultsCount={filteredProducts.length}
              onFilterToggle={() => setShowFilters(true)}
            />

            {/* Active Filters */}
            {Object.keys(filters).length > 0 && (
              <div className="bg-white p-4 mb-6 rounded-lg border border-gray-200">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-text-primary">Active Filters</h3>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => handleFilterChange('clear', null)}
                    className="text-brand-orange hover:text-brand-orange"
                  >
                    Clear All
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {Object.entries(filters).map(([key, values]) => {
                    if (Array.isArray(values)) {
                      return values.map((value, index) => (
                        <span
                          key={`${key}-${index}`}
                          className="inline-flex items-center space-x-2 px-3 py-1 bg-brand-navy text-white text-sm rounded-full"
                        >
                          <span>{value}</span>
                          <button
                            onClick={() => {
                              const newValues = values.filter(v => v !== value);
                              handleFilterChange(key, newValues.length > 0 ? newValues : []);
                            }}
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
            <ProductGrid
              products={filteredProducts}
              loading={loading}
              onCompare={handleCompare}
              onQuickView={handleQuickView}
              compareList={compareList}
              viewMode={viewMode}
            />

            {/* Load More */}
            {!loading && filteredProducts.length > 0 && (
              <div className="text-center mt-12">
                <Button
                  variant="outline"
                  size="lg"
                  iconName="ChevronDown"
                  iconPosition="right"
                  className="text-brand-navy border-brand-navy hover:bg-brand-navy hover:text-white"
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
    </div>
  );
};

export default ProductCatalog;