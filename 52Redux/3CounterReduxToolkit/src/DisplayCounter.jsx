import React from "react";
import { useSelector } from "react-redux";

const DisplayCounter = () => {

  //here we store use tolkit
  const {counterVal}  = useSelector((store) => store.counter)
  return (
    <div>
      <p className="lead mb-4">
        counter current value  : {counterVal} </p>
    </div>
  );
};

export default DisplayCounter;
