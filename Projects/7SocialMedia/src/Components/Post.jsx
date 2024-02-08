import React, { useContext } from 'react';
import { BsHeartFill, BsPersonFill } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { PostListContext } from '../store/PostListStore';


const Post = ({ post }) => {
  const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark'];
  const color = colors[Math.floor(Math.random() * colors.length)]; // Randomly select a color

  const {deletePost} = useContext(PostListContext)

  return (
    <div className={`card m-4 shadow-lg border border-${color}`}>
      <div className={`card-header d-flex justify-content-between align-items-center bg-${color} text-white position-relative`}>
        <h5 className="mb-0">{post.title}</h5>
        <span className="position-absolute top-0 start-100 translate-middle p-2 btn " onClick={()=>deletePost(post.id)}>
    <AiOutlineCloseCircle size={30} color="red" />
</span>
      </div>
      <div className="card-body">
        <p className="card-text">{post.body}</p>
        <ul className="list-unstyled">
          <li className="mb-2">
            <BsPersonFill size={18} className="text-primary" /> 
            <span className="ms-2">User ID: {post.userId}</span>
          </li>
          <li className="mb-2">
            <BsHeartFill size={18} className="text-danger" /> Reactions: {post.reactions}
            <span className="ms-2"></span>
          </li>
          <li className="mb-2">
            <span>Tags:</span>
            {post.tags.map((tag, index) => (
              <button key={index} className={`btn btn-sm btn-outline-${color} rounded-pill mx-1 pointer-events-none`}>
                {tag}
              </button>
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
