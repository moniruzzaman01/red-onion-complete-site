import React, { useEffect } from "react";
import "./Login.css";
import logo from "../../images/New folder/logo2.png";
import { useLocation, useNavigate } from "react-router-dom";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spineer from "../Spineer/Spineer";

const Login = () => {
  //firebase hook call
  const [authUser] = useAuthState(auth);
  const [signInWithEmailAndPass, user, loading] =
    useSignInWithEmailAndPassword(auth);
  //ohter hooks
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //login form submision handle
  const handleLoginForm = async (event) => {
    event.preventDefault();

    //get data from form
    const email = event.target.email.value;
    const password = event.target.password.value;
    //login
    await signInWithEmailAndPass(email, password);
    //clear form data
    event.target.reset();
  };

  useEffect(() => {
    if (user || authUser) {
      navigate(from, { replace: true });
    }
  }, [navigate, from, authUser, user]);

  return (
    <div className="login-container container">
      {loading && <Spineer />}
      <div className="login-form">
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <form onSubmit={handleLoginForm}>
          <input type="email" name="email" id="4" placeholder="Your Email" />
          <br />
          <input
            type="password"
            name="password"
            id="5"
            placeholder="Your Password"
          />
          <br />
          {/* <p className="redirect">
            New in RedOnion? <Link to="/signup">Create an account</Link>
          </p> */}
          <input className="" type="submit" value="Login" />
        </form>
      </div>
    </div>
  );
};

export default Login;
