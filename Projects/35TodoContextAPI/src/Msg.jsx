// Msg.jsx
import React, { useContext } from 'react';
import { TodoItemsContext } from './store/TodoItemsStore';

const Msg = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <>
      {todoItems.length === 0 &&        
        <div className="text-center mt-2 ">
          <div className="alert alert-success" role="alert">
            You don't have work to do! Enjoy your day...
          </div>
        </div>
      }
    </>
  );
};

export default Msg;
