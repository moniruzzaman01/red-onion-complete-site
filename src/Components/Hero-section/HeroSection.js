import React from "react";
import "./HeroSection.css";
import banner from "../../images/New folder/bannerbackground1.png.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={banner} alt="" />
      <div className="banner-content">
        <h2>Best food waiting for your belly</h2>
        <div className="search-container">
          <input
            type="text"
            name="search"
            id=""
            placeholder="Search food items"
          />
          <input className="" type="submit" value="Search" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
