import React from "react";

const BtnContainer = ({ onBtnClick }) => {
  // Define an array of button values
  const buttons = [
    "C", "b", "=",
    "7", "8", "9",
    "4", "5", "6",
    "1", "2", "3",
    "0", ".", "+",
    "-", "*", "/"
  ];

  return (
    <div className="container mt-2">
      <div className="row">
        {buttons.map((text, index) => (
          <div key={index} className="col-4 mb-2">
            <button className="btn btn-primary btn-lg btn-block" onClick={() => onBtnClick(text)}>{text}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BtnContainer;
