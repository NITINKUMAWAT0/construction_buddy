// SingleContractorPage.jsx
import React from "react";
import "./SingleContractorPage.scss";

const SingleContractorPage = ({ selectedContractor, onClose }) => {
  return (
    <div className="SingleContractor">
      <button className="close-button" onClick={onClose}>
        <i className="fas fa-times"></i> {/* Cross icon */}
      </button>
      <h2>{selectedContractor?.name}</h2>
      <p>Phone: +91 {selectedContractor?.number}</p>
      <p>Experience: {selectedContractor?.experience}</p>
      <p>Address: {selectedContractor?.address}</p>
      <p>Details: {selectedContractor?.details}</p>
      <img src={selectedContractor?.img} alt={selectedContractor?.name} />
    </div>
  );
};

export default SingleContractorPage;
