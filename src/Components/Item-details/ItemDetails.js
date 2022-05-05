import React, { useEffect, useState } from "react";
import "./ItemDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import slide1 from "../../images/breakfast/breakfast1.png";
import slide2 from "../../images/breakfast/breakfast2.png";
import { useNavigate, useParams } from "react-router-dom";

const ItemDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState({});

  useEffect(() => {
    fetch("http://localhost:5000/breakfastById", {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ id }),
    })
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, [id]);

  return (
    <div className="item-details-container container">
      <div className="item-details">
        <div className="item-info">
          <h2>{item.name}</h2>
          <span>{item.desc}</span>
          <div className="price-and-qnty">
            <h3>${item.price}</h3>
            <div className="qnty">
              <span>-</span>
              <span>{item.quantity}</span>
              <span>+</span>
            </div>
          </div>
          <button onClick={() => navigate("/order-details")}>
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
