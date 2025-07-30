import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import SupportHero from './components/SupportHero';
import SupportRouter from './components/SupportRouter';
import LiveChatWidget from './components/LiveChatWidget';
import KnowledgeBase from './components/KnowledgeBase';
import CommunityForum from './components/CommunityForum';
import WarrantyCenter from './components/WarrantyCenter';
import VideoLibrary from './components/VideoLibrary';
import FAQSection from './components/FAQSection';
import Icon from '../../components/AppIcon';

const SupportCenter = () => {
  const [activeSection, setActiveSection] = useState('router');
  const [searchQuery, setSearchQuery] = useState('');
  const [isChatOpen, setIsChatOpen] = useState(false);

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
      case 'video-call': setActiveSection('videos');
        break;
      case 'knowledge-base': setActiveSection('knowledge');
        break;
      case 'community': setActiveSection('community');
        break;
      case 'warranty': setActiveSection('warranty');
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <SupportHero 
        onSearchSubmit={handleSearchSubmit}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Navigation Breadcrumb */}
      {activeSection !== 'router' && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-2 text-sm">
            <button
              onClick={() => setActiveSection('router')}
              className="text-brand-navy hover:text-brand-navy/80 brand-transition flex items-center space-x-1"
            >
              <Icon name="Home" size={16} />
              <span>Support Center</span>
            </button>
            <Icon name="ChevronRight" size={16} className="text-text-secondary" />
            <span className="text-text-secondary capitalize">
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
      <main>
        {renderActiveSection()}
      </main>

      {/* Quick Access Tabs */}
      {activeSection !== 'router' && (
        <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-40">
          <div className="bg-white rounded-full shadow-2xl border border-gray-200 p-2">
            <div className="flex items-center space-x-1">
              {[
                { id: 'router', name: 'Home', icon: 'Home' },
                { id: 'knowledge', name: 'Guides', icon: 'BookOpen' },
                { id: 'community', name: 'Forum', icon: 'Users' },
                { id: 'warranty', name: 'Warranty', icon: 'Shield' },
                { id: 'videos', name: 'Videos', icon: 'Video' },
                { id: 'faq', name: 'FAQ', icon: 'HelpCircle' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveSection(tab.id)}
                  className={`p-3 rounded-full brand-transition ${
                    activeSection === tab.id
                      ? 'bg-brand-navy text-white' :'text-text-secondary hover:bg-gray-100 hover:text-brand-navy'
                  }`}
                  title={tab.name}
                >
                  <Icon name={tab.icon} size={18} />
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
      <footer className="bg-brand-navy text-white py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Support</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span className="text-sm">1800-123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span className="text-sm">support@promacelectrical.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MessageCircle" size={16} />
                  <span className="text-sm">Live Chat Available 24/7</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Support Hours</h3>
              <div className="space-y-2 text-sm text-white/80">
                <p>Monday - Friday: 9:00 AM - 8:00 PM</p>
                <p>Saturday: 9:00 AM - 6:00 PM</p>
                <p>Sunday: 10:00 AM - 4:00 PM</p>
                <p className="text-brand-amber">Emergency Support: 24/7</p>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <div className="space-y-2">
                {[
                  'Installation Guides',
                  'Product Manuals',
                  'Safety Guidelines',
                  'Code Compliance',
                  'Video Tutorials'
                ].map((resource, index) => (
                  <button
                    key={index}
                    className="block text-sm text-white/80 hover:text-white brand-transition"
                  >
                    {resource}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                {[
                  { name: 'Facebook', icon: 'Facebook' },
                  { name: 'Twitter', icon: 'Twitter' },
                  { name: 'LinkedIn', icon: 'Linkedin' },
                  { name: 'YouTube', icon: 'Youtube' }
                ].map((social) => (
                  <button
                    key={social.name}
                    className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 brand-transition"
                  >
                    <Icon name={social.icon} size={18} />
                  </button>
                ))}
              </div>
              <p className="text-sm text-white/80">
                Follow us for updates, tips, and electrical safety information
              </p>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-12 pt-8 text-center">
            <p className="text-white/80">
              © {new Date().getFullYear()} Promac Electrical. All rights reserved. | 
              <span className="text-brand-amber"> Powering your projects with precision</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SupportCenter;