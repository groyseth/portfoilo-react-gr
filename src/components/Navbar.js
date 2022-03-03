import React from "react";
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';




export default function Navbar() {
  return (
    <header className="stat">
  
  <div className="mb-2 color nav" style={{zIndex: '1'}}>
    {['down'].map((direction) => (
      <DropdownButton 
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="primary"
        title={` Menu `}
        
        
      >
        <li className="menuColor">
        <Dropdown.Item eventKey="1" a href="#about">about</Dropdown.Item>
        <Dropdown.Item eventKey="2" a href="#projects">Projects</Dropdown.Item>
        <Dropdown.Item eventKey="2" a href="#contact">Contact Me</Dropdown.Item>
        </li>
      </DropdownButton>
      
    ))}
  </div>

    </header>


  );
}


