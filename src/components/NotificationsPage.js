import React, { useState } from 'react';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);

  const refreshNotifications = () => {
    setLoading(true);
    
    setTimeout(() => {
      const newNotifications = [
        { id: 1, message: 'John Doe liked your post', read: false, timestamp: '2 min ago' },
        { id: 2, message: 'Jane Smith commented on your photo', read: false, timestamp: '5 min ago' },
        { id: 3, message: 'Mike Johnson started following you', read: true, timestamp: '1 hour ago' },
        { id: 4, message: 'Your post has been shared 3 times', read: false, timestamp: '2 hours ago' }
      ];
      
      setNotifications(newNotifications);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="notifications-container">
      <h1 className="page-title">Notifications</h1>
      
      <button 
        className="button" 
        onClick={refreshNotifications}
        disabled={loading}
      >
        {loading ? 'Loading...' : 'Refresh Notifications'}
      </button>

      <div className="notifications-list">
        {notifications.map(notification => (
          <div 
            key={notification.id} 
            className={`notification ${notification.read ? 'read' : ''}`}
          >
            <p>{notification.message}</p>
            <small>{notification.timestamp}</small>
          </div>
        ))}
        
        {notifications.length === 0 && !loading && (
          <p>No notifications yet. Click the button above to refresh.</p>
        )}
      </div>
    </div>
  );
};

export default NotificationsPage;
