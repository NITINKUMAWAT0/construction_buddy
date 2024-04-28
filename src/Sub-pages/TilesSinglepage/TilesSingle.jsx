import React from "react";
import "./TilesSingle.scss";
import { FaLocationArrow } from "react-icons/fa";

const TilesSingle = ({ selectedTile, onClose }) => {
  return (
    <div className="SingleTile">
      <div className="left">
        <button className="close-button" onClick={onClose}>
          <i className="fas fa-times">Close</i>
        </button>
        <img src={selectedTile?.img} alt="error" />
      </div>
      <div className="right">
        <h2>{selectedTile?.name}</h2>
        <p>Phone: +91 {selectedTile?.number}</p>
        <p>Experience: {selectedTile?.experience}</p>
        <p>Address: {selectedTile?.address}</p>
        {/* Add the location URL */}
        <a href={selectedTile?.location} className="navigation">
          <p>
            <FaLocationArrow />
            <span>Directions</span>
          </p>
        </a>
      </div>
    </div>
  );
};

export default TilesSingle;
