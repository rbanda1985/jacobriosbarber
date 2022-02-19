import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-opening">
        <div className="first-sentence">
          <p>Best Haircuts In Dallas</p>
        </div>
        <div className="second-sentence">
          <p>
            Styled Haircuts <br />
            For The Best Version Of Yourself
          </p>
        </div>
        <div className="third-sentence">
          <p>
            Please click the buttons below for location and booking information.
          </p>
        </div>
        <div className="btn-group">
          <Link to="/location">
            <button className="location-btn btn-dark">Location</button>
          </Link>
          <Link to="/services">
            <button className="book-btn btn-dark">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
