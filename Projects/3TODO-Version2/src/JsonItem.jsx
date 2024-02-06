import React from 'react';
import TodoItem from './TodoItem';

const JsonItem = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map((elem, index) => (
        <TodoItem key={index} todoName={elem.Name} todoDate={elem.Date} />
      ))}
    </div>
  );
};

export default JsonItem;
