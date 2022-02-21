import React from "react";
import { GrLocation } from "react-icons/gr";
import "./LocationPin.css";

const LocationPin = ({ text }) => {
  return (
    <div className="pin">
      <GrLocation className="pin-icon" />
      <p className="pin-text">{text}</p>
    </div>
  );
};

export default LocationPin;
