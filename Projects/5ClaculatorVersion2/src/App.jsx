import React, { useState } from 'react';
import Display from './components/Display';
import BtnContainer from './components/BtnContainer';

const App = () => {
  const [calval, setCalval] = useState("");

  const onBtnClick = (btnText) => {
    switch (btnText) {
      case "C":
        setCalval("");
        break;
      case "b": // Handle backspace
        setCalval(prevCalval => prevCalval.slice(0, -1)); // Remove the last character from the string
        break;
      case "=":
        try {
          setCalval(eval(calval));
        } catch (error) {
          setCalval("Error");
        }
        break;
      default:
        setCalval(prevCalval => prevCalval + btnText);
        break;
    }
  }

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-3 text-center border border-secondary p-2 rounded">
        <Display displayValue={calval} />
        <BtnContainer onBtnClick={onBtnClick} />
      </div>
    </div>
  );
};

export default App;
