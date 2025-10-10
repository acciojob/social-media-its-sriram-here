import React from 'react';
import { Link } from 'react-router-dom';

const UsersPage = () => {
  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', postsCount: 5 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', postsCount: 3 },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', postsCount: 7 },
    { id: 4, name: 'Sarah Wilson', email: 'sarah@example.com', postsCount: 2 },
    { id: 5, name: 'David Brown', email: 'david@example.com', postsCount: 4 },
    { id: 6, name: 'Emily Davis', email: 'emily@example.com', postsCount: 6 }
  ];

  return (
    <div>
      <h1 className="page-title">All Users</h1>
      <div className="users-grid">
        {users.map(user => (
          <div key={user.id} className="user-card">
            <div className="user-avatar">
              {user.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3 className="user-name">{user.name}</h3>
            <p className="user-email">{user.email}</p>
            <p>Posts: {user.postsCount}</p>
            <Link to={`/users/${user.id}`} className="button">
              View Posts
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
