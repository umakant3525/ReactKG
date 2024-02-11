import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {

  //here subscription also setup with this setup value with store counter value 
  //It manages the subscription bu useSelector 
  const counter = useSelector(store => store.counter)
  return (
    <div>
      <p className="lead mb-4">
        counter current value  : {counter} </p>
    </div>
  );
};

export default DisplayCounter;
