import React from 'react';
import {Navbar,Nav,Container} from "react-bootstrap";

const NavBar = () =>{
    return(
        <div>
            <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Movies App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Add Movie</Nav.Link>
    </Nav>
    </Container>
  </Navbar>

        </div>
    )
};

export default NavBar;