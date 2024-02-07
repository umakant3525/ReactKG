// App.js
import React, { useState } from "react";
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import JsonItem from "./JsonItem";
import Msg from "./Msg";

const App = () => {
  const oldTodoItems = [
    {
      Name: "TODO1",
      Date: "2024-02-03"
    },
    {
      Name: "TODO2",
      Date: "2024-01-04"
    }
  ];

  const [todoItems, setTodoItems] = useState(oldTodoItems);

  const handleNewItem = (itemName, itemDueDate) => {
    // console.log(`${itemName} added with ${itemDueDate}`);
    // const newTodoItems = [...todoItems, {
    //   Name: itemName,
    //   Date: itemDueDate
    // }];
    // setTodoItems(newTodoItems);
    
    
    setTodoItems( (currentValue) => [...currentValue, {
      Name: itemName,
      Date: itemDueDate
    }]);
  };

  const handleDeleteItem = ({ itemName, key }) => {
    console.log(`${key} id deleted with item ${itemName}`);
    const updatedItems = todoItems.filter(item => item.Name !== itemName || item.Date !== key);
    setTodoItems(updatedItems);
  };

  return (
    <div className="container">
      <AppName />
      <AddTodo onNewItem={handleNewItem} />
      {todoItems.length === 0 ? <Msg /> : <JsonItem todoItems={todoItems} onDeleteClick={handleDeleteItem} />}
    </div>
  );
};

export default App;
