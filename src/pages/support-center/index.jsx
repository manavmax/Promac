import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import GlobalHeader from '../../components/ui/GlobalHeader';
import SupportHero from './components/SupportHero';
import SupportRouter from './components/SupportRouter';
import LiveChatWidget from './components/LiveChatWidget';
import KnowledgeBase from './components/KnowledgeBase';
import CommunityForum from './components/CommunityForum';
import WarrantyCenter from './components/WarrantyCenter';
import VideoLibrary from './components/VideoLibrary';
import FAQSection from './components/FAQSection';
import Icon from '../../components/AppIcon';
import { Footer } from '../../components/ui/Footer';

const SupportCenter = () => {
  const [activeSection, setActiveSection] = useState('router');
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);



  const handleSearchSubmit = (query) => {
    if (query.toLowerCase().includes('warranty')) {
      setActiveSection('warranty');
    } else if (query.toLowerCase().includes('video') || query.toLowerCase().includes('tutorial')) {
      setActiveSection('videos');
    } else if (query.toLowerCase().includes('community') || query.toLowerCase().includes('forum')) {
      setActiveSection('community');
    } else if (query.toLowerCase().includes('faq') || query.toLowerCase().includes('question')) {
      setActiveSection('faq');
    } else {
      setActiveSection('knowledge');
    }
  };

  const handleRouteSelect = (routeId) => {
    switch (routeId) {
      case 'live-chat':
        setIsChatOpen(true);
        break;
      case 'video-call': 
        setActiveSection('videos');
        break;
      case 'knowledge-base': 
        setActiveSection('knowledge');
        break;
      case 'community': 
        setActiveSection('community');
        break;
      case 'warranty': 
        setActiveSection('warranty');
        break;
      case 'returns':
        setActiveSection('warranty');
        break;
      default:
        setActiveSection('router');
    }
  };

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'knowledge':
        return <KnowledgeBase />;
      case 'community':
        return <CommunityForum />;
      case 'warranty':
        return <WarrantyCenter />;
      case 'videos':
        return <VideoLibrary />;
      case 'faq':
        return <FAQSection />;
      default:
        return <SupportRouter onRouteSelect={handleRouteSelect} />;
    }
  };

  const navigationItems = [
    { id: 'router', name: 'Support Hub', icon: 'Home' },
    { id: 'knowledge', name: 'Knowledge Base', icon: 'BookOpen' },
    { id: 'community', name: 'Community', icon: 'Users' },
    { id: 'warranty', name: 'Warranty', icon: 'Shield' },
    { id: 'videos', name: 'Video Library', icon: 'Video' },
    { id: 'faq', name: 'FAQ', icon: 'HelpCircle' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155]">
      <Helmet>
        <title>Premium Support Center - Promac Electrical</title>
        <meta name="description" content="Get premium support and assistance for Promac Electrical products. Access expert guidance, technical resources, and professional community forums." />
      </Helmet>
      
      {/* Global Header */}
      <GlobalHeader />
      
      {/* Hero Section */}
      <div className="pt-16">
        <SupportHero 
          onSearchSubmit={handleSearchSubmit}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      {/* Premium Navigation Bar */}
      {activeSection !== 'router' && (
        <div className={`sticky top-16 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-[#0F172A]/95 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
        }`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <button
                onClick={() => setActiveSection('router')}
                className="flex items-center space-x-3 text-white hover:text-[#3B82F6] transition-colors duration-200 group"
              >
                <div className="w-10 h-10 bg-[#1E293B] border border-[#475569] rounded-xl flex items-center justify-center group-hover:border-[#3B82F6] group-hover:scale-110 transition-all duration-200">
                  <Icon name="ArrowLeft" size={20} color="#3B82F6" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-300">Back to</div>
                  <div className="font-semibold">Support Hub</div>
                </div>
              </button>
              
              <div className="flex items-center space-x-2">
                {navigationItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`relative p-3 rounded-xl transition-all duration-200 ${
                      activeSection === item.id
                        ? 'bg-[#3B82F6] text-white shadow-lg scale-105'
                        : 'text-gray-300 hover:text-white hover:bg-[#1E293B] border border-[#475569] hover:border-[#3B82F6]'
                    }`}
                    title={item.name}
                  >
                    <Icon name={item.icon} size={20} />
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      {activeSection !== 'router' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3 text-sm">
            <button
              onClick={() => setActiveSection('router')}
              className="text-gray-300 hover:text-[#3B82F6] transition-colors duration-200 flex items-center space-x-2"
            >
              <Icon name="Home" size={16} />
              <span>Support Center</span>
            </button>
            <Icon name="ChevronRight" size={16} className="text-gray-500" />
            <span className="text-white font-medium capitalize">
              {activeSection === 'knowledge' ? 'Knowledge Base' :
               activeSection === 'community' ? 'Community Forum' :
               activeSection === 'warranty' ? 'Warranty Center' :
               activeSection === 'videos' ? 'Video Library' :
               activeSection === 'faq' ? 'FAQ' : 'Support'}
            </span>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative">
        {renderActiveSection()}
      </main>

      {/* Floating Action Menu */}
      {activeSection !== 'router' && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="bg-[#1E293B] backdrop-blur-xl rounded-2xl shadow-2xl border border-[#475569] p-3">
            <div className="flex items-center space-x-2">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`relative p-3 rounded-xl transition-all duration-300 ${
                    activeSection === item.id
                      ? 'bg-[#3B82F6] text-white shadow-lg scale-110'
                      : 'text-gray-300 hover:text-white hover:bg-[#334155] border border-[#475569] hover:border-[#3B82F6]'
                  }`}
                  title={item.name}
                >
                  <Icon name={item.icon} size={20} />
                  {activeSection === item.id && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#3B82F6] rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Live Chat Widget */}
      <LiveChatWidget 
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default SupportCenter;