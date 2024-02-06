import React from "react";
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const App = () => {
  return (
    <div className="container">
      <AppName />
      <AddTodo />
      <TodoItem />
      <TodoItem />
      <TodoItem />
    </div>
  );
};

export default App;
