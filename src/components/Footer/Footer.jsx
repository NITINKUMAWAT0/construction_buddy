import React from "react";
import "./Footer.scss";
// import logo from "../../img/Logo.png";
// import payment from "../../img/payment.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Products</h1>
          <span>Tiles</span>
          <span>Cement</span>
          <span>Steel</span>
          <span>Marbles and Granites</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            At Construction buddy, we're more than just builders – we're
            creators of spaces where dreams come to life. With a passion for
            craftsmanship and a dedication to excellence!From towering
            skyscrapers to cozy residential homes, our team of experienced
            architects, engineers, and craftsmen work tirelessly to bring
            visions to reality.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            <p>justabhiabhi123@gmail.com</p>
            <p>+91 9057204034</p>
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
       
          <span className="copyright">
            © Copyright 2024. All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
