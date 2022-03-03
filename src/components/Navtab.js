import React from 'react';

const style = {
  backcolor: {
    backgroundColor: 'black'
    
  }
}

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item test">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
         
          className= {currentPage === 'Home' ? 'nav-link active' : 'nav-link'} style={style.backcolor} 
          
        >
          Home
        </a>
      </li>
     
       
      <li className="nav-item">
        <a
          href="#contact"
         
          onClick={() => handlePageChange('Group Projects')}
          className={currentPage === 'Group Projects' ? 'nav-link active' : 'nav-link'} style={style.backcolor}
          
        >
          Group Projects
        </a>
      </li>

      <li className="nav-item">
        <a
          href="#resume"
           
          onClick={() => handlePageChange('resume')}
          className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'} style={style.backcolor}
        >
          My Resume
        </a>
      </li>
      
    </ul>
  );
}

export default NavTabs;