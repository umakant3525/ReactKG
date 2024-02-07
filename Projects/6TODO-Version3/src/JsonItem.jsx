// JsonItem.js
import React from 'react';
import TodoItem from './TodoItem';

const JsonItem = ({ todoItems, onDeleteClick }) => {
  return (
    <div>
      {todoItems.map((elem, index) => (
        <TodoItem
          onDeleteClick={onDeleteClick}
          key={index}
          keyProp={index} // Pass the key prop here
          todoName={elem.Name}
          todoDate={elem.Date}
        />
      ))}
    </div>
  );
};

export default JsonItem;
