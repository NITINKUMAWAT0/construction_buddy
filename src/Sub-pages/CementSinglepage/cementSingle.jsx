// CementSingle.js
import React from "react";
import "./cementSingle.scss";
import { FaLocationArrow } from "react-icons/fa";

const CementSingle = ({ selectedCement, onClose }) => {
  return (
    <div className="SingleCement">
      <div className="left">
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times">Close</i>
        </button>
        <img src={selectedCement?.img} alt="error" />
      </div>
      <div className="right">
        <h2>{selectedCement?.name}</h2>
        <p>Phone: +91 {selectedCement?.number}</p>
        <p>Experience: {selectedCement?.experience}</p>
        <p>Address: {selectedCement?.address}</p>
        {/* Add the location URL */}
        <a href={selectedCement?.location} className="navigation">
        
            <FaLocationArrow />
            <span>Directions</span>
    
        </a>
      </div>
    </div>
  );
};

export default CementSingle;
