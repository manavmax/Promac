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
import { LimelightNav } from '../../components/ui/limelight-nav';
import { Home, BookOpen, Users, Shield, Video, HelpCircle } from 'lucide-react';

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

  const limelightNavItems = [
    { id: 'router', icon: <Home className="w-6 h-6" />, label: 'Support Hub', onClick: () => setActiveSection('router') },
    { id: 'knowledge', icon: <BookOpen className="w-6 h-6" />, label: 'Knowledge Base', onClick: () => setActiveSection('knowledge') },
    { id: 'community', icon: <Users className="w-6 h-6" />, label: 'Community', onClick: () => setActiveSection('community') },
    { id: 'warranty', icon: <Shield className="w-6 h-6" />, label: 'Warranty', onClick: () => setActiveSection('warranty') },
    { id: 'videos', icon: <Video className="w-6 h-6" />, label: 'Video Library', onClick: () => setActiveSection('videos') },
    { id: 'faq', icon: <HelpCircle className="w-6 h-6" />, label: 'FAQ', onClick: () => setActiveSection('faq') }
  ];

  return (
    <div className="min-h-screen bg-black">
      <Helmet>
        <title>Premium Support Center - Promac Electrical</title>
        <meta name="description" content="Get premium support and assistance for Promac Electrical products. Access expert guidance, technical resources, and professional community forums." />
      </Helmet>
      
      {/* Global Header */}
      <GlobalHeader />
      
      {/* Hero Section */}
      <div className="pt-2">
        <SupportHero 
          onSearchSubmit={handleSearchSubmit}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </div>

      {/* Beautiful Limelight Navigation Bar */}
      {activeSection !== 'router' && (
        <div className={`fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-black/80 backdrop-blur-2xl shadow-2xl border border-white/10 rounded-2xl' : 'bg-transparent'
        }`}>
          <div className="px-4 py-2">
            <LimelightNav
              items={limelightNavItems}
              defaultActiveIndex={navigationItems.findIndex(item => item.id === activeSection)}
              onTabChange={(index) => {
                const item = limelightNavItems[index];
                if (item && item.onClick) {
                  item.onClick();
                }
              }}
              className="bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl shadow-2xl shadow-black/20"
              limelightClassName="bg-[#ff0c0e] shadow-[0_50px_15px_rgba(255,12,14,0.3)]"
              iconContainerClassName="text-white hover:text-[#ff0c0e] transition-colors duration-200"
              iconClassName="text-white"
            />
          </div>
        </div>
      )}

      {/* Breadcrumb Navigation */}
      {activeSection !== 'router' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-start space-x-3 text-sm">
            <button
              onClick={() => setActiveSection('router')}
              className="text-white hover:text-[#ff0c0e] transition-colors duration-200 flex items-center space-x-2 h-6"
            >
              <Icon name="Home" size={16} className="flex-shrink-0" />
              <span className="leading-none">Support Center</span>
            </button>
            <div className="flex items-center h-6">
              <Icon name="ChevronRight" size={16} className="text-gray-400 flex-shrink-0" />
            </div>
            <div className="flex items-center h-6">
              <span className="text-white font-medium capitalize leading-none">
                {activeSection === 'knowledge' ? 'Knowledge Base' :
                 activeSection === 'community' ? 'Community Forum' :
                 activeSection === 'warranty' ? 'Warranty Center' :
                 activeSection === 'videos' ? 'Video Library' :
                 activeSection === 'faq' ? 'FAQ' : 'Support'}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative">
        {/* Premium Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,12,14,0.03)_0%,_transparent_70%)] pointer-events-none"></div>
        
        {/* Content with Glassmorphism Container */}
        <div className="relative z-10">
          {renderActiveSection()}
        </div>
      </main>



      {/* Live Chat Widget */}
      <LiveChatWidget 
        isOpen={isChatOpen}
        onToggle={() => setIsChatOpen(!isChatOpen)}
      />

      {/* Footer */}
      <Footer variant="support-center" />
    </div>
  );
};

export default SupportCenter;