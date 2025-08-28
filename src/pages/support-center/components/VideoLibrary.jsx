import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const VideoLibrary = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = [
    { id: 'all', name: 'All Videos', icon: 'Grid3x3', count: 89, color: 'from-[#8B5CF6] to-[#A78BFA]' },
    { id: 'installation', name: 'Installation', icon: 'Wrench', count: 34, color: 'from-[#10B981] to-[#34D399]' },
    { id: 'troubleshooting', name: 'Troubleshooting', icon: 'AlertTriangle', count: 28, color: 'from-[#F59E0B] to-[#FBBF24]' },
    { id: 'maintenance', name: 'Maintenance', icon: 'Settings', count: 18, color: 'from-[#3B82F6] to-[#60A5FA]' },
    { id: 'safety', name: 'Safety', icon: 'Shield', count: 9, color: 'from-[#EF4444] to-[#F87171]' }
  ];

  const videos = [
    {
      id: 1,
      title: 'Complete MCB Installation Guide - Step by Step Tutorial',
      description: 'Learn the proper installation process for Miniature Circuit Breakers including mounting, wiring, and testing procedures. Perfect for electricians and DIY enthusiasts.',
      category: 'installation',
      thumbnail: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=300&h=200&fit=crop',
      duration: '12:45',
      views: 2847,
      likes: 234,
      instructor: 'Rajesh Kumar',
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      difficulty: 'Beginner',
      tags: ['MCB', 'Installation', 'Tutorial', 'Safety']
    },
    {
      id: 2,
      title: 'Troubleshooting ELCB Tripping Issues - Expert Solutions',
      description: 'Comprehensive guide to diagnose and resolve Earth Leakage Circuit Breaker problems. Learn common causes and effective solutions.',
      category: 'troubleshooting',
      thumbnail: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop',
      duration: '18:32',
      views: 1923,
      likes: 189,
      instructor: 'Priya Sharma',
      instructorAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
      difficulty: 'Intermediate',
      tags: ['ELCB', 'Troubleshooting', 'Ground Fault', 'Electrical Safety']
    },
    {
      id: 3,
      title: 'Load Calculation Methods for Electrical Panel Design',
      description: 'Master the art of electrical load calculations for residential and commercial applications. Includes diversity factors and safety margins.',
      category: 'installation',
      thumbnail: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=300&h=200&fit=crop',
      duration: '25:18',
      views: 3156,
      likes: 312,
      instructor: 'Amit Patel',
      instructorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      difficulty: 'Advanced',
      tags: ['Load Calculation', 'Panel Design', 'Electrical Engineering', 'Design']
    },
    {
      id: 4,
      title: 'Electrical Safety Protocols for Industrial Installations',
      description: 'Essential safety guidelines and procedures for working with high-voltage industrial electrical systems. PPE requirements and best practices.',
      category: 'safety',
      thumbnail: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=300&h=200&fit=crop',
      duration: '22:15',
      views: 1654,
      likes: 178,
      instructor: 'Deepak Singh',
      instructorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face',
      difficulty: 'Expert',
      tags: ['Industrial Safety', 'High Voltage', 'PPE', 'Safety Protocols']
    },
    {
      id: 5,
      title: 'Preventive Maintenance Schedule for Electrical Panels',
      description: 'Create an effective maintenance schedule to ensure optimal performance and longevity of electrical panels and distribution boards.',
      category: 'maintenance',
      thumbnail: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=300&h=200&fit=crop',
      duration: '15:42',
      views: 1456,
      likes: 156,
      instructor: 'Meera Iyer',
      instructorAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
      difficulty: 'Beginner',
      tags: ['Maintenance', 'Electrical Panels', 'Preventive Care', 'Inspection']
    },
    {
      id: 6,
      title: 'Code Compliance for Electrical Installations in India',
      description: 'Understanding BIS standards and local electrical codes for residential and commercial installations. Compliance requirements and verification.',
      category: 'installation',
      thumbnail: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300&h=200&fit=crop',
      duration: '20:35',
      views: 2234,
      likes: 245,
      instructor: 'Vikram Reddy',
      instructorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      difficulty: 'Intermediate',
      tags: ['Code Compliance', 'BIS Standards', 'Regulations', 'Electrical Codes']
    }
  ];

  const filteredVideos = videos.filter(video => 
    selectedCategory === 'all' || video.category === selectedCategory
  );

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'from-[#10B981] to-[#34D399]';
      case 'Intermediate': return 'from-[#F59E0B] to-[#FBBF24]';
      case 'Advanced': return 'from-[#EF4444] to-[#F87171]';
      case 'Expert': return 'from-[#8B5CF6] to-[#A78BFA]';
      default: return 'from-[#6B7280] to-[#9CA3AF]';
    }
  };

  return (
    <div className="bg-gradient-to-br from-[#0F172A] via-[#1E1B4B] to-[#312E81] min-h-screen py-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1F2937] to-[#111827]"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EF4444]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8B5CF6]/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#EF4444] to-[#F87171] rounded-full text-white text-sm font-semibold mb-6">
            <Icon name="Video" size={16} className="mr-2" />
            Video Library
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Learn from{' '}
            <span className="bg-gradient-to-r from-[#EF4444] to-[#F87171] bg-clip-text text-transparent">
              Expert Videos
            </span>
          </h1>
          
          <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
            Access our comprehensive collection of video tutorials, installation guides, and technical training materials
          </p>
        </div>

        {/* Search and Filters */}
        <div className={`mb-12 transition-all duration-1000 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#EF4444] to-[#F87171] rounded-2xl blur-xl opacity-30"></div>
              <div className="relative bg-[#1F2937]/80 backdrop-blur-xl rounded-2xl border border-[#374151] p-2">
                <div className="flex items-center">
                  <Icon name="Search" size={24} color="#EF4444" className="ml-4" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search videos, tutorials, or training materials..."
                    className="flex-1 bg-transparent text-white placeholder-gray-300 px-4 py-4 text-lg focus:outline-none"
                  />
                  <div className="mr-4 text-sm text-gray-300">
                    {filteredVideos.length} videos found
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4">
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
        </div>

        {/* Videos Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-1000 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          {filteredVideos.map((video, index) => (
            <div
              key={video.id}
              className="group bg-[#1F2937] rounded-3xl border border-[#374151] overflow-hidden hover:border-[#EF4444]/50 hover:shadow-xl hover:shadow-[#EF4444]/10 transition-all duration-500 hover:scale-105 cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-[#1F2937]/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full border border-[#374151]">
                    {video.category}
                  </span>
                </div>
                
                {/* Difficulty Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 bg-gradient-to-r ${getDifficultyColor(video.difficulty)} text-white text-xs font-semibold rounded-full`}>
                    {video.difficulty}
                  </span>
                </div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#EF4444] to-[#F87171] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-2xl">
                    <Icon name="Play" size={28} color="white" />
                  </div>
                </div>
                
                {/* Duration Badge */}
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {video.duration}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#EF4444] transition-colors duration-300 line-clamp-2">
                  {video.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                  {video.description}
                </p>
                
                {/* Instructor and Stats */}
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Image
                      src={video.instructorAvatar}
                      alt={video.instructor}
                      className="w-6 h-6 rounded-full"
                    />
                    <span className="text-white font-medium">{video.instructor}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Icon name="Eye" size={14} className="mr-1" />
                      {video.views.toLocaleString()}
                    </span>
                    <span className="flex items-center">
                      <Icon name="Heart" size={14} className="mr-1" />
                      {video.likes}
                    </span>
                  </div>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {video.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-[#374151] text-gray-300 text-xs rounded-full border border-[#4B5563]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* Watch Now Button */}
                <button className="w-full mt-4 py-3 bg-gradient-to-r from-[#EF4444] to-[#F87171] text-white font-semibold rounded-xl hover:from-[#F87171] hover:to-[#EF4444] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#EF4444]/25">
                  <Icon name="Play" size={20} className="mr-2 inline" />
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredVideos.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-[#1F2937] rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="Video" size={48} color="#6B7280" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">No videos found</h3>
            <p className="text-gray-300">Try adjusting your search terms or category filter</p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-600 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#1F2937] to-[#111827] rounded-3xl border border-[#374151] p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need personalized video training?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Our technical experts can create custom video content tailored to your specific needs and requirements
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-[#8B5CF6] to-[#A78BFA] text-white font-semibold rounded-xl hover:from-[#A78BFA] hover:to-[#8B5CF6] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#8B5CF6]/25">
                <Icon name="MessageCircle" size={20} className="mr-2 inline" />
                Contact Support
              </button>
              <button className="px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] text-white font-semibold rounded-xl hover:from-[#60A5FA] hover:to-[#3B82F6] transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3B82F6]/25">
                <Icon name="Video" size={20} className="mr-2 inline" />
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoLibrary;
