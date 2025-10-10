import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const EditPost = ({ history, match }) => {
  const { postId } = match.params;
  
  const posts = {
    1: { title: 'My First Post', content: 'Just finished working on an amazing new project!', author: 'John Doe' },
    2: { title: 'Learning Journey', content: 'Learning React has been an incredible journey!', author: 'John Doe' },
    3: { title: 'Hiking Adventure', content: 'Beautiful day for a hike!', author: 'Jane Smith' },
    4: { title: 'Book Recommendation', content: 'Just started reading a new book!', author: 'Jane Smith' },
    5: { title: 'AI Book Review', content: 'Just read an incredible book about AI!', author: 'Mike Johnson' }
  };

  const post = posts[postId];
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim() || !content.trim()) {
      alert('Please fill in both title and content');
      return;
    }

    console.log('Updating post:', { postId, title, content });

    alert('Post updated successfully!');
    history.push('/');
  };

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="form-container">
      <h1 className="page-title">Edit Post</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="postTitle">Post Title:</label>
          <input
            id="postTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>

        <div className="form-group">
          <label htmlFor="postContent">Post Content:</label>
          <textarea 
            id="postContent"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="form-control"
          />
        </div>

        <button type="submit" className="button">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default withRouter(EditPost);
