import React from "react";
import List from "./List";
import ErrorMsg from "./ErrorMsg";
import Container from "./Container";
import FoodInput from "./FoodInput";

const App = () => {
  const foodItems = ["Dal1", "Chawal2", "Roti3", "Puri4", "Varan5", "Bhat"];

  function onClickEvent(item, index) {
    console.log(`${item} item is bought with index ${index}`);
  }

  return (
    <>
      <Container>
        <div className="container">
          <h1 className="text-center mt-5 mb-4">Healthy Food</h1>
          <FoodInput />
          {foodItems.length === 0 ? (
            <ErrorMsg />
          ) : (
            <List foodItems={foodItems} onClickEvent={onClickEvent} />
          )}
        </div>
      </Container>
    </>
  );
};

export default App;
