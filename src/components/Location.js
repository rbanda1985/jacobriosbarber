import React from "react";
import GoogleMapReact from "google-map-react";
import LocationPin from "./LocationPin";
import "./Location.css";

const Location = ({ location, zoomLevel }) => {
  const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
  return (
    <div className="map-container">
      <div className="google-map">
        <h2 className="map-h2">Come See Me At Uptown Barbershop</h2>
        <h3 className="address">
          3424 Oak Lawn Ave, <br /> Dallas, Tx. 75219
        </h3>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: API_KEY
          }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Location;
