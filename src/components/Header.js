import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import "./Header.css";
import { FaInstagramSquare } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-component">
      <Navbar bg="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand
            href="https://www.instagram.com/jacobriosbarber/"
            target="_blank"
          >
            <FaInstagramSquare style={{ fontSize: "2em" }} />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/">
            <span className="navLogo">Jacob Rios Barber</span>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{ color: "lightgrey" }}
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Navigation
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link as={Link} to="/">
                  <span class="links">Home</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/location">
                  <span class="links">Location</span>
                </Nav.Link>
                <Nav.Link as={Link} to="/services">
                  <span class="links">Services</span>
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};
export default Header;
