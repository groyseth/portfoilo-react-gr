import React, { useState } from 'react';
import NavTabs from './Navtab';
import Home from './Page/Home';
// import Projects from './Projects';
import Group from './Page/Group';
import Footer from './Footer';

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Group Projects') {
      return <Group />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
     
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    
      {renderPage()}
       <Footer />
    </div>
    
  );
}
