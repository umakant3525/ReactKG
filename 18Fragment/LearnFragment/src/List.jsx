import React from "react";
import styles from "./List.module.css";

const List = ({ foodItems }) => {
  
  function eventHandle(event, item, index) {
    console.log(event)
    console.log(`${item} item is bought with index ${index}`);
  }

  return (
    <div>
      <ul className="list-group">
        {foodItems.map((item, index) => {
          return (
            <li key={index} className={`list-group-item ${styles.listItem}`}>
              {index + " " + item}
              <button
                type="button"
                className={`btn btn-success ${styles.mybtn}`}
                onClick={(event) => eventHandle(event ,item, index)}
              >
                Buy
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
