import React, { useState, useEffect } from 'react';
import Icon from '../AppIcon';

const Notification = ({ 
  message, 
  type = 'success', 
  duration = 3000, 
  onClose, 
  show = false 
}) => {
  const [isVisible, setIsVisible] = useState(show);

  useEffect(() => {
    setIsVisible(show);
    
    if (show && duration > 0) {
      const timer = setTimeout(() => {
        setIsVisible(false);
        onClose?.();
      }, duration);
      
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  if (!isVisible) return null;

  const getIconName = () => {
    switch (type) {
      case 'success':
        return 'CheckCircle';
      case 'error':
        return 'XCircle';
      case 'warning':
        return 'AlertTriangle';
      case 'info':
        return 'Info';
      default:
        return 'CheckCircle';
    }
  };

  const getBgColor = () => {
    switch (type) {
      case 'success':
        return 'bg-brand-green/10 border-brand-green/20 text-brand-green';
      case 'error':
        return 'bg-red-500/10 border-red-500/20 text-red-600';
      case 'warning':
        return 'bg-brand-amber/10 border-brand-amber/20 text-brand-amber';
      case 'info':
        return 'bg-action-blue/10 border-action-blue/20 text-action-blue';
      default:
        return 'bg-brand-green/10 border-brand-green/20 text-brand-green';
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 animate-in slide-in-from-right-2 duration-300">
      <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg border backdrop-blur-sm shadow-lg ${getBgColor()}`}>
        <Icon name={getIconName()} size={20} />
        <span className="text-sm font-medium">{message}</span>
        <button
          onClick={() => {
            setIsVisible(false);
            onClose?.();
          }}
          className="ml-2 hover:opacity-70 transition-opacity"
        >
          <Icon name="X" size={16} />
        </button>
      </div>
    </div>
  );
};

export default Notification; 