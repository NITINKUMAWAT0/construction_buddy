import React from 'react';
import './MarbleSingle.scss';
import { FaLocationArrow } from "react-icons/fa";
import abc from './passport_photo.jpg'
const MarbleSingle = ({ selectedMarble, onClose }) => {
  return (
    <div className="SingleMarble">
      <div className="left">
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times">Close</i> {/* Removed "Close" text */}
        </button>
        <img src={selectedMarble?.img} alt="error" />
      </div>
      <div className="right">
        <h2>{selectedMarble?.name}</h2>
        <p>Phone: +91 {selectedMarble?.number}</p>
        <p>Experience: {selectedMarble?.experience}</p>
        <p>Address: {selectedMarble?.address}</p>
        {/* Add the location URL */}
        <a href={selectedMarble?.location} className="navigation">
          <p>
            <FaLocationArrow />
            <span>Directions</span>
          </p>
        </a>
      </div>
    </div>
  );
}

export default MarbleSingle;
