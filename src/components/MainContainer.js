import React, { useState } from 'react';
import NavTabs from './Navtab';
import Home from './Page/Home';
// import Projects from './Projects';
import Group from './Page/Group';
import Footer from './Footer';
import Resume from './Page/Resume'
import spaceVid from './video/video.mp4'

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Group Projects') {
      return <Group />;
    }
    return <Resume />
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <video autoPlay loop muted 
    style={{
      position: "fixed",
width:"100%",
left: "50%",
top: "50%",
height: "100%",
objectFit: "cover",
// backgroundSize: "cover",
transform: "translate(-50%, -50%)",
zIndex: "-1"
    }}
    >
      <source src={spaceVid} type="video/mp4" />
    </video>
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    
      {renderPage()}

        

       <Footer />
    </div>
    
  );
}
