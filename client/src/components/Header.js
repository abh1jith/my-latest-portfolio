import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Header.css";

function Header(){

    return <>
    <Navbar expand="lg" className="nav nav-pills py-3 bg-dark">
      <Container>
        <h5 className="title">ABHIJITH's PORTFOLIO</h5>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="HeaderParts"> \\\</Navbar.Toggle>
        <div className="HeaderDiv"></div>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/" className="HeaderParts" id="home" >Home</Nav.Link>
            <Nav.Link href="/projects" className="HeaderParts" id="projects">Projects</Nav.Link>
            <Nav.Link href="/contact" className="HeaderParts" id="contact">Contact Me</Nav.Link>
            <Nav.Link href="/about" className="HeaderParts" id="about">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
}

export default Header;