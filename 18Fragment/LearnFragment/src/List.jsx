import React, { useState } from "react";
import styles from "./List.module.css";

const List = ({ foodItems }) => {
  const [purchasedItems, setPurchasedItems] = useState(Array(foodItems.length).fill(false));

  function onClickEvent(index) {
    const updatedPurchasedItems = [...purchasedItems];
    updatedPurchasedItems[index] = !updatedPurchasedItems[index];
    setPurchasedItems(updatedPurchasedItems);
  }

  return (
    <div>
      <ul className="list-group">
        {foodItems.map((item, index) => (
          <li
            key={index}
            className={`list-group-item ${styles.listItem} ${purchasedItems[index] ? 'active' : ''}`}
          >
            {index + " " + item}
            <button
              type="button"
              className={`btn ${purchasedItems[index] ? 'btn-warning' : 'btn-success'} ${styles.mybtn} `}
              onClick={() => onClickEvent(index)}
            >
              {purchasedItems[index] ? 'Purchased' : 'Buy'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
