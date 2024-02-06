import React from "react";
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import JsonItem from "./JsonItem";

const App = () => {

  const todoItems = [
    {
      Name: "TODO1",
      Date: "10/10/1000"
    },
    {
      Name: "TODO2",
      Date: "20/10/2000"
    }
  ];


  return (
    <div className="container">
      <AppName />
      <AddTodo />
      <JsonItem todoItems={todoItems}/>      
    </div>
  );
};

export default App;
