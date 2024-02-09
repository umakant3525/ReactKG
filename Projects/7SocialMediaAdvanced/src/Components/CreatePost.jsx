// CreatePost.js
import React, { useContext, useRef } from 'react';
import { PostListContext } from '../store/PostListStore';

const CreatePost = () => {
  const { addPost } = useContext(PostListContext);

  const userIdRef = useRef(null);
  const postTitleRef = useRef(null);
  const postBodyRef = useRef(null);
  const reactionsRef = useRef(null);
  const tagsRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost(
      postTitleRef.current.value,
      postBodyRef.current.value,
      reactionsRef.current.value,
      userIdRef.current.value,
      tagsRef.current.value.split(",").map(tag => tag.trim())
    );
    // Clear form after submission
    postTitleRef.current.value = "";
    postBodyRef.current.value = "";
    reactionsRef.current.value = 0;
    userIdRef.current.value = "";
    tagsRef.current.value = "";
  };

  return (
    <div className='m-4 p-4'>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="userId" className="form-label">User ID</label>
          <input
            type="text"
            className="form-control"
            id="userId"
            ref={userIdRef}
            required
            placeholder='Your User ID'
          />
        </div>
        
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Post Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            ref={postTitleRef}
            required
            placeholder='Enter Post Title'
          />
        </div>
        <div className="mb-3">
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea
            className="form-control"
            id="body"
            ref={postBodyRef}
            rows="3"
            required
            placeholder='Tell us more about it'
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">Number of Reactions</label>
          <input
            type="number"
            className="form-control"
            id="reactions"
            ref={reactionsRef}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="tags" className="form-label">Enter Your Hashtags Here (Separated by Commas)</label>
          <input
            type="text"
            className="form-control"
            id="tags"
            ref={tagsRef}
          />
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
      </form>
    </div>
  );
};

export default CreatePost;

