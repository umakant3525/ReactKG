// TodoItemsStore.js
import React, { createContext, useState } from "react";

const TodoItemsContext = createContext({});
const initialTodoItems = [
  {
    Name: "TODO1",
    Date: "10/10/1000"
  },
  {
    Name: "TODO2",
    Date: "20/10/2000"
  }
];

export const TodoItemsProvider = ({ children }) => {
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const addNewItem = (itemName, itemDueDate) => {
    setTodoItems([...todoItems, {
      Name: itemName,
      Date: itemDueDate
    }]);
  };

  const deleteItem = ({ itemName, key }) => {
    console.log(`${key} id deleted with item ${itemName}`);
    const updatedItems = todoItems.filter(item => item.Name !== itemName || item.Date !== key);
    setTodoItems(updatedItems);
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export { TodoItemsContext, initialTodoItems };
