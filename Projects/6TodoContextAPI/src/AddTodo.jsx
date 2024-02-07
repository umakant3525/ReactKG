// AddTodo.jsx
import React, { useRef, useContext } from 'react';
import { BiAddToQueue } from "react-icons/bi";
import { TodoItemsContext } from "./store/TodoItemsStore";

const AddTodo = () => {
  const { addNewItem } = useContext(TodoItemsContext);
  const todoNameElement = useRef();
  const todoDateElement = useRef();

  function handleBtnClick(event) {
    event.preventDefault();
    const name = todoNameElement.current.value;
    const date = todoDateElement.current.value;
    addNewItem(name, date);
    todoNameElement.current.value = '';
    todoDateElement.current.value = '';
  }

  return (
    <div>
      <form className="row justify-content-center" onSubmit={handleBtnClick}>
        <div className="col-sm-4 mb-3">
          <input type="text" className="form-control" placeholder="Enter item" aria-label="Todo item" required ref={todoNameElement} />
        </div>
        <div className="col-sm-3 mb-3">
          <input type="date" className="form-control" required ref={todoDateElement} />
        </div>
        <div className="col-sm-2 mb-3">
          <button className="btn btn-primary btn-block" type='submit'><BiAddToQueue /></button>
        </div>
      </form>
    </div>
  );
};

export default AddTodo;
