import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Input from '../../../components/ui/Input';

const SearchBar = ({ onSearch, onSuggestionSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const inputRef = useRef(null);
  const suggestionsRef = useRef(null);

  // Mock suggestions data
  const mockSuggestions = [
    { id: 1, text: 'Modular Switches', category: 'Switches', type: 'product' },
    { id: 2, text: 'Circuit Breakers', category: 'Protection', type: 'product' },
    { id: 3, text: 'Smart Switches', category: 'Smart Devices', type: 'product' },
    { id: 4, text: 'LED Lights', category: 'Lighting', type: 'product' },
    { id: 5, text: 'MCB 32A', category: 'Circuit Breakers', type: 'product' },
    { id: 6, text: 'Socket Outlets', category: 'Switches', type: 'product' },
    { id: 7, text: 'Schneider Electric', category: 'Brand', type: 'brand' },
    { id: 8, text: 'Siemens', category: 'Brand', type: 'brand' },
    { id: 9, text: 'ABB', category: 'Brand', type: 'brand' },
    { id: 10, text: 'Motor Starters', category: 'Motor Controls', type: 'product' }
  ];

  const recentSearches = [
    'Modular Switches 16A',
    'Smart Home Automation',
    'Industrial MCB',
    'LED Panel Lights'
  ];

  useEffect(() => {
    if (query.length > 1) {
      const filtered = mockSuggestions.filter(item =>
        item.text.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filtered.slice(0, 8));
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
    setSelectedIndex(-1);
  }, [query]);

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
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion.text);
    setShowSuggestions(false);
    onSuggestionSelect(suggestion);
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
          onFocus={() => query.length > 1 && setShowSuggestions(true)}
          className="pl-12 pr-20 h-12 text-base"
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
            className="p-1.5 text-white bg-brand-navy hover:bg-opacity-90 rounded-lg brand-transition"
          >
            <Icon name="Search" size={16} />
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
          {query.length <= 1 && (
            <div className="p-4 border-b border-gray-100">
              <h4 className="text-sm font-medium text-text-secondary mb-3">Recent Searches</h4>
              <div className="space-y-2">
                {recentSearches.map((search, index) => (
                  <button
                    key={index}
                    onClick={() => handleRecentSearchClick(search)}
                    className="flex items-center space-x-3 w-full text-left p-2 rounded-lg hover:bg-gray-50 brand-transition"
                  >
                    <Icon name="Clock" size={16} className="text-gray-400" />
                    <span className="text-sm text-text-primary">{search}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <div className="p-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={suggestion.id}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className={`flex items-center justify-between w-full text-left p-3 rounded-lg brand-transition ${
                    selectedIndex === index ? 'bg-brand-navy text-white' : 'hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <Icon 
                      name={suggestion.type === 'brand' ? 'Building2' : 'Package'} 
                      size={16} 
                      className={selectedIndex === index ? 'text-white' : 'text-gray-400'}
                    />
                    <div>
                      <span className="text-sm font-medium">{suggestion.text}</span>
                      <p className={`text-xs ${
                        selectedIndex === index ? 'text-white/80' : 'text-text-secondary'
                      }`}>
                        in {suggestion.category}
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
              <p className="text-sm text-text-secondary">No suggestions found for "{query}"</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;