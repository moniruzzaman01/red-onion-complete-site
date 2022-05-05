import React, { useState } from "react";
import BreakfastItems from "../Breakfast-items/BreakfastItems";
import DinnerItems from "../Dinner-items/DinnerItems";
import LunchItems from "../Lunch-items/LunchItems";
import "./ItemSection.css";

const ItemSection = () => {
  const [selectedItem, setSelectedItem] = useState("breakfast");
  return (
    <div className="item-section-container container">
      <div className="titles">
        <p
          className={selectedItem === "breakfast" ? "selected" : ""}
          onClick={() => {
            setSelectedItem("breakfast");
          }}
        >
          Breakfast
        </p>
        <p
          className={selectedItem === "lunch" ? "selected" : ""}
          onClick={() => setSelectedItem("lunch")}
        >
          Lunch
        </p>
        <p
          className={selectedItem === "dinner" ? "selected" : ""}
          onClick={() => setSelectedItem("dinner")}
        >
          Dinner
        </p>
      </div>
      {selectedItem === "breakfast" && <BreakfastItems />}
      {selectedItem === "lunch" && <LunchItems />}
      {selectedItem === "dinner" && <DinnerItems />}
    </div>
  );
};

export default ItemSection;
