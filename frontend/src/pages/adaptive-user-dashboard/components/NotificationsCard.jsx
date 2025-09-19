import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const NotificationsCard = ({ notifications, onMarkAsRead, onMarkAllAsRead }) => {
  const [showAll, setShowAll] = useState(false);

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'order': return 'Package';
      case 'promotion': return 'Tag';
      case 'system': return 'Bell';
      case 'support': return 'Headphones';
      case 'urgent': return 'AlertTriangle';
      default: return 'Info';
    }
  };

  const getNotificationColor = (type, isUrgent) => {
    if (isUrgent) return 'text-red-600 bg-red-50 border-red-200';
    
    switch (type) {
      case 'order': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'promotion': return 'text-green-600 bg-green-50 border-green-200';
      case 'system': return 'text-gray-600 bg-gray-50 border-gray-200';
      case 'support': return 'text-purple-600 bg-purple-50 border-purple-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const displayNotifications = showAll ? notifications : notifications?.slice(0, 3);
  const unreadCount = notifications?.filter(n => !n?.read)?.length;

  return (
    <div className="bg-white rounded-2xl shadow-premium p-6 border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <h2 className="text-xl font-semibold text-gray-900">Notifications</h2>
          {unreadCount > 0 && (
            <span className="bg-primary text-white text-xs font-medium px-2 py-1 rounded-full">
              {unreadCount}
            </span>
          )}
        </div>
        {unreadCount > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onMarkAllAsRead}
          >
            Mark all read
          </Button>
        )}
      </div>
      <div className="space-y-3">
        {displayNotifications?.map((notification) => (
          <div
            key={notification?.id}
            className={`p-4 rounded-xl border transition-all duration-200 ${
              notification?.read 
                ? 'bg-gray-50 border-gray-200' 
                : getNotificationColor(notification?.type, notification?.urgent)
            } ${!notification?.read ? 'shadow-sm' : ''}`}
          >
            <div className="flex items-start space-x-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                notification?.read 
                  ? 'bg-gray-200' 
                  : notification?.urgent 
                    ? 'bg-red-100' :'bg-white'
              }`}>
                <Icon 
                  name={getNotificationIcon(notification?.type)} 
                  size={16} 
                  className={
                    notification?.read 
                      ? 'text-gray-500' 
                      : notification?.urgent 
                        ? 'text-red-600' :'text-current'
                  } 
                />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className={`text-sm font-medium ${
                      notification?.read ? 'text-gray-700' : 'text-gray-900'
                    }`}>
                      {notification?.title}
                    </h3>
                    <p className={`text-sm mt-1 ${
                      notification?.read ? 'text-gray-500' : 'text-gray-600'
                    }`}>
                      {notification?.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      {new Date(notification.timestamp)?.toLocaleString('en-IN', {
                        day: 'numeric',
                        month: 'short',
                        hour: '2-digit',
                        minute: '2-digit'
                      })}
                    </p>
                  </div>
                  
                  {!notification?.read && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => onMarkAsRead(notification?.id)}
                      className="ml-2"
                    >
                      <Icon name="Check" size={14} />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {notifications?.length === 0 && (
        <div className="text-center py-8">
          <Icon name="Bell" size={48} className="text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No notifications</h3>
          <p className="text-gray-500">You're all caught up!</p>
        </div>
      )}
      {notifications?.length > 3 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <Button
            variant="ghost"
            fullWidth
            onClick={() => setShowAll(!showAll)}
            iconName={showAll ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
          >
            {showAll ? 'Show Less' : `Show ${notifications?.length - 3} More`}
          </Button>
        </div>
      )}
    </div>
  );
};

export default NotificationsCard;