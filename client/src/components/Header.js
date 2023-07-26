import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.css";

function Header(){
    return <>
    <Navbar expand="lg" className=" nav nav-pills d-flex justify-content-center py-3 bg-dark">
      <Container >
        <Navbar.Brand href="/" className="a">Abhijith's Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="a"> \\\</Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Nav.Link href="/" className="a ">Home</Nav.Link>
            <Nav.Link href="/contact" className="a">Contact Me</Nav.Link>
            <Nav.Link href="/projects" className="a">Projects</Nav.Link>
            <Nav.Link href="/about" className="a">About Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
</>
}

export default Header;