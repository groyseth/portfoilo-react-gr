import React, { useState } from 'react';
import NavTabs from './Navtab';
import Home from './Page/Home';
// import Projects from './Projects';
import Contacts from './Page/Contacts';

export default function MainContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Contact') {
      return <Contacts />;
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
