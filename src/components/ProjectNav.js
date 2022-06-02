import React, { useState } from 'react';
import "../styles/projectNav.scss"
import { Nav, Navbar, Container } from 'react-bootstrap';
import { AiFillHome, AiOutlineUserAdd, AiTwotoneExperiment, AiFillTrophy, AiOutlineUsergroupAdd } from "react-icons/ai";
import {GrResume} from "react-icons/gr"
function ProjectNav({ currentPage, handlePageChange }) {
  const [menu, setMenu] = useState(false)
  const handleMenu = () => {
    setMenu(true);
  }
  const closeMenu = () => {
    setMenu(false);
  }

  return (

    <Navbar className='mobilePos' >
      <div className='mobileMenu' onClick={() => handleMenu()} />
      <>
        {menu ? (
          <div className='menuActive' onClick={()=>closeMenu()}>
            <Nav className="navMobileMain">
            <div className='nav'  >
            <Nav.Link

              onClick={() => handlePageChange('landing')}

              className={currentPage === 'landing' ? 'nav-link active' : 'nav-link'}
            >
              <AiFillHome  />
            </Nav.Link>
          </div >

          <div className='nav'>
            <Nav.Link


              onClick={() => handlePageChange('projects')}
              className={currentPage === 'projects' ? 'nav-link active' : 'nav-link'}
            >
              <AiTwotoneExperiment />
            </Nav.Link>
          </div>

          <div className='nav'>
            <Nav.Link


              onClick={() => handlePageChange('groupProject')}
              className={currentPage === 'groupProject' ? 'nav-link active' : 'nav-link'}
            >
              <AiOutlineUsergroupAdd />
            </Nav.Link>
          </div>

          <div className='nav' onClick={() => { }}>
            <Nav.Link


              onClick={() => handlePageChange('challenges')}
              className={currentPage === 'challenges' ? 'nav-link active' : 'nav-link'}
            >
              <AiFillTrophy />
            </Nav.Link>
          </div>

          <div className='nav' onClick={() => { }}>
            <Nav.Link


              onClick={() => handlePageChange('aboutMe')}
              className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
            >
              <AiOutlineUserAdd />
            </Nav.Link>
          </div>

          {/* <div className='nav' onClick={() => { }}>
            <Nav.Link


              onClick={() => handlePageChange('resume')}
              className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
            >
              <GrResume />
            </Nav.Link>
          </div> */}


            </Nav>

          </div>

        ) : (<></>)}

      </>

      <Container className='navMain'>



        <Nav className="navHome">
          <div className='nav'>
            <Nav.Link

              onClick={() => handlePageChange('landing')}

              className={currentPage === 'landing' ? 'nav-link active' : 'nav-link'}
            >
              <AiFillHome />
            </Nav.Link>
          </div >

          <div className='nav'>
            <Nav.Link


              onClick={() => handlePageChange('projects')}
              className={currentPage === 'projects' ? 'nav-link active' : 'nav-link'}
            >
              <AiTwotoneExperiment />
            </Nav.Link>
          </div>

          <div className='nav'>
            <Nav.Link


              onClick={() => handlePageChange('groupProject')}
              className={currentPage === 'groupProject' ? 'nav-link active' : 'nav-link'}
            >
              <AiOutlineUsergroupAdd />
            </Nav.Link>
          </div>

          <div className='nav' onClick={() => { }}>
            <Nav.Link


              onClick={() => handlePageChange('challenges')}
              className={currentPage === 'challenges' ? 'nav-link active' : 'nav-link'}
            >
              <AiFillTrophy />
            </Nav.Link>
          </div>

          <div className='nav' onClick={() => { }}>
            <Nav.Link


              onClick={() => handlePageChange('aboutMe')}
              className={currentPage === 'aboutMe' ? 'nav-link active' : 'nav-link'}
            >
              <AiOutlineUserAdd />
            </Nav.Link>
          </div>

          <div className='nav' onClick={() => { }}>
            <Nav.Link


              onClick={() => handlePageChange('resume')}
              className={currentPage === 'resume' ? 'nav-link active' : 'nav-link'}
            >
              <GrResume />
            </Nav.Link>
          </div>

        </Nav>

      </Container>


    </Navbar>



  );
}

export default ProjectNav;