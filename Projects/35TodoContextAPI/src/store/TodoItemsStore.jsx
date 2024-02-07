import React, { createContext, useReducer } from "react";

const TodoItemsContext = createContext({});

const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    case "DELETE_ITEM":
      return state.filter(item => item.Name !== action.payload.itemName || item.Date !== action.payload.key);
    default:
      return state;
  }
};

export const TodoItemsProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoReducer, [
    {
      Name: "UseReducer",
      Date: "10/10/1000"
    },
  ]);

  const addNewItem = (itemName, itemDueDate) => {
    dispatchTodoItems({ type: "ADD_ITEM", payload: { Name: itemName, Date: itemDueDate } });
  };

  const deleteItem = ({ itemName, key }) => {
    console.log(`${key} id deleted with item ${itemName}`);
    dispatchTodoItems({ type: "DELETE_ITEM", payload: { itemName, key } });
  };

  return (
    <TodoItemsContext.Provider value={{ todoItems, addNewItem, deleteItem }}>
      {children}
    </TodoItemsContext.Provider>
  );
};

export { TodoItemsContext };
