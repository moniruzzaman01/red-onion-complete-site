import React, { useEffect, useState } from "react";
import "./OrderDetails.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const OrderDetails = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  let totalItem = 0;
  let totalFee = 0;
  for (const item of items) {
    totalItem += item.quantity;
    totalFee += parseFloat(item.price) * parseInt(item.quantity);
  }
  const tax = totalFee * 0.1;
  const grandTotal = totalFee + tax;

  useEffect(() => {
    fetch(`http://localhost:5000/cart?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [user]);

  const handleOrderForm = (event) => {
    event.preventDefault();
    const address =
      event.target.door.value +
      "/" +
      event.target.road.value +
      "/" +
      event.target.flat.value;
    const mobile = event.target.mobile.value;
    const order = {
      name: user.displayName,
      mobile,
      address,
      totalAmount: grandTotal,
    };
    fetch(`http://localhost:5000/orders`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          // fetch(`http://localhost:5000/cart?email=${user.email}`, {
          //   method: "delete",
          // });
          navigate(`/payment/${data.insertedId}`);
        }
      });
  };

  return (
    <div className="order-details-container container">
      <div className="order-details">
        <div className="delivery-details">
          <h2>Edit Delivery Details</h2>
          <form onSubmit={handleOrderForm}>
            <input type="text" value={user.displayName} disabled required />
            <br />
            <input
              type="text"
              name="door"
              id=""
              placeholder="Deliver to door"
              required
            />
            <br />
            <input
              type="text"
              name="road"
              id=""
              placeholder="107 Rd No 8"
              required
            />
            <br />
            <input
              type="text"
              name="flat"
              id=""
              placeholder="Flat, suite or floor"
              required
            />
            <br />
            <input
              type="text"
              name="mobile"
              id=""
              placeholder="Mobile"
              required
            />
            <br />
            <input type="submit" value="Save & Continue" />
          </form>
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
            {items.map((item, key) => (
              <div key={key} className="cart-item">
                <img src={item.img} alt="" />
                <div className="cart-item-info">
                  <p>{item.name}</p>
                  <h4>
                    $ {item.price}{" "}
                    <div className="d-inline text-secondary">
                      x <small>{item.quantity}</small>
                    </div>
                  </h4>
                  <span>Delivery free</span>
                </div>
              </div>
            ))}
            {items.length === 0 ? (
              <h3 className="d-flex justify-content-center  mt-5">
                Items not Added
              </h3>
            ) : (
              ""
            )}
          </div>
          <div className="receipt">
            <p>
              Total Item: <span>{totalItem}</span>
            </p>
            <p>
              Subtotal: <span>${totalFee}</span>
            </p>
            <p>
              Tax: <span>${tax.toFixed(2)}</span>
            </p>
            {/* <p>
              Delivery Fee: <span>$0</span>
            </p> */}
            <h4>
              Total: <span>${grandTotal.toFixed(2)}</span>
            </h4>
            {/* <button>Place Order</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
