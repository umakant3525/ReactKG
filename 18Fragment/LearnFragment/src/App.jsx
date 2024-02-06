import React, { useState } from "react";
import List from "./List";
import ErrorMsg from "./ErrorMsg";
import Container from "./Container";
import FoodInput from "./FoodInput";

const App = () => {
  const [foodItems, setFoodItems] = useState([]);

  function handleonKeyDown(event) {
    if (event.key === "Enter") {
      const newItem = event.target.value;
      setFoodItems(prevItems => [...prevItems, newItem]);
      event.target.value = "";
    }
  }

  return (
    <Container>
      <div className="container">
        <h1 className="text-center mt-5 mb-4">Healthy Food</h1>
        <FoodInput handleonKeyDown={handleonKeyDown} />
        {foodItems.length === 0 ? (
          <ErrorMsg />
        ) : (
          <List foodItems={foodItems}/>
        )}
      </div>
    </Container>
  );
};

export default App;
