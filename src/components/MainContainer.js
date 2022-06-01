import React, { useState } from 'react';
import NavTabs from './Navtab';
import Home from './Page/Home';
import Footer from './Footer';
import Resume from './Page/Resume'
import Challenge from './Page/Challenge';
import Group from "./Page/Group"

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if(currentPage === 'resume'){
    
    return <Resume />
    }
    if(currentPage === 'challenge'){
    
      return <Challenge />
      }
      if(currentPage === 'group'){
    
        return <Group />
        }
  };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>      
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
       
    </div>
  );
}
