import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" className="homeLink">
              <span className="headerLink home">Home</span>
            </Nav.Link>
            <Nav.Link as={Link} to="contact">
              <span className="headerLink contact">Contact</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/appointment">
              <span className="headerLink schedule">Schedule Appointment</span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
