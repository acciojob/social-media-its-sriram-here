import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const posts = [
    {
      id: 1,
      author: 'John Doe',
      content: 'Just finished working on an amazing new project! So excited to share it with everyone soon.',
      date: '2024-01-15',
      reactions: { likes: 15, loves: 3, laughs: 2 }
    },
    {
      id: 2,
      author: 'Jane Smith',
      content: 'Beautiful day for a hike! The mountains are calling and I must go.',
      date: '2024-01-14',
      reactions: { likes: 24, loves: 8, laughs: 1 }
    },
    {
      id: 3,
      author: 'Mike Johnson',
      content: 'Just read an incredible book about AI and its impact on society. Highly recommended!',
      date: '2024-01-13',
      reactions: { likes: 12, loves: 2, laughs: 0 }
    }
  ];

  return (
    <div>
      <h1 className="page-title">Welcome to SocialMedia</h1>
      <p>Connect with friends and share your thoughts with the world!</p>
      
      <div className="posts-list">
        {posts.map(post => (
          <div key={post.id} className="post">
            <div className="post-header">
              <span className="post-author">{post.author}</span>
              <span className="post-date">{post.date}</span>
            </div>
            <div className="post-content">
              {post.content}
            </div>
            <div className="post-actions">
              <Link to={`/edit-post/${post.id}`} className="button edit">
                Edit Post
              </Link>
              <div className="reactions">
                <button className="reaction-button">
                  👍 {post.reactions.likes}
                </button>
                <button className="reaction-button">
                  ❤️ {post.reactions.loves}
                </button>
                <button className="reaction-button">
                  😂 {post.reactions.laughs}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
