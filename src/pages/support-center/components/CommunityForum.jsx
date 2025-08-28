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
    { id: 'installation', name: 'Installation', icon: 'Wrench', count: 67, color: 'from-[#10B981] to-[#34D399]' },
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
      isPinned: true,
      isSolved: false,
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
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
        verified: true,
        reputation: 890,
        role: 'Electrical Engineer'
      },
      isPinned: false,
      isSolved: true,
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
      isPinned: false,
      isSolved: false,
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
      isPinned: true,
      isSolved: false,
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
    <div className="bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] min-h-screen py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] to-[#111827]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#10B981]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full text-white text-sm font-semibold mb-6">
            <Icon name="Users" size={16} className="mr-2" />
            Community Forum
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Connect with{' '}
            <span className="bg-gradient-to-r from-[#10B981] to-[#34D399] bg-clip-text text-transparent">
              Electrical Professionals
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Join our community of verified contractors, engineers, and electrical professionals to share knowledge and get expert advice
          </p>
        </div>

        {/* Search and Filters */}
        <div className={`mb-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-[#1F2937]/80 backdrop-blur-xl rounded-2xl border border-[#374151] p-2">
                <div className="flex items-center">
                  <Icon name="Search" size={24} color="#10B981" className="ml-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search discussions, topics, or ask a question..."
                    className="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-4 text-lg focus:outline-none"
                  />
                  <div className="mr-4 text-sm text-gray-300">
                    {filteredDiscussions.length} discussions found
                  </div>
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
                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-xl scale-105'
                    : 'bg-[#1F2937] text-gray-300 hover:bg-[#374151] hover:text-white'
                } border border-[#374151]`}
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
            <div className="bg-[#1F2937] rounded-2xl border border-[#374151] p-2">
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
                      ? 'bg-gradient-to-r from-[#10B981] to-[#34D399] text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-[#374151]'
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
              className="group bg-[#1F2937] rounded-3xl border border-[#374151] overflow-hidden hover:border-[#10B981]/50 hover:shadow-xl hover:shadow-[#10B981]/10 transition-all duration-500 hover:scale-[1.02]"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start space-x-4">
                    <Image
                      src={discussion.author.avatar}
                      alt={discussion.author.name}
                      className="w-12 h-12 rounded-full border-2 border-[#374151]"
                    />
                    
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#10B981] transition-colors duration-300">
                          {discussion.title}
                        </h3>
                        
                        {discussion.isPinned && (
                          <span className="px-2 py-1 bg-gradient-to-r from-[#F59E0B] to-[#FBBF24] text-white text-xs font-semibold rounded-full">
                            Pinned
                          </span>
                        )}
                        
                        {discussion.isSolved && (
                          <span className="px-2 py-1 bg-gradient-to-r from-[#10B981] to-[#34D399] text-white text-xs font-semibold rounded-full">
                            Solved
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <Icon name="User" size={14} className="mr-1" />
                          {discussion.author.name}
                        </span>
                        
                        {discussion.author.verified && (
                          <span className="flex items-center text-[#10B981]">
                            <Icon name="CheckCircle" size={14} className="mr-1" />
                            Verified
                          </span>
                        )}
                        
                        <span className="flex items-center">
                          <Icon name="Star" size={14} className="mr-1" />
                          {discussion.author.reputation} reputation
                        </span>
                        
                        <span className="flex items-center">
                          <Icon name="Clock" size={14} className="mr-1" />
                          {discussion.lastActivity}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(discussion.category)} text-white text-sm font-semibold rounded-full`}>
                    {categories.find(cat => cat.id === discussion.category)?.name}
                  </div>
                </div>
                
                {/* Content Preview */}
                <p className="text-gray-300 mb-4 leading-relaxed line-clamp-2">
                  {discussion.content}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {discussion.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#374151] text-gray-300 text-xs rounded-full border border-[#4B5563] hover:bg-[#4B5563] transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Stats and Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Icon name="MessageSquare" size={16} className="mr-2" />
                      {discussion.stats.replies} replies
                    </span>
                    <span className="flex items-center">
                      <Icon name="Eye" size={16} className="mr-2" />
                      {discussion.stats.views.toLocaleString()} views
                    </span>
                    <span className="flex items-center">
                      <Icon name="Heart" size={16} className="mr-2" />
                      {discussion.stats.likes} likes
                    </span>
                    <span className="flex items-center">
                      <Icon name="Bookmark" size={16} className="mr-2" />
                      {discussion.stats.bookmarks} bookmarks
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <button className="px-4 py-2 bg-[#374151] text-gray-300 rounded-xl hover:bg-[#4B5563] hover:text-white transition-all duration-200">
                      <Icon name="Heart" size={16} className="mr-2" />
                      Like
                    </button>
                    <button className="px-4 py-2 bg-[#374151] text-gray-300 rounded-xl hover:bg-[#4B5563] hover:text-white transition-all duration-200">
                      <Icon name="MessageSquare" size={16} className="mr-2" />
                      Reply
                    </button>
                    <button className="px-4 py-2 bg-[#374151] text-gray-300 rounded-xl hover:bg-[#4B5563] hover:text-white transition-all duration-200">
                      <Icon name="Bookmark" size={16} className="mr-2" />
                      Bookmark
                    </button>
                  </div>
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
          <div className="bg-gradient-to-r from-[#1F2937] to-[#111827] rounded-3xl border border-[#374151] p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to join the conversation?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Start a new discussion, share your expertise, or connect with other electrical professionals in our community
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#10B981] to-[#34D399] text-white font-semibold rounded-xl hover:from-[#34D399] hover:to-[#10B981] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#10B981]/25">
                <Icon name="Plus" size={20} className="mr-2 inline" />
                Start New Discussion
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-semibold rounded-xl hover:from-[#A78BFA] hover:to-[#8B5CF6] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8B5CF6]/25">
                <Icon name="Users" size={20} className="mr-2 inline" />
                Browse Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;