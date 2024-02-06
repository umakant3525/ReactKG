import React from 'react'

const AddTodo = () => {
  return (
    <div>
         <div className="row justify-content-center">
        <div className="col-sm-4 mb-3">
          <input type="text" className="form-control" placeholder="Enter item" aria-label="Todo item" />
        </div>
        <div className="col-sm-3 mb-3">
          <input type="date" className="form-control" />
        </div>
        <div className="col-sm-2 mb-3">
          <button className="btn btn-primary btn-block">Add Todo</button>
        </div>
      </div>
    </div>
  )
}

export default AddTodo