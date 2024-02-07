
// TodoItem.jsx
import React, { useContext } from "react";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from './store/TodoItemsStore';

const TodoItem = ({ todoName, todoDate }) => {
  const { deleteItem } = useContext(TodoItemsContext);

  const handleDeleteClick = () => {
    deleteItem({ itemName: todoName, key: todoDate });
  };

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-sm-4 mb-2">{todoName}</div>
        <div className="col-sm-3 mb-2">{todoDate}</div>
        <div className="col-sm-2 mb-2">
          <button className="btn btn-danger btn-block" onClick={handleDeleteClick}><MdDeleteForever /></button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
