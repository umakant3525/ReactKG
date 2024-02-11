import React, { useRef } from "react";
import { useDispatch } from "react-redux";

const Controls = () => {
  const dispatch = useDispatch();
  const inputElement = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({ type: "ADD", payload: { num: inputElement.current.value } });

    inputElement.current.value = ""; // Clear the input field
  };

  const handleSub = () => {
    dispatch({ type: "SUB", payload: { num: inputElement.current.value } });

    inputElement.current.value = ""; // Clear the input field
  };

  const handlePrivacyToggle = () => {
    dispatch({ type: "PRIVACY_TOGGLE" })
  };

  return (
    <div>
      <div className="d-grid gap-4 d-sm-flex justify-content-sm-center ">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-info"
          onClick={handleDecrement}
        >
          -1
        </button>
        <button
          type="button"
          className="btn btn-outline-warning"
          onClick={handlePrivacyToggle}
        >
          Privacy Toggle
        </button>
      </div>
      <div className="d-grid gap-4 d-sm-flex justify-content-sm-center mt-4  ">
        <div className="col-auto">
          <input
            type="number"
            className="form-control"
            id="number-input"
            ref={inputElement}
            placeholder="Enter Number"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-success mb-3" onClick={handleAdd}>
            Add
          </button>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger mb-3" onClick={handleSub}>
            Sub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Controls;
