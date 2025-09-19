import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const LiveChatWidget = ({ isOpen, onToggle }) => {
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'agent',
      content: 'Hello! Welcome to Promac Electrical Support. I\'m Sarah, your technical support specialist. How can I help you today?',
      timestamp: new Date(Date.now() - 300000),
      agent: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 2,
      type: 'agent',
      content: 'I\'m here to assist you with any electrical product questions, installation guidance, or technical support you might need.',
      timestamp: new Date(Date.now() - 240000),
      agent: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 3,
      type: 'user',
      content: 'Hi Sarah! I have a question about installing a new circuit breaker.',
      timestamp: new Date(Date.now() - 180000),
      agent: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 4,
      type: 'agent',
      content: 'Great question! Circuit breaker installation requires careful attention to safety. What type of circuit breaker are you working with?',
      timestamp: new Date(Date.now() - 120000),
      agent: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 5,
      type: 'user',
      content: 'It\'s a 20-amp double-pole breaker for my kitchen renovation.',
      timestamp: new Date(Date.now() - 180000),
      agent: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 6,
      type: 'agent',
      content: 'Perfect! A 20-amp double-pole breaker is ideal for kitchen circuits. Before we proceed, I need to know: Have you turned off the main power supply to your electrical panel?',
      timestamp: new Date(Date.now() - 120000),
      agent: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 7,
      type: 'user',
      content: 'Yes, I\'ve already turned off the main breaker and tested with a voltage tester to make sure it\'s safe.',
      timestamp: new Date(Date.now() - 60000),
      agent: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 8,
      type: 'agent',
      content: 'Excellent safety practice! Now, for the installation: First, make sure the new breaker is compatible with your panel. Most modern panels accept standard breakers, but some require specific brands.',
      timestamp: new Date(Date.now() - 30000),
      agent: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 9,
      type: 'user',
      content: 'I have a Siemens panel. Should I use a Siemens breaker specifically?',
      timestamp: new Date(Date.now() - 15000),
      agent: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    },
    {
      id: 10,
      type: 'agent',
      content: 'Yes, absolutely! Siemens panels are designed to work best with Siemens breakers. This ensures proper fit and safety. You can find Siemens breakers in our catalog under the Circuit Protection section.',
      timestamp: new Date(Date.now() - 5000),
      agent: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatStatus, setChatStatus] = useState('online');
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesEndRef = useRef(null);
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Simulate agent typing
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: 6,
            type: 'agent',
            content: 'I\'m here to assist you with any electrical product questions, installation guidance, or technical support you might need.',
            timestamp: new Date(),
            agent: 'Sarah Chen',
            avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
          }]);
        }, 2000);
      }, 1000);
    }
  }, [isOpen]);

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;
      setShowScrollButton(!isNearBottom);
    };

    // Initial check
    handleScroll();
    
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  }, [messages, isTyping]);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      type: 'user',
      content: inputMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate agent response
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        type: 'agent',
        content: 'Thank you for your message. I\'m looking into this for you. Could you provide a bit more detail about your specific situation?',
        timestamp: new Date(),
        agent: 'Sarah Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face'
      }]);
    }, 2000);
  };

  const getStatusColor = () => {
    switch (chatStatus) {
      case 'online': return 'bg-[#10B981]';
      case 'busy': return 'bg-[#F59E0B]';
      case 'offline': return 'bg-[#6B7280]';
      default: return 'bg-[#10B981]';
    }
  };

  const getStatusText = () => {
    switch (chatStatus) {
      case 'online': return 'Online';
      case 'busy': return 'Busy';
      case 'offline': return 'Offline';
      default: return 'Online';
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-2xl hover:shadow-[#25D366]/25 transition-all duration-300 hover:scale-110 group flex items-center justify-center"
                  style={{
            boxShadow: '0 20px 40px rgba(37, 211, 102, 0.3)',
          }}
      >
        <Icon name="MessageCircle" size={28} color="white" />
        
        {/* Notification Badge */}
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#ff0c0e] rounded-full flex items-center justify-center animate-pulse">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] bg-[#1F2937] rounded-3xl shadow-2xl border border-[#374151] overflow-hidden backdrop-blur-xl flex flex-col">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#25D366] to-[#128C7E] p-4 text-white">
            <div className="flex items-center justify-between mb-3 pt-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon name="MessageCircle" size={20} color="white" />
                </div>
                <div>
                  <h3 className="font-semibold">Live Chat Support</h3>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 ${getStatusColor()} rounded-full`}></div>
                    <span className="text-sm opacity-90">{getStatusText()}</span>
                  </div>
                </div>
              </div>
              
              <button
                onClick={onToggle}
                className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
              >
                <Icon name="X" size={16} color="white" />
              </button>
            </div>
            
            {/* Agent Info */}
            <div className="flex items-center space-x-3 bg-white/10 rounded-2xl p-3">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=48&h=48&fit=crop&crop=face"
                alt="Sarah Chen"
                className="w-12 h-12 rounded-full border-2 border-white/20"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              <div className="w-12 h-12 rounded-full border-2 border-white/20 bg-white/20 flex items-center justify-center text-white font-semibold text-lg" style={{display: 'none'}}>
                SC
              </div>
              <div className="flex-1">
                <div className="text-sm font-medium">Sarah Chen</div>
                <div className="text-xs opacity-80">Technical Support Specialist</div>
              </div>
              <div className="text-xs opacity-80">Usually responds in 2 min</div>
            </div>
          </div>

          {/* Chat Messages */}
          <div 
            ref={messagesContainerRef}
            className="flex-1 overflow-y-auto bg-[#111827] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-gray-800 relative"
            style={{ maxHeight: '400px' }}
          >
            <div className="p-4 space-y-4 min-h-full">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'agent' && (
                    <img
                      src={message.avatar}
                      alt={message.agent}
                      className="w-10 h-10 rounded-full mr-3 flex-shrink-0"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  )}
                  {message.type === 'agent' && (
                    <div className="w-10 h-10 rounded-full mr-3 flex-shrink-0 bg-white/20 flex items-center justify-center text-white font-semibold text-sm" style={{display: 'none'}}>
                      SC
                    </div>
                  )}
                  
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white'
                        : 'bg-[#374151] text-gray-200'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                    
                    <div className={`text-xs text-gray-500 mt-2 ${
                      message.type === 'user' ? 'text-right' : 'text-left'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                  
                  {message.type === 'user' && (
                    <div className="w-8 h-8 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-full flex items-center justify-center ml-3 flex-shrink-0">
                      <Icon name="User" size={16} color="white" />
                    </div>
                  )}
                </div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                    alt="Sarah Chen"
                    className="w-8 h-8 rounded-full mr-3"
                  />
                  <div className="bg-[#374151] rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            {/* Scroll to Bottom Button */}
            {showScrollButton && (
              <button
                onClick={scrollToBottom}
                className="absolute bottom-4 right-4 w-10 h-10 bg-[#25D366] hover:bg-[#128C7E] rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 hover:scale-110 z-10"
                title="Scroll to bottom"
              >
                <Icon name="ChevronDown" size={20} color="white" />
              </button>
            )}
          </div>

          {/* Chat Input */}
          <div className="p-4 bg-[#1F2937] border-t border-[#374151]">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="w-full bg-[#374151] text-white placeholder-gray-400 px-4 py-3 rounded-2xl border border-[#4B5563] focus:outline-none focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all duration-200"
                />
              </div>
              
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="w-12 h-12 bg-gradient-to-r from-[#25D366] to-[#128C7E] rounded-2xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-200"
              >
                <Icon name="Send" size={18} color="white" />
              </button>
            </form>
            
            {/* Quick Actions */}
            <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 hover:text-[#25D366] transition-colors duration-200">
                  <Icon name="Paperclip" size={14} />
                  <span>Attach</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-[#25D366] transition-colors duration-200">
                  <Icon name="Image" size={14} />
                  <span>Image</span>
                </button>
              </div>
              
              <span>24/7 Support Available</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LiveChatWidget;