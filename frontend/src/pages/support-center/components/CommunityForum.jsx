import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const CommunityForum = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('discussions');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Topics', icon: 'Grid3x3', count: 234, color: 'from-[#8B5CF6] to-[#A78BFA]' },
    { id: 'installation', name: 'Installation', icon: 'Wrench', count: 67, color: 'from-[#ff0c0e] to-[#e00b0c]' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: 'AlertTriangle', count: 89, color: 'from-[#F59E0B] to-[#FBBF24]' },
    { id: 'products', name: 'Products', icon: 'Package', count: 45, color: 'from-[#3B82F6] to-[#60A5FA]' },
    { id: 'safety', name: 'Safety', icon: 'Shield', count: 33, color: 'from-[#EF4444] to-[#F87171]' }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for MCB installation in commercial buildings',
      content: 'I\'m working on a large commercial project and need advice on MCB selection and installation. What are the key considerations for load calculations and safety compliance?',
      category: 'installation',
      author: {
        name: 'Rajesh Kumar',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        verified: true,
        reputation: 1250,
        role: 'Senior Electrician'
      },
      tags: ['MCB', 'Commercial', 'Installation', 'Safety'],
      lastActivity: '2 hours ago',
      stats: {
        replies: 23,
        views: 1456,
        likes: 67,
        bookmarks: 34
      }
    },
    {
      id: 2,
      title: 'ELCB tripping issue - need help troubleshooting',
      content: 'My ELCB keeps tripping randomly. I\'ve checked all appliances and wiring but can\'t find the issue. Has anyone experienced this before?',
      category: 'troubleshooting',
      author: {
        name: 'Priya Sharma',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=40&h=40&fit=crop&crop=face',
        verified: true,
        reputation: 890,
        role: 'Electrical Engineer'
      },
      tags: ['ELCB', 'Troubleshooting', 'Ground Fault'],
      lastActivity: '1 day ago',
      stats: {
        replies: 18,
        views: 892,
        likes: 45,
        bookmarks: 23
      }
    },
    {
      id: 3,
      title: 'Promac MCB vs competitors - performance comparison',
      content: 'I\'m considering upgrading our electrical panel and want to know how Promac MCBs compare to other brands in terms of reliability and performance.',
      category: 'products',
      author: {
        name: 'Amit Patel',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        verified: false,
        reputation: 567,
        role: 'Project Manager'
      },
      tags: ['MCB', 'Comparison', 'Performance', 'Reliability'],
      lastActivity: '3 days ago',
      stats: {
        replies: 31,
        views: 1234,
        likes: 89,
        bookmarks: 56
      }
    },
    {
      id: 4,
      title: 'Safety protocols for high-voltage industrial work',
      content: 'Looking for comprehensive safety guidelines for working with high-voltage systems in industrial settings. What PPE and procedures do you recommend?',
      category: 'safety',
      author: {
        name: 'Deepak Singh',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
        verified: true,
        reputation: 2100,
        role: 'Safety Officer'
      },
      tags: ['Safety', 'High Voltage', 'Industrial', 'PPE'],
      lastActivity: '4 days ago',
      stats: {
        replies: 42,
        views: 1876,
        likes: 123,
        bookmarks: 78
      }
    },
    {
      id: 5,
      title: 'Load calculation for residential electrical panel upgrade',
      content: 'Planning to upgrade my home electrical panel from 63A to 100A. How do I calculate the total load and ensure proper sizing?',
      category: 'installation',
      author: {
        name: 'Meera Iyer',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
        verified: false,
        reputation: 234,
        role: 'Homeowner'
      },
      isPinned: false,
      isSolved: false,
      tags: ['Load Calculation', 'Residential', 'Panel Upgrade', 'Safety'],
      lastActivity: '5 days ago',
      stats: {
        replies: 15,
        views: 678,
        likes: 34,
        bookmarks: 19
      }
    },
    {
      id: 6,
      title: 'Warranty claim process - step by step guide',
      content: 'I need to file a warranty claim for a defective MCB. Can someone walk me through the process and what documents I need?',
      category: 'troubleshooting',
      author: {
        name: 'Vikram Reddy',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        verified: true,
        reputation: 756,
        role: 'Contractor'
      },
      isPinned: false,
      isSolved: true,
      tags: ['Warranty', 'Claims', 'Process', 'Documentation'],
      lastActivity: '1 week ago',
      stats: {
        replies: 28,
        views: 945,
        likes: 67,
        bookmarks: 41
      }
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => 
    selectedCategory === 'all' || discussion.category === selectedCategory
  );

  const getCategoryColor = (categoryId) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-[#6B7280] to-[#9CA3AF]';
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
            Premium Community Experience
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Connect with{' '}
            <span className="text-[#ff0c0e]">
              Electrical Professionals
            </span>
          </h2>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join our community of verified contractors, engineers, and electrical professionals to share knowledge and get expert advice
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          {/* Premium Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
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
                    placeholder="Search discussions, topics, or ask a question..."
                    className="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-3 text-base focus:outline-none font-medium"
                  />

                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
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

          {/* Tab Navigation */}
          <div className="flex justify-center">
            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl border border-white/20 p-2 shadow-lg shadow-black/20">
              {[
                { id: 'discussions', name: 'Discussions', icon: 'MessageSquare' },
                { id: 'trending', name: 'Trending', icon: 'TrendingUp' },
                { id: 'solved', name: 'Solved', icon: 'CheckCircle' },
                { id: 'myposts', name: 'My Posts', icon: 'User' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-xl transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-[#ff0c0e] text-white shadow-lg'
                      : 'text-white hover:text-white hover:bg-white/10'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Icon name={tab.icon} size={18} />
                    <span className="font-medium">{tab.name}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Discussions Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredDiscussions.map((discussion, index) => (
            <div
              key={discussion.id}
              className="group relative bg-white/8 backdrop-blur-2xl rounded-3xl border border-white/25 overflow-hidden hover:border-[#ff0c0e]/50 hover:shadow-2xl hover:shadow-[#ff0c0e]/20 transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Enhanced Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/15 via-white/8 to-white/5"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10"></div>
              
              {/* Subtle Brand Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ff0c0e]/8 via-transparent to-[#ff0c0e]/8"></div>
              
              <div className="relative z-10 p-8 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4 flex-1 min-w-0">
                    <div className="w-14 h-14 rounded-full border-2 border-white/30 overflow-hidden bg-white/10 flex items-center justify-center flex-shrink-0">
                      <img
                        src={discussion.author.avatar}
                        alt={discussion.author.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center text-white font-bold text-base bg-[#ff0c0e]">
                        {discussion.author.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="mb-3">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#ff0c0e] transition-colors duration-300 leading-tight line-clamp-2">
                          {discussion.title}
                        </h3>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <span className="flex items-center text-gray-200 whitespace-nowrap">
                          <Icon name="User" size={16} className="mr-2 text-gray-400" />
                          {discussion.author.name}
                        </span>
                        
                        {discussion.author.verified && (
                          <span className="flex items-center text-[#ff0c0e] whitespace-nowrap font-medium">
                            <Icon name="CheckCircle" size={16} className="mr-2" />
                            Verified
                          </span>
                        )}
                        
                        <span className="flex items-center text-gray-200 whitespace-nowrap">
                          <Icon name="Star" size={16} className="mr-2 text-gray-400" />
                          {discussion.author.reputation} reputation
                        </span>
                        
                        <span className="flex items-center text-gray-200 whitespace-nowrap">
                          <Icon name="Clock" size={16} className="mr-2 text-gray-400" />
                          {discussion.lastActivity}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`ml-4 px-5 py-2.5 bg-gradient-to-r ${getCategoryColor(discussion.category)} text-white text-sm font-bold rounded-full shadow-xl backdrop-blur-sm border border-white/30 flex-shrink-0`}>
                    {categories.find(cat => cat.id === discussion.category)?.name}
                  </div>
                </div>
                
                {/* Content Preview */}
                <div className="flex-1 mb-4">
                  <p className="text-gray-200 leading-relaxed line-clamp-2 text-base">
                    {discussion.content}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-3">
                  {discussion.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/15 backdrop-blur-sm text-white text-sm font-medium rounded-full border border-white/25 hover:bg-white/25 hover:border-[#ff0c0e]/50 transition-all duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                

              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredDiscussions.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-[#1F2937] rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageSquare" size={48} color="#6B7280" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No discussions found</h3>
            <p className="text-gray-300">Try adjusting your search terms or category filter</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="relative bg-white/5 backdrop-blur-3xl rounded-3xl border border-white/20 p-12 shadow-2xl shadow-black/40 overflow-hidden group">
            {/* Glossy Glassmorphism Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/2 opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
            
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#ff0c0e]/5 via-transparent to-[#ff0c0e]/5 opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            {/* Content */}
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to join the conversation?
              </h3>
              <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                Start a new discussion, share your expertise, or connect with other electrical professionals in our community
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="px-8 py-4 bg-gradient-to-r from-[#ff0c0e] to-[#e00b0c] text-white font-semibold rounded-xl hover:from-[#e00b0c] hover:to-[#ff0c0e] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#ff0c0e]/25 backdrop-blur-sm">
                  <Icon name="Plus" size={20} className="mr-2 inline" />
                  Start New Discussion
                </button>
                <button className="px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105 shadow-lg shadow-white/15">
                  <Icon name="Users" size={20} className="mr-2 inline" />
                  Browse Community
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;