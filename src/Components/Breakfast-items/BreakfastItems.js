import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BreakfastItems = () => {
  const navigate = useNavigate();
  const [breakfastItems, setBreakfastItems] = useState([]);

  useEffect(() => {
    fetch("breakfast.json")
      .then((res) => res.json())
      .then((data) => setBreakfastItems(data));
  }, []);

  return (
    <>
      <div className="items">
        {breakfastItems.map((item) => (
          <div onClick={() => navigate("/item-details")} className="item">
            <div className="img-container">
              <img src={item.img} alt="" />
            </div>
            <div className="contents">
              <p>{item.name}</p>
              <span>{item.desc}</span>
              <h4>${item.price}</h4>
            </div>
          </div>
        ))}
      </div>
      <button className="btn">Checkout Your food</button>
    </>
  );
};

export default BreakfastItems;
