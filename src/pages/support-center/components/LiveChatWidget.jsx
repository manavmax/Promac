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
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [chatStatus, setChatStatus] = useState('online');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Simulate agent typing
      setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => {
          setIsTyping(false);
          setMessages(prev => [...prev, {
            id: 2,
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
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

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
        className="fixed bottom-8 right-8 z-30 w-16 h-16 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full shadow-2xl hover:shadow-[#10B981]/25 transition-all duration-300 hover:scale-110 group"
        style={{
          boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)',
        }}
      >
        <div className="relative">
          <Icon name="MessageCircle" size={28} color="white" />
          
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-[#EF4444] to-[#F87171] rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white text-xs font-bold">1</span>
          </div>
          
          {/* Pulse Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full animate-ping opacity-75"></div>
        </div>
      </button>

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-8 right-8 z-30 w-96 h-[600px] bg-[#1F2937] rounded-3xl shadow-2xl border border-[#374151] overflow-hidden backdrop-blur-xl">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-[#10B981] to-[#34D399] p-4 text-white">
            <div className="flex items-center justify-between mb-3">
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
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                alt="Sarah Chen"
                className="w-8 h-8 rounded-full border-2 border-white/20"
              />
              <div className="flex-1">
                <div className="text-sm font-medium">Sarah Chen</div>
                <div className="text-xs opacity-80">Technical Support Specialist</div>
              </div>
              <div className="text-xs opacity-80">Usually responds in 2 min</div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 p-4 overflow-y-auto bg-[#111827]">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {message.type === 'agent' && (
                    <img
                      src={message.avatar}
                      alt={message.agent}
                      className="w-8 h-8 rounded-full mr-3 flex-shrink-0"
                    />
                  )}
                  
                  <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-[#10B981] to-[#34D399] text-white'
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
                    <div className="w-8 h-8 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-full flex items-center justify-center ml-3 flex-shrink-0">
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
                  className="w-full bg-[#374151] text-white placeholder-gray-400 px-4 py-3 rounded-2xl border border-[#4B5563] focus:outline-none focus:border-[#10B981] focus:ring-2 focus:ring-[#10B981]/20 transition-all duration-200"
                />
              </div>
              
              <button
                type="submit"
                disabled={!inputMessage.trim()}
                className="w-12 h-12 bg-gradient-to-r from-[#10B981] to-[#34D399] rounded-2xl flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-200"
              >
                <Icon name="Send" size={18} color="white" />
              </button>
            </form>
            
            {/* Quick Actions */}
            <div className="flex items-center justify-between mt-3 text-xs text-gray-400">
              <div className="flex items-center space-x-4">
                <button className="flex items-center space-x-1 hover:text-[#10B981] transition-colors duration-200">
                  <Icon name="Paperclip" size={14} />
                  <span>Attach</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-[#10B981] transition-colors duration-200">
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