// JsonItem.jsx
import React, { useContext } from 'react';
import TodoItem from './TodoItem';
import { TodoItemsContext } from './store/TodoItemsStore';

const JsonItem = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div>
      {todoItems.map((elem, index) => (
        <TodoItem
          key={index}
          todoName={elem.Name}
          todoDate={elem.Date}
          keyProp={index} 
        />
      ))}
    </div>
  );
};

export default JsonItem;
