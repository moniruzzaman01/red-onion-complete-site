import React, { useEffect, useState } from "react";
import "./OrderDetails.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const OrderDetails = () => {
  const [user] = useAuthState(auth);
  const [quantity, setQuantity] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/cart?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  const handleIncrease = () => {
    console.log("inc");
  };
  const handleDecrease = () => {
    console.log("dec");
  };

  return (
    <div className="order-details-container container">
      <div className="order-details">
        {/* <div className="delivery-details">
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
        </div> */}
        <div style={{ width: "500px" }} className="cart-items-container">
          <div className="info">
            <p>
              From <span>Fulshan Plaza Restura GPR</span>
            </p>
            <p>Arriving in 20-30 min</p>
            <p>107 Rd No 8</p>
          </div>
          <div className="cart-items">
            {items.map((item, key) => (
              <div key={key} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <p>{item.name}</p>
                  <h4>$ {item.price}</h4>
                  <span>Delivery free</span>
                </div>
                <div className="qnty">
                  <span onClick={handleDecrease}>-</span>
                  <span>{item.quantity}</span>
                  <span onClick={handleIncrease}>+</span>
                </div>
              </div>
            ))}
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
              Delivery Fee: <span>$0</span>
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
