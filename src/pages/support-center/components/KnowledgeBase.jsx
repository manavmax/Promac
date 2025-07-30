import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const KnowledgeBase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Topics', icon: 'Grid3x3', count: 156 },
    { id: 'installation', name: 'Installation Guides', icon: 'Wrench', count: 45 },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: 'AlertTriangle', count: 32 },
    { id: 'specifications', name: 'Technical Specs', icon: 'FileText', count: 28 },
    { id: 'safety', name: 'Safety Guidelines', icon: 'Shield', count: 24 },
    { id: 'compliance', name: 'Code Compliance', icon: 'CheckCircle', count: 18 },
    { id: 'maintenance', name: 'Maintenance', icon: 'Settings', count: 9 }
  ];

  const articles = [
    {
      id: 1,
      title: 'Complete Guide to MCB Installation in Indian Homes',
      category: 'installation',
      description: 'Step-by-step installation guide for Miniature Circuit Breakers following BIS standards and local electrical codes.',
      readTime: '8 min read',
      views: 2847,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop',
      tags: ['MCB', 'Installation', 'BIS Standards', 'Safety'],
      lastUpdated: '2025-01-15'
    },
    {
      id: 2,
      title: 'Troubleshooting Common ELCB Tripping Issues',
      category: 'troubleshooting',
      description: 'Identify and resolve frequent Earth Leakage Circuit Breaker problems in residential and commercial installations.',
      readTime: '6 min read',
      views: 1923,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
      tags: ['ELCB', 'Troubleshooting', 'Electrical Safety'],
      lastUpdated: '2025-01-12'
    },
    {
      id: 3,
      title: 'Understanding Load Calculations for Distribution Boards',
      category: 'specifications',
      description: 'Learn how to calculate electrical loads and select appropriate distribution board components for your projects.',
      readTime: '12 min read',
      views: 3156,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop',
      tags: ['Load Calculation', 'Distribution Board', 'Electrical Design'],
      lastUpdated: '2025-01-10'
    },
    {
      id: 4,
      title: 'Electrical Safety Protocols for Industrial Installations',
      category: 'safety',
      description: 'Essential safety guidelines and protocols for working with high-voltage industrial electrical systems.',
      readTime: '15 min read',
      views: 1654,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&h=200&fit=crop',
      tags: ['Industrial Safety', 'High Voltage', 'Safety Protocols'],
      lastUpdated: '2025-01-08'
    },
    {
      id: 5,
      title: 'State-wise Electrical Code Compliance in India',
      category: 'compliance',
      description: 'Comprehensive guide to electrical code requirements across different Indian states and union territories.',
      readTime: '10 min read',
      views: 2234,
      rating: 4.5,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
      tags: ['Code Compliance', 'Indian Standards', 'Regulations'],
      lastUpdated: '2025-01-05'
    },
    {
      id: 6,
      title: 'Preventive Maintenance Schedule for Electrical Panels',
      category: 'maintenance',
      description: 'Create an effective maintenance schedule to ensure optimal performance and longevity of electrical panels.',
      readTime: '7 min read',
      views: 1456,
      rating: 4.4,
      image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop',
      tags: ['Maintenance', 'Electrical Panels', 'Preventive Care'],
      lastUpdated: '2025-01-03'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Knowledge Base
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Comprehensive guides, tutorials, and technical documentation for all your electrical needs
        </p>
      </div>

      {/* Search */}
      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Icon name="Search" size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-text-secondary" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search articles, guides, and documentation..."
            className="w-full pl-12 pr-4 py-3 border border-promac-red-100 rounded-xl focus:outline-none focus:border-promac-red-600 bg-promac-red-50"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium brand-transition ${
              selectedCategory === category.id
                ? 'bg-promac-red-600 text-white shadow-primary'
                : 'bg-promac-red-50 text-promac-red-700 border border-promac-red-100 hover:bg-promac-red-100 hover:text-promac-red-900'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span>{category.name}</span>
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              selectedCategory === category.id
                ? 'bg-white/20 text-white' :'bg-gray-100 text-text-secondary'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => (
          <div
            key={article.id}
            className="group bg-promac-red-50 rounded-2xl shadow-lg hover:shadow-2xl brand-transition overflow-hidden border border-promac-red-100"
          >
            <div className="relative overflow-hidden">
              <Image
                src={article.image}
                alt={article.title}
                className="w-full h-48 object-cover group-hover:scale-105 brand-transition"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-brand-navy text-white text-xs font-medium px-2 py-1 rounded-full">
                  {categories.find(cat => cat.id === article.category)?.name}
                </span>
              </div>
              <div className="absolute top-4 right-4 flex items-center space-x-1 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1">
                <Icon name="Star" size={12} className="text-brand-amber fill-current" />
                <span className="text-xs font-medium text-text-primary">{article.rating}</span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-brand-navy brand-transition line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                {article.description}
              </p>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {article.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-promac-red-100 text-promac-red-700 px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between text-xs text-text-secondary">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Clock" size={12} />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={12} />
                    <span>{article.views.toLocaleString()}</span>
                  </div>
                </div>
                <span>Updated {new Date(article.lastUpdated).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-text-primary mb-2">No articles found</h3>
          <p className="text-text-secondary">Try adjusting your search terms or category filter</p>
        </div>
      )}
    </div>
  );
};

export default KnowledgeBase;