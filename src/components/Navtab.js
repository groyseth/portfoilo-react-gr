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

                className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
              >
                Home
              </Nav.Link>
            </div >
             <div className='nav'>
              <Nav.Link
                href="#challenge"

                onClick={() => handlePageChange('challenge')}
                className={currentPage === 'challenge' ? 'nav-link active' : 'nav-link'}
              >
                Challenges
              </Nav.Link>

            </div>
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
              <NavDropdown.Item href="#about" onClick={() => handlePageChange('Home')}>About Me</NavDropdown.Item>
              <NavDropdown.Item href="#projects" onClick={() => handlePageChange('Home')}>Projects</NavDropdown.Item>
              <NavDropdown.Item href="#groupProjects" onClick={() => handlePageChange('Home')}>Group Projects</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#contact" onClick={() => handlePageChange('Home')}>Contact</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>


  );
}

export default NavTabs;

