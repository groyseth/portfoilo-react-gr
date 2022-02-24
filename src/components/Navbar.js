import React from "react";
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

export default function Navbar() {
  return (
    <header className="stat">
  
  <div className="mb-2 ">
    {['down'].map((direction) => (
      <DropdownButton
        as={ButtonGroup}
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="primary"
        title={` Drop ${direction} `}
      >
        <Dropdown.Item eventKey="1" a href="#about">about</Dropdown.Item>
        <Dropdown.Item eventKey="2" a href="#projects">Projects</Dropdown.Item>
       
      </DropdownButton>
    ))}
  </div>


       {/* <div className="container ">




      </div> */}
    </header>


  );
}


