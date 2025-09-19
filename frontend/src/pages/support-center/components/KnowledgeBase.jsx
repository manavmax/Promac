import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const KnowledgeBase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      lastUpdated: '2025-01-15',
      difficulty: 'Beginner',
      author: 'Electrical Engineering Team'
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
      lastUpdated: '2025-01-14',
      difficulty: 'Intermediate',
      author: 'Technical Support Team'
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
      lastUpdated: '2025-01-13',
      difficulty: 'Advanced',
      author: 'Senior Electrical Engineers'
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
      lastUpdated: '2025-01-12',
      difficulty: 'Expert',
      author: 'Safety Compliance Team'
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
      lastUpdated: '2025-01-11',
      difficulty: 'Intermediate',
      author: 'Regulatory Affairs Team'
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
      lastUpdated: '2025-01-10',
      difficulty: 'Beginner',
      author: 'Maintenance Team'
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-[#3B82F6]';
      case 'Intermediate': return 'bg-[#1D4ED8]';
      case 'Advanced': return 'bg-[#7C3AED]';
      case 'Expert': return 'bg-[#DC2626]';
      default: return 'bg-[#64748B]';
    }
  };

  return (
    <div className="py-24 relative overflow-hidden min-h-screen">
      {/* Premium Black Background */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full text-white text-sm font-semibold mb-6 shadow-lg shadow-black/20">
            <Icon name="Star" size={16} className="mr-2 text-[#ff0c0e]" />
            Premium Knowledge Experience
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Expert{' '}
            <span className="text-[#ff0c0e]">
              Knowledge
            </span>{' '}
            at Your Fingertips
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive library of technical guides, installation manuals, and troubleshooting resources
          </p>
          
          {/* Premium Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <div className="relative bg-white/5 backdrop-blur-2xl rounded-3xl p-3 shadow-2xl shadow-black/20">
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-12 h-12 ml-2">
                    <Icon name="Search" size={24} color="white" />
                  </div>
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search articles, guides, or technical specifications..."
                    className="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-3 text-base focus:outline-none font-medium"
                  />
                  <div className="mr-4 text-sm text-gray-300">
                    {filteredArticles.length} articles found
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-6 py-4 rounded-2xl transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-[#ff0c0e] text-white shadow-xl scale-105'
                    : 'bg-white/5 backdrop-blur-xl text-white hover:text-white hover:bg-white/10 border border-white/20 hover:border-[#ff0c0e]/50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <Icon name={category.icon} size={20} />
                  <span className="font-semibold">{category.name}</span>
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs font-medium">
                    {category.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <article
              key={article.id}
              className="group relative bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/20 overflow-hidden hover:border-[#ff0c0e]/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff0c0e]/10 shadow-lg shadow-black/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Article Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-white/20">
                    {article.category}
                  </span>
                </div>
                
                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 ${getDifficultyColor(article.difficulty)} text-white text-xs font-semibold rounded-full`}>
                    {article.difficulty}
                  </span>
                </div>
              </div>

              {/* Article Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#ff0c0e] transition-colors duration-300 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {article.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-white/10 backdrop-blur-sm text-gray-300 text-xs rounded-full border border-white/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Article Meta */}
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Icon name="Clock" size={14} className="mr-1" />
                      {article.readTime}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Eye" size={14} className="mr-1" />
                      {article.views.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon name="Star" size={14} className="text-[#ff0c0e] mr-1" />
                    {article.rating}
                  </div>
                </div>
                
                {/* Author and Date */}
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span className="truncate">{article.author}</span>
                  <span>{new Date(article.lastUpdated).toLocaleDateString()}</span>
                </div>
                
                {/* Read More Button */}
                <button className="w-full mt-4 py-3 bg-[#ff0c0e] hover:bg-[#e00b0c] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#ff0c0e]/25">
                  Read Article
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-2xl rounded-full flex items-center justify-center mx-auto mb-6 border border-white/20">
              <Icon name="Search" size={48} color="#64748B" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
            <p className="text-gray-300">Try adjusting your search terms or category filter</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <div className="relative bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/20 p-12 shadow-2xl shadow-black/40 overflow-hidden group">
            {/* Glossy Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/2 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff0c0e]/5 via-transparent to-[#ff0c0e]/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Can't find what you're looking for?
              </h3>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                Our technical experts are here to help with any specific questions or technical issues you may have
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-[#ff0c0e] hover:bg-[#e00b0c] text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff0c0e]/25 backdrop-blur-sm">
                  <Icon name="MessageCircle" size={20} className="mr-2 inline" />
                  Contact Support
                </button>
                <button className="px-8 py-4 bg-white/10 backdrop-blur-2xl border border-white/25 text-white font-semibold rounded-xl hover:border-[#ff0c0e] hover:bg-white/20 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/15">
                  <Icon name="Video" size={20} className="mr-2 inline" />
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;