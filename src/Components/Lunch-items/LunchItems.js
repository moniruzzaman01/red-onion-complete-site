import React from "react";
import lunch1 from "../../images/lunch/lunch1.png";
import lunch2 from "../../images/lunch/lunch2.png";
import lunch3 from "../../images/lunch/lunch3.png";
import lunch4 from "../../images/lunch/lunch4.png";
import lunch5 from "../../images/lunch/lunch5.png";
import lunch6 from "../../images/lunch/lunch6.png";

const LunchItems = () => {
  return (
    <>
      <div className="items">
        <div className="item">
          <div className="img-container">
            <img src={lunch1} alt="" />
          </div>
          <div className="contents">
            <p>Healthy Meal Plan</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={lunch2} alt="" />
          </div>
          <div className="contents">
            <p>Fried Chicken Bento</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={lunch3} alt="" />
          </div>
          <div className="contents">
            <p>Tarragon-Rubbed-Salmon</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={lunch4} alt="" />
          </div>
          <div className="contents">
            <p>Indian Lunch</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={lunch5} alt="" />
          </div>
          <div className="contents">
            <p>Beef Steak</p>
            <span>How we dream about our future</span>
            <h4>$23.99</h4>
          </div>
        </div>
        <div className="item">
          <div className="img-container">
            <img src={lunch6} alt="" />
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

export default LunchItems;
