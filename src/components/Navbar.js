import React from "react";
import Nav from 'react-bootstrap/Nav';

export default function Navbar() {
  return (
    <header className="box stat">
        <Nav defaultActiveKey="/home" as="ul">
  <Nav.Item as="li">
    <Nav.Link href="#about">About Me</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="#projects">Portfolio</Nav.Link>
  </Nav.Item>
  <Nav.Item as="li">
    <Nav.Link href="#contact">Contact</Nav.Link>
  </Nav.Item>
</Nav>
       
      <div className="container ">
        
          
        
        
      </div>
    </header>

    
  );
}