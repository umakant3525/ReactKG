import React from 'react';
import Display from './components/Display';
import BtnContainer from './components/BtnContainer';

const App = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="col-md-3 text-center border border-secondary p-2 rounded ">
        <Display />
        <BtnContainer />
      </div>
    </div>
  );
};

export default App;
