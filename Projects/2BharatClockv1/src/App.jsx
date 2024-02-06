import React from 'react';
import Heading from './components/Heading';
import Slogan from './components/Slogan';
import Time from './components/Time';

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Heading />
          <Slogan />
          <Time />
        </div>
      </div>
    </div>
  );
};

export default App;
