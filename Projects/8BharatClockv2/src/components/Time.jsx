import React, { useState, useEffect } from 'react';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    console.log("Interval has been setup ")
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {clearInterval(timerID);
    console.log("cancel the interval");
    }
  }, []);

  const timestring = currentTime.toLocaleTimeString();
  const datestring = currentTime.toLocaleDateString();

  console.log(timestring);

  return (
    <div className="text-center">
      <h3 className="text-success">Current Time is: {timestring}</h3>
      <h3 className="text-primary">Current Date is: {datestring}</h3>
    </div>
  );
};

export default Time;
