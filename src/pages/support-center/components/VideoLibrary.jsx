import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const VideoLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const videoCategories = [
    { id: 'all', name: 'All Videos', count: 89 },
    { id: 'installation', name: 'Installation Guides', count: 32 },
    { id: 'troubleshooting', name: 'Troubleshooting', count: 18 },
    { id: 'product-demo', name: 'Product Demos', count: 24 },
    { id: 'safety', name: 'Safety Training', count: 15 }
  ];

  const videos = [
    {
      id: 1,
      title: 'Complete MCB Installation Guide for Residential Projects',
      category: 'installation',
      duration: '12:45',
      views: 15420,
      likes: 892,
      thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=225&fit=crop',
      description: 'Learn the complete process of installing MCBs in residential distribution boards following BIS standards and safety protocols.',
      instructor: 'Rajesh Kumar',
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      level: 'Beginner',
      uploadDate: '2025-01-15',
      tags: ['MCB', 'Installation', 'Residential', 'BIS Standards']
    },
    {
      id: 2,
      title: 'ELCB Troubleshooting: Common Issues and Solutions',
      category: 'troubleshooting',
      duration: '8:32',
      views: 9876,
      likes: 543,
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=225&fit=crop',
      description: 'Identify and resolve the most common ELCB tripping issues with practical troubleshooting techniques.',
      instructor: 'Priya Patel',
      instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      level: 'Intermediate',
      uploadDate: '2025-01-12',
      tags: ['ELCB', 'Troubleshooting', 'Safety', 'Maintenance']
    },
    {
      id: 3,
      title: 'Promac Distribution Board Features and Benefits',
      category: 'product-demo',
      duration: '6:18',
      views: 7234,
      likes: 421,
      thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=225&fit=crop',
      description: 'Detailed demonstration of Promac distribution board features, specifications, and installation benefits.',
      instructor: 'Amit Sharma',
      instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      level: 'All Levels',
      uploadDate: '2025-01-10',
      tags: ['Distribution Board', 'Product Demo', 'Features']
    },
    {
      id: 4,
      title: 'Electrical Safety Protocols for Industrial Work',
      category: 'safety',
      duration: '18:24',
      views: 12567,
      likes: 756,
      thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=225&fit=crop',
      description: 'Comprehensive safety training for electrical work in industrial environments, covering PPE, lockout procedures, and emergency protocols.',
      instructor: 'Dr. Suresh Menon',
      instructorAvatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face',
      level: 'Advanced',
      uploadDate: '2025-01-08',
      tags: ['Safety', 'Industrial', 'Training', 'PPE']
    },
    {
      id: 5,
      title: 'Smart Home Electrical Panel Setup and Configuration',
      category: 'installation',
      duration: '14:56',
      views: 8901,
      likes: 634,
      thumbnail: 'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=225&fit=crop',
      description: 'Step-by-step guide to setting up electrical panels for smart home automation systems.',
      instructor: 'Neha Singh',
      instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      level: 'Intermediate',
      uploadDate: '2025-01-05',
      tags: ['Smart Home', 'Automation', 'Installation', 'Technology']
    },
    {
      id: 6,
      title: 'Load Calculation Methods for Commercial Buildings',
      category: 'installation',
      duration: '16:12',
      views: 6543,
      likes: 389,
      thumbnail: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=225&fit=crop',
      description: 'Learn professional methods for calculating electrical loads in commercial building projects.',
      instructor: 'Vikram Reddy',
      instructorAvatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face',
      level: 'Advanced',
      uploadDate: '2025-01-03',
      tags: ['Load Calculation', 'Commercial', 'Electrical Design']
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    const matchesSearch = video.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         video.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getLevelColor = (level) => {
    switch (level) {
      case 'Beginner': return 'bg-brand-green text-white';
      case 'Intermediate': return 'bg-brand-amber text-brand-navy';
      case 'Advanced': return 'bg-brand-navy text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Video Support Library
        </h2>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto">
          Learn from our experts with comprehensive video tutorials and product demonstrations
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
            placeholder="Search videos, tutorials, and guides..."
            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:border-brand-navy bg-white"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {videoCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium brand-transition ${
              selectedCategory === category.id
                ? 'bg-brand-navy text-white shadow-primary'
                : 'bg-white text-text-primary border border-gray-200 hover:border-brand-navy hover:text-brand-navy'
            }`}
          >
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

      {/* Videos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredVideos.map((video) => (
          <div
            key={video.id}
            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl brand-transition overflow-hidden border border-gray-100"
          >
            <div className="relative overflow-hidden">
              <Image
                src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover group-hover:scale-105 brand-transition"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 brand-transition">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Icon name="Play" size={24} className="text-brand-navy ml-1" />
                </div>
              </div>
              
              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-medium px-2 py-1 rounded">
                {video.duration}
              </div>
              
              {/* Level Badge */}
              <div className="absolute top-4 left-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${getLevelColor(video.level)}`}>
                  {video.level}
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-brand-navy brand-transition line-clamp-2">
                {video.title}
              </h3>
              
              <p className="text-text-secondary text-sm mb-4 line-clamp-3">
                {video.description}
              </p>
              
              {/* Instructor Info */}
              <div className="flex items-center space-x-3 mb-4">
                <Image
                  src={video.instructorAvatar}
                  alt={video.instructor}
                  className="w-8 h-8 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-medium text-text-primary">{video.instructor}</p>
                  <p className="text-xs text-text-secondary">Instructor</p>
                </div>
              </div>
              
              {/* Tags */}
              <div className="flex flex-wrap gap-1 mb-4">
                {video.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs bg-gray-100 text-text-secondary px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {/* Stats */}
              <div className="flex items-center justify-between text-xs text-text-secondary mb-4">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Icon name="Eye" size={12} />
                    <span>{video.views.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Icon name="Heart" size={12} />
                    <span>{video.likes}</span>
                  </div>
                </div>
                <span>{new Date(video.uploadDate).toLocaleDateString()}</span>
              </div>
              
              {/* Action Buttons */}
              <div className="flex space-x-2">
                <Button
                  variant="default"
                  size="sm"
                  iconName="Play"
                  iconPosition="left"
                  className="flex-1 bg-brand-navy hover:bg-brand-navy/90"
                >
                  Watch Now
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  iconName="Bookmark"
                  className="border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white"
                >
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredVideos.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Video" size={48} className="text-text-secondary mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-text-primary mb-2">No videos found</h3>
          <p className="text-text-secondary">Try adjusting your search terms or category filter</p>
        </div>
      )}
    </div>
  );
};

export default VideoLibrary;