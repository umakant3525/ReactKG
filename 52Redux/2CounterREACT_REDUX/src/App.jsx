import React from 'react';
import Header from './Header';
import DisplayCounter from './DisplayCounter';
import Container from './Container';
import Controls from './Controls';

const App = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 px-4 py-4 text-center ">
      <Container>
        <Header />
        <div className="col-lg-8 mx-auto">
          <DisplayCounter />
          <Controls/>  
        </div>
      </Container>
    </div>
  );
};

export default App;
