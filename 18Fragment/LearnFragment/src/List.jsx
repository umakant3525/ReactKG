import React from "react";
import styles from "./List.module.css";

const List = ({ foodItems }) => {
  return (
    <div>
      <ul className="list-group">
        {foodItems.map((item, index) => {
          return (
            <li key={index} className={`list-group-item ${styles.listItem}`}>
              {index + " " + item}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
