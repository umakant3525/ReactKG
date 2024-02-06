import React from "react";
import Button from "./Button";

const BtnContainer = () => {
  // Define an array of button values
  const buttons = [
    "C", ".", "=",
    "7", "8", "9",
    "4", "5", "6",
    "1", "2", "3",
    "0", "00", "+",
    "*", "/", "-"
  ];
  

  return (
    <div>
      {buttons.map((elem, index) => (
        // Wrap every three buttons in a row
        index % 3 === 0 && (
          <div key={index} className="row mt-2">
            <div className="col">
              <Button text={buttons[index]} />
            </div>
            <div className="col">
              <Button text={buttons[index + 1]} />
            </div>
            <div className="col">
              <Button text={buttons[index + 2]} />
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default BtnContainer;
