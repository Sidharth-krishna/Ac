import React from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      
      
        <div class="container text-center text-md-start mt-5">
            
            

        </div>
        <Navbar
      expand="lg"
      style={{ backgroundColor: "#33ccff", padding: "1.5rem" }}
    >
      <Container>
        <Navbar.Brand
          href=""
          style={{
            color: "white",
            display: "flex",
            alignItems: "center",
            gap: "5px",
            fontWeight: "bold",
          }}
        >
         <p>
         <i class="fa-brands fa-stack-overflow fa-2x"></i>


         A One Air Conditioner
         </p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              style={{ color: "white", paddingRight: "25x" }}
              href="#home"
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/'}>Home</Link>
            </Nav.Link>
            <Nav.Link
              style={{ color: "white", paddingRight: "25px" }}
              href="#link"
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/About'}>About Us</Link>            </Nav.Link>
            <Nav.Link
              style={{ color: "white", paddingRight: "25px" }}
              href="#link"
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/Services'}>Services</Link>
            </Nav.Link>
            <Nav.Link
              style={{ color: "white", paddingRight: "25px" }}
              href="#link"
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/Reviews'}>Reviews</Link>
            </Nav.Link>
            <Nav.Link
              style={{ color: "white", paddingRight: "25px" }}
              href="#link"
            >
              

            </Nav.Link>
            <Nav.Link
              style={{ color: "white", paddingRight: "25px" }}
              href="#link"
            >
              <Link style={{ textDecoration: 'none', color: 'white' }} to={'/Contact'}>Contact Us</Link>

            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header