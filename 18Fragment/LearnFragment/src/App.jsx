import React from "react";
import List from "./List";
import ErrorMsg from "./ErrorMsg";

const App = () => {
const foodItems = ["Dal1", "Chawal2", "Roti3", "Puri4", "Varan5", "Bhat"];

//  const foodItems = [];


  return (
    <div className="container">
      <h1 className="text-center mt-5 mb-4">Healthy Food</h1>
      {foodItems.length === 0 ? <ErrorMsg/> : <List foodItems={foodItems}/>}
    </div>
  );
};

export default App;
