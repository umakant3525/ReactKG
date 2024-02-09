import React, { useState, useEffect } from 'react';

const Time = () => {

  let currentTime = new Date();

  const timestring = currentTime.toLocaleTimeString();
  const datestring = currentTime.toLocaleDateString();

  console.log(timestring)

  return (
    <div className="text-center">
      <h3 className="text-success">Current Time is: {timestring}</h3>
      <h3 className="text-primary">Current Date is: {datestring}</h3>
    </div>
  );
};

export default Time;
