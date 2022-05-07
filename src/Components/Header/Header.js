import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../images/New folder/logo2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [authUser] = useAuthState(auth);
  const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="brand">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
      </div>
      <div className="links">
        <div
          onClick={() => navigate("/order-details")}
          className="icon shopping"
        >
          <FontAwesomeIcon icon={faShoppingCart} />
        </div>
        {authUser ? (
          <div onClick={() => signOut(auth)} className="icon">
            {authUser.displayName.split(" ")[0]}{" "}
            <FontAwesomeIcon icon={faSignOut} />
          </div>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <button onClick={() => navigate("/signup")}>Sign up</button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Header;
