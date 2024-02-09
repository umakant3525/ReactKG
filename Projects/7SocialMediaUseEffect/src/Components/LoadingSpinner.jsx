import React from "react";

const LoadingSpinner = () => {
  return (
    <>
     
      <div className="text-center mt-4 p-4 ">
        <div className="spinner-border text-primary " role="status" style={{width : "5rem",height : "5rem"}} >
          <span className="visually-hidden">Loading...</span>
        </div>
        <div>Data Fetching ....... </div>
      </div>
    </>
  );
};

export default LoadingSpinner;
