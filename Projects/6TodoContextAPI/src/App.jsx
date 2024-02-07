import React from "react";
import AppName from "./AppName";
import AddTodo from "./AddTodo";
import JsonItem from "./JsonItem";
import Msg from "./Msg";
import { TodoItemsProvider } from "./store/TodoItemsStore";

const App = () => {
  return (
    <TodoItemsProvider>
      <div className="container">
        <AppName />
        <AddTodo />
        <Msg />
        <JsonItem />
      </div>
    </TodoItemsProvider>
  );
};

export default App;
