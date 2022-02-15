import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container className="location-info">
          <span className="location">Location</span>

          <span className="location">Uptown Barbershop</span>

          <span className="location">3424 Oak Lawn Ave,</span>

          <span className="location">Dallas, TX. 75219</span>
        </Container>
      </Navbar>
    </div>
  );
};

export default Footer;
