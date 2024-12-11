import React from "react";
import "../styles/style.css";
import Logo from "../assets/amazon.png";

const Navbar = () => {
  return (
    <div className="outer-outer-div">
      <div className="outer-inner-div">
        <div className="inner-logo">
          <img src={Logo} alt="logo" className="logo-main" />
        </div>
        <div className="inner-links">
          <div className="inner-inner-links">About us</div>
          <div className="inner-inner-links">Sign-In</div>
          <div className="inner-inner-links">My-cart</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
