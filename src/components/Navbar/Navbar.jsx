import React from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left">Construction Buddy</div>
      <div className="right">
      <div className="item">
          <Link to="/">Home</Link>
        </div>
        <div className="item">
          <Link to="/about">About</Link>
        </div>
        <div className="item">
          <Link to="/contact-us">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
