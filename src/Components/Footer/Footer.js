import React from "react";
import "./Footer.css";
import logo from "../../images/New folder/logo2.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-items container">
        <div className="left-footer">
          <div className="brand">
            <img src={logo} alt="" />
          </div>
          <div className="copyright">
            <span>Copyright@2020 Moniruzzaman</span>
          </div>
        </div>
        <div className="right-footer">
          <div className="top">
            <div className="left">
              <Link to="/">About Online food</Link>
              <Link to="/">Read our blog</Link>
              <Link to="/">Sign up to deliver</Link>
              <Link to="/">Add you restrurant</Link>
            </div>
            <div className="right">
              <Link to="/">Get help</Link>
              <Link to="/">Read FAQs</Link>
              <Link to="/">View all cities</Link>
              <Link to="/">Restrurant near me</Link>
            </div>
          </div>
          <div className="bottom">
            <Link to="/">Privacy Policy</Link>
            <Link to="/">Terms of Use</Link>
            <Link to="/">Pricing</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
