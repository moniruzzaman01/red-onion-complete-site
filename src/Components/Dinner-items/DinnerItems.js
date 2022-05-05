import React from "react";
import dinner1 from "../../images/dinner/dinner1.png";
import dinner2 from "../../images/dinner/dinner2.png";
import dinner3 from "../../images/dinner/dinner3.png";
import dinner4 from "../../images/dinner/dinner4.png";
import dinner5 from "../../images/dinner/dinner5.png";
import dinner6 from "../../images/dinner/dinner6.png";

const DinnerItems = () => {
  return (
    <>
      <div className="items">
        <div className="item">
          <div className="img-container">
            <img src={dinner1} alt="" />
          </div>
          <div className="contents">
            <p>Healthy Meal Plan</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={dinner2} alt="" />
          </div>
          <div className="contents">
            <p>Fried Chicken Bento</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={dinner3} alt="" />
          </div>
          <div className="contents">
            <p>Tarragon-Rubbed-Salmon</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={dinner4} alt="" />
          </div>
          <div className="contents">
            <p>Indian Lunch</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={dinner5} alt="" />
          </div>
          <div className="contents">
            <p>Beef Steak</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={dinner6} alt="" />
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

export default DinnerItems;
