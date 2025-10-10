import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const UserPosts = ({ match }) => {
  const { userId } = match.params;
  
  const users = {
    1: {
      name: 'John Doe',
      posts: [
        { id: 1, content: 'Just finished working on an amazing new project!', date: '2024-01-15' },
        { id: 2, content: 'Learning React has been an incredible journey!', date: '2024-01-10' }
      ]
    },
    2: {
      name: 'Jane Smith',
      posts: [
        { id: 3, content: 'Beautiful day for a hike!', date: '2024-01-14' },
        { id: 4, content: 'Just started reading a new book!', date: '2024-01-08' }
      ]
    },
    3: {
      name: 'Mike Johnson',
      posts: [
        { id: 5, content: 'Just read an incredible book about AI!', date: '2024-01-13' }
      ]
    }
  };

  const user = users[userId];

  if (!user) {
    return <div>User not found</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <h1 className="page-title">{user.name}'s Posts</h1>
        <Link to="/users" className="button">Back to Users</Link>
      </div>
      
      <div className="posts-list">
        {user.posts.map(post => (
          <div key={post.id} className="post">
            <div className="post-header">
              <span className="post-author">{user.name}</span>
              <span className="post-date">{post.date}</span>
            </div>
            <div className="post-content">
              {post.content}
            </div>
            <div className="post-actions">
              <Link to={`/edit-post/${post.id}`} className="button edit">
                Edit Post
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default withRouter(UserPosts);
