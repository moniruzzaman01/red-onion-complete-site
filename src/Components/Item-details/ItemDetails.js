import React from "react";
import "./ItemDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import itemDetailsImg from "../../images/dinner/dinner5.png";
import slide1 from "../../images/breakfast/breakfast1.png";
import slide2 from "../../images/breakfast/breakfast2.png";
import { useNavigate } from "react-router-dom";

const ItemDetails = () => {
  const navigate = useNavigate();

  return (
    <div className="item-details-container container">
      <div className="item-details">
        <div className="item-info">
          <h2>Light Breakfast</h2>
          <span>
            Gay one the what walk then she. Demesne mention promise you justice
            arrived way. Amazing foods are Or and increasing to in especially
            inquietude companions acceptance admiration. Outweight it families
            distance wandered ye
          </span>
          <div className="price-and-qnty">
            <h3>$55</h3>
            <div className="qnty">
              <span>-</span>
              <span>1</span>
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
          <img src={itemDetailsImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
