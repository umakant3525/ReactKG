import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="btn btn-primary btn-block btn-lg">{text}</button>
    </div>
  );
};

export default Button;
