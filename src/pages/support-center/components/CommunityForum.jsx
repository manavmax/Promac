import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CommunityForum = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const forumCategories = [
    { id: 'all', name: 'All Discussions', count: 1247 },
    { id: 'installation', name: 'Installation Help', count: 342 },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 289 },
    { id: 'product-reviews', name: 'Product Reviews', count: 156 },
    { id: 'code-compliance', name: 'Code & Standards', count: 98 },
    { id: 'project-showcase', name: 'Project Showcase', count: 234 },
    { id: 'general', name: 'General Discussion', count: 128 }
  ];

  const discussions = [
    {
      id: 1,
      title: 'Best practices for MCB selection in residential projects?',
      category: 'installation',
      author: {
        name: 'Amit Sharma',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        badge: 'Verified Contractor',
        reputation: 2847
      },
      content: 'I\'m working on a 3BHK residential project and need guidance on selecting the right MCB ratings for different circuits. What are the standard practices you follow?',
      replies: 23,
      views: 1456,
      likes: 34,
      lastActivity: '2 hours ago',
      tags: ['MCB', 'Residential', 'Circuit Protection'],
      isPinned: true,
      hasAcceptedAnswer: true
    },
    {
      id: 2,
      title: 'ELCB keeps tripping in new installation - need help!',
      category: 'troubleshooting',
      author: {
        name: 'Priya Patel',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
        badge: 'DIY Enthusiast',
        reputation: 456
      },
      content: 'Just completed wiring for my home office extension. The ELCB trips every time I connect the computer and printer. All connections seem fine. Any ideas?',
      replies: 18,
      views: 892,
      likes: 12,
      lastActivity: '4 hours ago',
      tags: ['ELCB', 'Troubleshooting', 'Home Office'],
      isPinned: false,
      hasAcceptedAnswer: false
    },
    {
      id: 3,
      title: 'Review: Promac 32A MCB - Excellent build quality',
      category: 'product-reviews',
      author: {
        name: 'Rajesh Kumar',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
        badge: 'Expert Electrician',
        reputation: 5234
      },
      content: 'Been using Promac 32A MCBs for the past 6 months across multiple projects. Here\'s my detailed review of performance, durability, and value for money.',
      replies: 31,
      views: 2134,
      likes: 67,
      lastActivity: '6 hours ago',
      tags: ['Product Review', 'MCB', 'Quality'],
      isPinned: false,
      hasAcceptedAnswer: false
    },
    {
      id: 4,
      title: 'New BIS standards for distribution boards - what changed?',
      category: 'code-compliance',
      author: {
        name: 'Dr. Suresh Menon',
        avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
        badge: 'Technical Expert',
        reputation: 8765
      },
      content: 'The latest BIS standards have introduced some changes for distribution board installations. Let\'s discuss the key updates and their practical implications.',
      replies: 45,
      views: 3421,
      likes: 89,
      lastActivity: '1 day ago',
      tags: ['BIS Standards', 'Distribution Board', 'Compliance'],
      isPinned: true,
      hasAcceptedAnswer: true
    },
    {
      id: 5,
      title: 'Completed: 50-unit apartment complex electrical project',
      category: 'project-showcase',
      author: {
        name: 'Mumbai Electricals',
        avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
        badge: 'Contractor Firm',
        reputation: 3456
      },
      content: 'Just wrapped up the electrical installation for a 50-unit residential complex. Sharing some photos and lessons learned from this large-scale project.',
      replies: 28,
      views: 1876,
      likes: 52,
      lastActivity: '2 days ago',
      tags: ['Project Showcase', 'Residential', 'Large Scale'],
      isPinned: false,
      hasAcceptedAnswer: false
    }
  ];

  const filteredDiscussions = discussions.filter(discussion => 
    selectedCategory === 'all' || discussion.category === selectedCategory
  );

  const getBadgeColor = (badge) => {
    switch (badge) {
      case 'Verified Contractor': return 'bg-brand-green text-white';
      case 'Expert Electrician': return 'bg-brand-navy text-white';
      case 'Technical Expert': return 'bg-brand-amber text-brand-navy';
      case 'Contractor Firm': return 'bg-action-blue text-white';
      default: return 'bg-gray-100 text-text-secondary';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <div className="lg:w-80">
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Categories</h3>
            <div className="space-y-2">
              {forumCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`w-full flex items-center justify-between p-3 rounded-lg text-sm font-medium brand-transition ${
                    selectedCategory === category.id
                      ? 'bg-brand-navy text-white' :'text-text-primary hover:bg-gray-50'
                  }`}
                >
                  <span>{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20 text-white' :'bg-gray-100 text-text-secondary'
                  }`}>
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Community Stats</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Total Members</span>
                <span className="font-semibold text-text-primary">12,847</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Active Today</span>
                <span className="font-semibold text-brand-green">1,234</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Total Discussions</span>
                <span className="font-semibold text-text-primary">8,965</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-text-secondary">Solved Questions</span>
                <span className="font-semibold text-brand-amber">6,743</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-primary mb-4 sm:mb-0">
              Community Discussions
            </h2>
            <div className="flex items-center space-x-3">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-brand-navy"
              >
                <option value="recent">Most Recent</option>
                <option value="popular">Most Popular</option>
                <option value="replies">Most Replies</option>
                <option value="views">Most Views</option>
              </select>
              <Button
                variant="default"
                iconName="Plus"
                iconPosition="left"
                className="bg-brand-navy hover:bg-brand-navy/90"
              >
                New Discussion
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {filteredDiscussions.map((discussion) => (
              <div
                key={discussion.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl brand-transition p-6 border border-gray-100"
              >
                <div className="flex items-start space-x-4">
                  <Image
                    src={discussion.author.avatar}
                    alt={discussion.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center space-x-2">
                        {discussion.isPinned && (
                          <Icon name="Pin" size={16} className="text-brand-amber" />
                        )}
                        <h3 className="text-lg font-semibold text-text-primary hover:text-brand-navy brand-transition cursor-pointer">
                          {discussion.title}
                        </h3>
                        {discussion.hasAcceptedAnswer && (
                          <Icon name="CheckCircle" size={16} className="text-brand-green" />
                        )}
                      </div>
                      <span className="text-xs text-text-secondary whitespace-nowrap ml-4">
                        {discussion.lastActivity}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="font-medium text-text-primary">{discussion.author.name}</span>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${getBadgeColor(discussion.author.badge)}`}>
                        {discussion.author.badge}
                      </span>
                      <div className="flex items-center space-x-1 text-xs text-text-secondary">
                        <Icon name="Star" size={12} className="text-brand-amber" />
                        <span>{discussion.author.reputation.toLocaleString()}</span>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-4 line-clamp-2">
                      {discussion.content}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {discussion.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-text-secondary px-2 py-1 rounded-full hover:bg-brand-navy hover:text-white brand-transition cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6 text-sm text-text-secondary">
                        <div className="flex items-center space-x-1">
                          <Icon name="MessageCircle" size={16} />
                          <span>{discussion.replies} replies</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Eye" size={16} />
                          <span>{discussion.views.toLocaleString()} views</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Heart" size={16} />
                          <span>{discussion.likes} likes</span>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          iconName="Heart"
                          iconPosition="left"
                          className="text-text-secondary hover:text-red-500"
                        >
                          Like
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          iconName="MessageCircle"
                          iconPosition="left"
                          className="text-text-secondary hover:text-brand-navy"
                        >
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityForum;