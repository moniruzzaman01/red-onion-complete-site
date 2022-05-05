import React from "react";
import { useNavigate } from "react-router-dom";
import useGetAllData from "../../hooks/useGetAllData";

const LunchItems = () => {
  const navigate = useNavigate();
  const [lunchItems] = useGetAllData("lunch");

  return (
    <>
      <div className="items">
        {lunchItems.map((item, key) => (
          <div
            key={key}
            onClick={() => navigate("/item-details")}
            className="item"
          >
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

export default LunchItems;
