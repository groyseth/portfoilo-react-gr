import React, { useState } from 'react';
import ProjectNav from './ProjectNav';
import Resume from './Page/Resume'
import Challenge from './Page/Challenge';
import Group from "./Page/Group"
import Projects from './Projects';
import About from './About';
import Landing from './Page/Landing';

export default function MainContainer() {
    const [currentPage, setCurrentPage] = useState('landing');
    const renderPage = () => {
        if (currentPage === 'projects') {
            return <Projects />;
        }
        if (currentPage === 'challenges') {

            return <Challenge />
        }
        if (currentPage === 'groupProject') {

            return <Group />
        }
        if (currentPage === 'aboutMe') {

            return <About />
        }
         if (currentPage === 'landing') {

            return <Landing />
        }
        if (currentPage === 'resume') {

            return <Resume />
        }
    };
    const handlePageChange = (page) => setCurrentPage(page);
    return (
        <div className='projectBack'>
            <ProjectNav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}

        </div>
    );
}