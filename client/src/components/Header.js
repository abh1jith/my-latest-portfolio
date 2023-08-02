import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import "./Header.css";

function Header(){

    return <>
    <Navbar expand="lg" className=" nav nav-pills  py-3 bg-dark">
      <Container >
        <h5 className="title">ABHIJITH's PORTFOLIO</h5>
        {/* <Navbar.Brand className="title disabled">Abhijith's Portfolio</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="a"> \\\</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/" className="a" id="home" >Home</Nav.Link>
            <Nav.Link href="/projects" className="a" id="projects">Projects</Nav.Link>
            <Nav.Link href="/contact" className="a" id="contact">Contact Me</Nav.Link>
            <Nav.Link href="/about" className="a" id="about">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
</>
}

export default Header;