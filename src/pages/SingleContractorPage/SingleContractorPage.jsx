// SingleContractorPage.jsx
import React from "react";
import "./SingleContractorPage.scss";
import {FaLocationArrow} from 'react-icons/fa';

const SingleContractorPage = ({ selectedContractor, onClose }) => {
  return (
    <div className="SingleContractor">
        <div className="left">
        <button className="close-button" onClick={onClose}>
        <i className="fas fa-times">Close</i> {/* Cross icon */}
      </button>
      <img src={selectedContractor?.img} alt='error'/>
        </div>
     <div className="right">
     <h2>{selectedContractor?.name}</h2>
      <p>Phone: +91 {selectedContractor?.number}</p>
      <p>Experience: {selectedContractor?.experience}</p>
      <p>Address: {selectedContractor?.address}</p>
      <p>Details: {selectedContractor?.details}</p>
      <a href={selectedContractor?.location} className="navgation">
  
    <FaLocationArrow/>
    <span>Directions</span>

</a>

     </div>
      


    </div>
  );
};

export default SingleContractorPage;
