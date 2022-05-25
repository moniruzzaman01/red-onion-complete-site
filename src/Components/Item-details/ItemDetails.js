import React, { useEffect, useState } from "react";
import "./ItemDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import slide1 from "../../images/breakfast/breakfast1.png";
import slide2 from "../../images/breakfast/breakfast2.png";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const ItemDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:5000/itemById", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => {
        setItem(data);
      });
  }, [id, navigate]);

  const handleAddBtn = () => {
    item["email"] = user.email;
    fetch("http://localhost:5000/cart", {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 1) {
          toast("item modified");
          navigate("/order-details");
        }
        if (data.upsertedCount === 1) {
          toast("item added to cart");
          navigate("/order-details");
        }
      });
  };

  const handleIncrease = () => {
    const newItem = { ...item };
    const qnty = parseInt(item["quantity"]) || 0;
    newItem["quantity"] = qnty + 1;
    setItem(newItem);
  };
  const handleDecrease = () => {
    const newItem = { ...item };
    const qnty = parseInt(item["quantity"]) || 0;
    if (qnty > 1) {
      newItem["quantity"] = qnty - 1;
      setItem(newItem);
    }
  };

  return (
    <div className="item-details-container container">
      <div className="item-details">
        <div className="item-info">
          <h2>{item.name}</h2>
          <span>{item.desc}</span>
          <div className="price-and-qnty">
            <h3>${item.price}</h3>
            <div className="qnty">
              <span onClick={handleDecrease}>-</span>
              <span>{item.quantity}</span>
              <span onClick={handleIncrease}>+</span>
            </div>
          </div>
          <button onClick={handleAddBtn}>
            <FontAwesomeIcon className="icon" icon={faShoppingCart} />
            Add
          </button>
          <div className="img-slider">
            <div className="img">
              <img src={slide1} alt="" />
            </div>
            <div className="img">
              <img src={slide2} alt="" />
            </div>
          </div>
        </div>
        <div className="item-img">
          <img src={item.img} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
