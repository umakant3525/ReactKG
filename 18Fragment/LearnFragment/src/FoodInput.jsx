import React from "react";

const FoodInput = ({ handleonKeyDown }) => {
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Food Item here"
            onKeyDown={(event) => {
              handleonKeyDown(event);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodInput;