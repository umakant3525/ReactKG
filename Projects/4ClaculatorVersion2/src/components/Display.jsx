import React from "react";

const Display = ({ displayValue }) => {
  return (
    <div>
      <input type="text" className="form-control mb-3" value={displayValue} readOnly />
    </div>
  );
};

export default Display;
