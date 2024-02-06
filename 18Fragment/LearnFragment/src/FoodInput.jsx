import React from "react";

const FoodInput = () => {

    function handleChange(event){
        console.log(event);
        console.log(event.target.value);
    }
  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-md-6 mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Food Item here"
            onChange={(event) => {
             handleChange(event)
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default FoodInput;
