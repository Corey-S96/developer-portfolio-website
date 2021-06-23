import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import brandLogo from "../images/cs logo.png";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home"><img src={brandLogo} className="nav-brand-img"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="nav-link navStyle" href="/">Home</Nav.Link>
            <Nav.Link className="nav-link navStyle" href="/about">About</Nav.Link>
            <Nav.Link className="nav-link navStyle" href="/cv">Resume</Nav.Link>
            <Nav.Link className="nav-link navStyle" href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link className="nav-link navStyle" href="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

    );
  }
}

export default NavigationBar;
