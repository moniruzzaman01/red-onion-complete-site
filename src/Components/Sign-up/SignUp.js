import React from "react";
import "./SignUp.css";
import logo from "../../images/New folder/logo2.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Spineer from "../Spineer/Spineer";

const SignUp = () => {
  //firebase hook call
  const [updateProfile] = useUpdateProfile(auth);
  const [createUserWithEmailAndPass, emailPassUser, loading] =
    useCreateUserWithEmailAndPassword(auth);
  //other hooks
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //form submission handle
  const handleEmailSignup = async (event) => {
    event.preventDefault();
    //get data from input field
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    //create user and login
    await createUserWithEmailAndPass(email, password);
    //update username
    updateProfile({ displayName: name });
    //clear form
    event.target.reset();
  };

  if (emailPassUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="signup-container container">
      {loading && <Spineer />}
      <div className="signup-form">
        <div className="brand">
          <img src={logo} alt="" />
        </div>
        <form onSubmit={handleEmailSignup}>
          <input
            type="text"
            name="name"
            id="1"
            placeholder="Your Name"
            required
          />
          <br />
          <input
            type="email"
            name="email"
            id="2"
            placeholder="Your Email"
            required
          />
          <br />
          <input
            type="password"
            name="password"
            id="3"
            placeholder="Your Password"
            required
          />
          <br />
          {/* <p className="redirect">
            Have an account? <Link to="/login">Login</Link>
          </p> */}
          <input className="" type="submit" value="Signup" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
