import React from 'react';
import Nav from 'react-bootstrap/Nav';
// TODO: Add a comment explaining how we are able to extract the key value pairs from props
//destructoring them
function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          // onClick={handlePageChange}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
        //if the home link is clicked it is set to active
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
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      
    </ul>
  );
}

export default NavTabs;