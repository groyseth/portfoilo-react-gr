import React from "react";

import "./navtab.css"
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';

const style = {
  backcolor: {
    backgroundColor: 'black'
    
  }
}


export default function NavBar({ currentPage, handlePageChange }) {
  return (
   <Navbar bg='black' expand="lg">
    <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
  <Nav className="me-auto">
    <div className='nav'>
        <Nav.Link
          href="#home"
          onClick={() => handlePageChange('Home')}
         
          className= {currentPage === 'Home' ? 'nav-link active' : 'nav-link'} 
        >
          Home
          </Nav.Link>
      </div >
      <div className='nav'>
        <Nav.Link
          href="#resume"
           
          onClick={() => handlePageChange('resume')}
          className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'} 
        >
          My Resume
        </Nav.Link>
        </div>
        </Nav>
    
    </Navbar.Collapse>
</Container>
</Navbar>
        


    


  );
}


