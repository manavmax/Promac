import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ onSearch, onSuggestionSelect, products = [] }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Generate suggestions from actual product data
  const generateSuggestions = (searchQuery) => {
    if (!searchQuery || searchQuery.length < 1) return [];

    const query = searchQuery.toLowerCase();
    const results = [];

    // Search in product names
    products.forEach(product => {
      const nameMatch = product.name.toLowerCase().includes(query);
      const brandMatch = product.brand.toLowerCase().includes(query);
      const categoryMatch = product.certifications?.some(cert => cert.toLowerCase().includes(query));
      
      if (nameMatch || brandMatch || categoryMatch) {
        results.push({
          id: `product-${product.id}`,
          text: product.name,
          category: product.brand,
          type: 'product',
          product: product,
          matchType: nameMatch ? 'name' : brandMatch ? 'brand' : 'category'
        });
      }
    });

    // Add brand suggestions
    const uniqueBrands = [...new Set(products.map(p => p.brand))];
    uniqueBrands.forEach(brand => {
      if (brand.toLowerCase().includes(query)) {
        results.push({
          id: `brand-${brand}`,
          text: brand,
          category: 'Brand',
          type: 'brand',
          matchType: 'brand'
        });
      }
    });

    // Add category suggestions
    const categories = ['Switches', 'Circuit Breakers', 'Smart Devices', 'Lighting', 'Protection', 'Motor Controls'];
    categories.forEach(category => {
      if (category.toLowerCase().includes(query)) {
        results.push({
          id: `category-${category}`,
          text: category,
          category: 'Category',
          type: 'category',
          matchType: 'category'
        });
      }
    });

    // Add common search terms
    const commonTerms = [
      { text: 'Modular Switches', category: 'Switches' },
      { text: 'MCB Circuit Breakers', category: 'Protection' },
      { text: 'Smart WiFi Switches', category: 'Smart Devices' },
      { text: 'LED Panel Lights', category: 'Lighting' },
      { text: 'Socket Outlets', category: 'Switches' },
      { text: 'RCCB Protection', category: 'Protection' },
      { text: 'Industrial Switches', category: 'Switches' },
      { text: 'Home Automation', category: 'Smart Devices' }
    ];

    commonTerms.forEach(term => {
      if (term.text.toLowerCase().includes(query) || term.category.toLowerCase().includes(query)) {
        results.push({
          id: `term-${term.text}`,
          text: term.text,
          category: term.category,
          type: 'search_term',
          matchType: 'term'
        });
      }
    });

    // Remove duplicates and sort by relevance
    const uniqueResults = results.filter((result, index, self) => 
      index === self.findIndex(r => r.text === result.text)
    );

    // Sort by relevance: exact matches first, then partial matches
    return uniqueResults
      .sort((a, b) => {
        // Exact matches first
        const aExact = a.text.toLowerCase() === query;
        const bExact = b.text.toLowerCase() === query;
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;

        // Then by match type priority
        const typePriority = { name: 1, brand: 2, category: 3, term: 4 };
        const aPriority = typePriority[a.matchType] || 5;
        const bPriority = typePriority[b.matchType] || 5;
        if (aPriority !== bPriority) return aPriority - bPriority;

        // Finally by alphabetical order
        return a.text.localeCompare(b.text);
      })
      .slice(0, 10); // Limit to 10 suggestions
  };

  const recentSearches = [
    'Modular Switches 16A',
    'Smart Home Automation',
    'Industrial MCB',
    'LED Panel Lights',
    'Schneider Electric',
    'Circuit Breakers'
  ];

  useEffect(() => {
    if (query.length >= 1) {
      const filtered = generateSuggestions(query);
      setSuggestions(filtered);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setSelectedIndex(-1);
  }, [query, products]);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < suggestions.length - 1 ? prev + 1 : prev
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => prev > 0 ? prev - 1 : -1);
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0) {
          handleSuggestionClick(suggestions[selectedIndex]);
        } else {
          handleSearch();
        }
        break;
      case 'Escape':
        setShowSuggestions(false);
        setSelectedIndex(-1);
        break;
    }
  };

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
      setShowSuggestions(false);
      // Save to recent searches
      const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]');
      const newRecent = [query.trim(), ...recent.filter(s => s !== query.trim())].slice(0, 5);
      localStorage.setItem('recentSearches', JSON.stringify(newRecent));
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.text);
    setShowSuggestions(false);
    onSuggestionSelect(suggestion);
    // Save to recent searches
    const recent = JSON.parse(localStorage.getItem('recentSearches') || '[]');
    const newRecent = [suggestion.text, ...recent.filter(s => s !== suggestion.text)].slice(0, 5);
    localStorage.setItem('recentSearches', JSON.stringify(newRecent));
  };

  const handleRecentSearchClick = (search) => {
    setQuery(search);
    onSearch(search);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setQuery('');
    setSuggestions([]);
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  // Get recent searches from localStorage
  const getRecentSearches = () => {
    try {
      return JSON.parse(localStorage.getItem('recentSearches') || '[]');
    } catch {
      return recentSearches;
    }
  };

  const getSuggestionIcon = (suggestion) => {
    switch (suggestion.type) {
      case 'brand':
        return 'Building2';
      case 'category':
        return 'Grid3X3';
      case 'search_term':
        return 'Search';
      case 'product':
      default:
        return 'Package';
    }
  };

  const getSuggestionColor = (suggestion) => {
    switch (suggestion.type) {
      case 'brand':
        return 'text-blue-600';
      case 'category':
        return 'text-green-600';
      case 'search_term':
        return 'text-purple-600';
      case 'product':
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Input
          ref={inputRef}
          type="search"
          placeholder="Search for electrical products, brands, or categories..."
          value={query}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 1 && setShowSuggestions(true)}
          className="pl-12 pr-20 h-12 text-base bg-white border-pink-300 !text-black focus:ring-pink-500 focus:border-pink-500 [&::placeholder]:!text-black"
        />
        
        {/* Search Icon */}
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
          <Icon name="Search" size={20} className="text-gray-400" />
        </div>

        {/* Action Buttons */}
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
          {query && (
            <button
              onClick={clearSearch}
              className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100 brand-transition"
            >
              <Icon name="X" size={16} />
            </button>
          )}
          <button
            onClick={handleSearch}
            className="p-1.5 text-white bg-brand-navy hover:bg-opacity-90 rounded-full brand-transition"
          >
            <Icon name="Search" size={20} />
          </button>
        </div>
      </div>

      {/* Suggestions Dropdown */}
      {showSuggestions && (
        <div 
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto"
        >
          {/* Recent Searches */}
          {query.length <= 1 && getRecentSearches().length > 0 && (
            <div className="p-3 border-b border-gray-100">
              <div className="text-xs font-medium text-gray-500 px-2 py-1 mb-2">Recent Searches</div>
              {getRecentSearches().map((search, index) => (
                <button
                  key={index}
                  onClick={() => handleRecentSearchClick(search)}
                  className="flex items-center space-x-3 w-full text-left p-2 rounded-lg hover:bg-gray-50 brand-transition"
                >
                  <Icon name="Clock" size={16} className="text-gray-400" />
                  <span className="text-sm">{search}</span>
                </button>
              ))}
            </div>
          )}

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="p-3">
              <div className="text-xs font-medium text-gray-500 px-2 py-1 mb-2">
                {query.length > 1 ? `Suggestions for "${query}"` : 'Popular Searches'}
              </div>
              {suggestions.map((suggestion, index) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`flex items-center justify-between w-full text-left p-3 rounded-lg brand-transition ${
                    selectedIndex === index ? 'bg-gradient-to-r from-slate-700 to-slate-800 text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={getSuggestionIcon(suggestion)} 
                      size={16} 
                      className={selectedIndex === index ? 'text-white' : getSuggestionColor(suggestion)}
                    />
                    <div>
                      <span className="text-sm font-medium">{suggestion.text}</span>
                      <p className={`text-xs ${
                        selectedIndex === index ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {suggestion.type === 'product' ? `${suggestion.category} • ${suggestion.matchType}` : suggestion.category}
                      </p>
                    </div>
                  </div>
                  <Icon 
                    name="ArrowUpRight" 
                    size={14} 
                    className={selectedIndex === index ? 'text-white' : 'text-gray-400'}
                  />
                </button>
              ))}
            </div>
          )}

          {/* No Results */}
          {query.length > 1 && suggestions.length === 0 && (
            <div className="p-6 text-center">
              <Icon name="Search" size={24} className="text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">No suggestions found for "{query}"</p>
              <p className="text-xs text-gray-400 mt-1">Try searching for brands, product types, or categories</p>
            </div>
          )}

          {/* Search Tips */}
          {query.length <= 1 && (
            <div className="p-3 border-t border-gray-100 bg-gray-50">
              <div className="text-xs font-medium text-gray-500 mb-2">Search Tips</div>
              <div className="text-xs text-gray-600 space-y-1">
                <p>• Search by brand name (e.g., "Schneider", "Siemens")</p>
                <p>• Search by product type (e.g., "switches", "breakers")</p>
                <p>• Search by specifications (e.g., "16A", "32A")</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;