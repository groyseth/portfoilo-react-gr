import React from 'react';
import Nav from 'react-bootstrap/Nav';

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
         
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
     
       
      <li className="nav-item">
        <a
          href="#contact"
          //  TODO: Add a comment explaining what this logic is doing
          //on click changing page 
          onClick={() => handlePageChange('Group Projects')}
          className={currentPage === 'Group Projects' ? 'nav-link active' : 'nav-link'}
        >
          Group Projects
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#resume"
           
          onClick={() => handlePageChange('resume')}
          className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
        >
          My Resume
        </a>
      </li>
      
    </ul>
  );
}

export default NavTabs;