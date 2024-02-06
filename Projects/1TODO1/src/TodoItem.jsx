import React from "react";

const TodoItem = () => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-sm-4 mb-2">Buy Milk</div>
        <div className="col-sm-3 mb-2">10/10/2003</div>
        <div className="col-sm-2 mb-2">
          <button className="btn btn-sm btn-danger btn-block">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
