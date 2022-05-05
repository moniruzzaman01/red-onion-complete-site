import React from "react";
import { useNavigate } from "react-router-dom";
import breakfast1 from "../../images/breakfast/breakfast1.png";
import breakfast2 from "../../images/breakfast/breakfast2.png";
import breakfast3 from "../../images/breakfast/breakfast3.png";
import breakfast4 from "../../images/breakfast/breakfast4.png";
import breakfast5 from "../../images/breakfast/breakfast5.png";
import breakfast6 from "../../images/breakfast/breakfast6.png";

const BreakfastItems = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="items">
        <div onClick={() => navigate("/item-details")} className="item">
          <div className="img-container">
            <img src={breakfast1} alt="" />
          </div>
          <div className="contents">
            <p>Healthy Meal Plan</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={breakfast2} alt="" />
          </div>
          <div className="contents">
            <p>Fried Chicken Bento</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={breakfast3} alt="" />
          </div>
          <div className="contents">
            <p>Tarragon-Rubbed-Salmon</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={breakfast4} alt="" />
          </div>
          <div className="contents">
            <p>Indian Lunch</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={breakfast5} alt="" />
          </div>
          <div className="contents">
            <p>Beef Steak</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={breakfast6} alt="" />
          </div>
          <div className="contents">
            <p>Honey-Soy-Glazed Salmon with Peppers</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
      </div>
      <button className="btn">Checkout Your food</button>
    </>
  );
};

export default BreakfastItems;
