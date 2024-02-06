import React from "react";

const TodoItem = ({todoName , todoDate}) => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-sm-4 mb-2">{todoName}</div>
        <div className="col-sm-3 mb-2">{todoDate}</div>
        <div className="col-sm-2 mb-2">
          <button className="btn btn-sm btn-danger btn-block">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
