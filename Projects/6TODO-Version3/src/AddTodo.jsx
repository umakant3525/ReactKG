// AddTodo.js
import React, { useState } from 'react';

const AddTodo = ({ onNewItem }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handleDate = (event) => {
    setDate(event.target.value);
  };

  function handleBtnClick() {
    onNewItem(name, date);
    setName(" ");
    setDate(" ");
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-sm-4 mb-3">
          <input type="text" className="form-control" placeholder="Enter item" aria-label="Todo item" required value={name} onChange={handleName} />
        </div>
        <div className="col-sm-3 mb-3">
          <input type="date" className="form-control" value={date} onChange={handleDate} required />
        </div>
        <div className="col-sm-2 mb-3">
          <button className="btn btn-primary btn-block" onClick={handleBtnClick}>Add Todo</button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
