import React from "react";
import About from "../About";
// import Contacts from "./components/Contacts";
// import Footer from "../Footer";
import Navbar from "../Navbar";
import Projects from "../Projects";
import './page.css'

export default function Home() {
    return (
      <main>
      
        <Navbar />
        
        <div className="home">
        <About />
        </div>
        <Projects />
   
      </main>
    );
  }