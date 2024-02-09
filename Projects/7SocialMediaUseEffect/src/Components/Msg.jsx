import React from 'react';

const Msg = ({onGetPostsClick}) => {
  return (
    <div className="text-center m-4 col p-4">
      <div className="alert alert-danger fs-4 font-weight-bold" role="alert">
        We have no posts yet! 😞
      </div>
      <button type="button" className="btn btn-primary" onClick={onGetPostsClick}>Fetch Posts From Server </button>
    </div>
  );
};

export default Msg;
