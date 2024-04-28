// CementSingle.js
import React from "react";
import "./SingleArc.scss";
import { FaLocationArrow } from "react-icons/fa";

const SingleArc = ({ selectedArc, onClose }) => {
  return (
    <div className="SingleArc">
      <div className="left">
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times">Close</i>
        </button>
        <img src={selectedArc?.img} alt="error" />
      </div>
      <div className="right">
        <h2>{selectedArc?.name}</h2>
        <p>Phone: +91 {selectedArc?.number}</p>
        <p>Experience: {selectedArc?.experience}</p>
        <p>Address: {selectedArc?.address}</p>
        {/* Add the location URL */}
        <a href={selectedArc?.location} className="navigation">
          
            <FaLocationArrow />
            <span>Directions</span>
        </a>
      </div>
    </div>
  );
};

export default SingleArc;
