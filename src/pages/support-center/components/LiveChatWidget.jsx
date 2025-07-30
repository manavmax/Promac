import React, { useState, useRef, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const LiveChatWidget = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'support',
      name: 'Rajesh Kumar',
      role: 'Technical Expert',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      message: 'Hello! I\'m Rajesh, your electrical support specialist. How can I help you today?',
      timestamp: new Date(Date.now() - 60000)
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      name: 'You',
      message: newMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Simulate support response
    setTimeout(() => {
      const supportResponse = {
        id: messages.length + 2,
        sender: 'support',
        name: 'Rajesh Kumar',
        role: 'Technical Expert',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
        message: 'I understand your concern. Let me help you with that. Could you please provide more details about the specific product or installation you\'re working with?',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, supportResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const quickActions = [
    { text: 'Product Installation Help', icon: 'Wrench' },
    { text: 'Warranty Claim', icon: 'Shield' },
    { text: 'Technical Specifications', icon: 'FileText' },
    { text: 'Order Status', icon: 'Package' }
  ];

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={onToggle}
          className="w-16 h-16 rounded-full bg-brand-green hover:bg-brand-green/90 shadow-2xl"
          iconName="MessageCircle"
          iconSize={24}
        >
        </Button>
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">1</span>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">
      {/* Header */}
      <div className="bg-brand-green text-white p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <Icon name="MessageCircle" size={20} color="white" />
          </div>
          <div>
            <h3 className="font-semibold">Live Support</h3>
            <p className="text-xs text-white/80">Typically replies in 2 minutes</p>
          </div>
        </div>
        <Button
          onClick={onToggle}
          variant="ghost"
          className="text-white hover:bg-white/20 p-2"
          iconName="X"
          iconSize={20}
        >
        </Button>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              {message.sender === 'support' && (
                <Image
                  src={message.avatar}
                  alt={message.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              )}
              <div className={`rounded-2xl p-3 ${
                message.sender === 'user' ?'bg-brand-navy text-white' :'bg-gray-100 text-text-primary'
              }`}>
                {message.sender === 'support' && (
                  <div className="text-xs font-medium text-brand-navy mb-1">
                    {message.name} • {message.role}
                  </div>
                )}
                <p className="text-sm">{message.message}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-white/70' : 'text-text-secondary'
                }`}>
                  {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          </div>
        ))}
        
        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-center space-x-2">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                alt="Support"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="bg-gray-100 rounded-2xl p-3">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="p-3 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-2 mb-3">
          {quickActions.map((action, index) => (
            <button
              key={index}
              onClick={() => setNewMessage(action.text)}
              className="flex items-center space-x-2 p-2 text-xs bg-gray-50 hover:bg-gray-100 rounded-lg brand-transition"
            >
              <Icon name={action.icon} size={14} className="text-brand-navy" />
              <span className="text-text-primary truncate">{action.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-navy"
          />
          <Button
            type="submit"
            disabled={!newMessage.trim()}
            className="w-10 h-10 rounded-full bg-brand-navy hover:bg-brand-navy/90 disabled:opacity-50"
            iconName="Send"
            iconSize={16}
          >
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LiveChatWidget;