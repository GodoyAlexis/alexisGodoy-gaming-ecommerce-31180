import "./NavBar.css";
import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";

// UpperCamelCase
const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img src="./logo_navBar.png" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Lo nuevo</Nav.Link>
            <NavDropdown title="Productos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Leggins</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Capris</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Buzos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Sale</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <CartWidget className="cartWidget" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
