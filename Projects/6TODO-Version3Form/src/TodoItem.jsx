// TodoItem.js
import React from "react";
import { MdDeleteForever } from "react-icons/md";


const TodoItem = ({ todoName, todoDate, onDeleteClick, keyProp }) => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-sm-4 mb-2">{todoName}</div>
        <div className="col-sm-3 mb-2">{todoDate}</div>
        <div className="col-sm-2 mb-2">
          <button className="btn btn btn-danger btn-block" onClick={() => onDeleteClick({ itemName: todoName, key: todoDate })}><MdDeleteForever/></button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
