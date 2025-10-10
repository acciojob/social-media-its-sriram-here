import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const CreatePost = ({ history }) => {
  const [postContent, setPostContent] = useState('');
  const [selectedAuthor, setSelectedAuthor] = useState('');

  const authors = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Mike Johnson' },
    { id: 4, name: 'Sarah Wilson' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedAuthor || !postContent.trim()) {
      alert('Please select an author and write some content');
      return;
    }

    console.log('Creating post:', {
      author: selectedAuthor,
      content: postContent
    });

    alert('Post created successfully!');
    history.push('/');
  };

  return (
    <div className="form-container">
      <h1 className="page-title">Create New Post</h1>
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="postAuthor">Select Author:</label>
          <select 
            id="postAuthor"
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
            className="form-control"
          >
            <option value="">Choose an author...</option>
            {authors.map(author => (
              <option key={author.id} value={author.id}>
                {author.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="postContent">Post Content:</label>
          <textarea 
            id="postContent"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            placeholder="What's on your mind?"
            className="form-control"
          />
        </div>

        <button type="submit" className="button">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default withRouter(CreatePost);
