import React from "react";
import "./OrderDetails.css";
import item1 from "../../images/lunch/lunch1.png";
import item2 from "../../images/lunch/lunch2.png";

const OrderDetails = () => {
  return (
    <div className="order-details-container container">
      <div className="order-details">
        <div className="delivery-details">
          <h2>Edit Delivery Details</h2>
          <input type="text" name="" id="" placeholder="Deliver to door" />
          <br />
          <input type="text" name="" id="" placeholder="107 Rd No 8" />
          <br />
          <input type="text" name="" id="" placeholder="Flat, suite or floor" />
          <br />
          <input type="text" name="" id="" placeholder="Business Name" />
          <br />
          <input
            type="text"
            name=""
            id=""
            placeholder="Add delivery instructor"
          />
          <br />
          <input type="submit" value="Save & Continue" />
        </div>
        <div className="cart-items-container">
          <div className="info">
            <p>
              From <span>Fulshan Plaza Restura GPR</span>
            </p>
            <p>Arriving in 20-30 min</p>
            <p>107 Rd No 8</p>
          </div>
          <div className="cart-items">
            <div className="cart-item">
              <img src={item1} alt="" />
              <div className="cart-item-info">
                <p>Butter Naan</p>
                <h4>$40</h4>
                <span>Delivery fee</span>
              </div>
              <div className="qnty">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>
            <div className="cart-item">
              <img src={item1} alt="" />
              <div className="cart-item-info">
                <p>Butter Naan</p>
                <h4>$40</h4>
                <span>Delivery fee</span>
              </div>
              <div className="qnty">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>
            <div className="cart-item">
              <img src={item1} alt="" />
              <div className="cart-item-info">
                <p>Butter Naan</p>
                <h4>$40</h4>
                <span>Delivery fee</span>
              </div>
              <div className="qnty">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>
            <div className="cart-item">
              <img src={item1} alt="" />
              <div className="cart-item-info">
                <p>Butter Naan</p>
                <h4>$40</h4>
                <span>Delivery fee</span>
              </div>
              <div className="qnty">
                <span>-</span>
                <span>1</span>
                <span>+</span>
              </div>
            </div>
          </div>
          <div className="receipt">
            <p>
              Total Item: <span>$129</span>
            </p>
            <p>
              Subtotal: <span>$129</span>
            </p>
            <p>
              Tax: <span>$129</span>
            </p>
            <p>
              Delivery Fee: <span>$129</span>
            </p>
            <h4>
              Total: <span>$129</span>
            </h4>
            <button>Place Order</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
