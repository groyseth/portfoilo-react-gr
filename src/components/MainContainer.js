import React, { useState } from 'react';
import NavTabs from './Navtab';
import Home from './Page/Home';
import Footer from './Footer';
import Resume from './Page/Resume'
// import spaceVid from './video/video.mp4'
import "./mainContainer.scss"
import spacePic from "../assets/cover/testPic.jpg"
import backGround from "../assets/cover/picBackGround.jpg"


export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if(currentPage === 'resume'){
    
    return <Resume />
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    {/* <video autoPlay loop muted 
    className='videoClass'
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
    </video> */}
{/* 
    <img src={backGround} className="testPic" alt='earth' style={{
 position: "fixed",
 width:"100%",
 left: "50%",
 top: "50%",
 height: "108vh",
 objectFit: "cover",
 backgroundSize: "cover",
 transform: "translate(-50%, -50%)",
 zIndex: "-1"

    }}></img> */}
   
      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
       <Footer />
      
    </div>
    
  );
}
