import React from 'react';
import "./navtab.scss"
import { Nav, Navbar, NavDropdown, Container } from 'react-bootstrap';




function NavTabs({ currentPage, handlePageChange }) {
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
        <NavDropdown title="Menu" id="basic-nav-dropdown float right">
        <NavDropdown.Item href="#about">About Me</NavDropdown.Item>
        <NavDropdown.Item href="#projects">Projects</NavDropdown.Item>
        <NavDropdown.Item href="#groupProjects">Group Projects</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#contact">Contact</NavDropdown.Item>
      </NavDropdown>
  
   
    </Nav>
    
    </Navbar.Collapse>
</Container>
</Navbar>


  );
}

export default NavTabs;

