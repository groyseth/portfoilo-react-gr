import React from "react";
import About from "../About";
import Group from "./Group"
import Projects from "../Projects";
import './page.scss'
import Landing from "./Landing";
import Footer from "../Footer";
export default function Home() {
    return (
      <main>
        <Landing />
        <div className="top">
        <About />
       </div>
       <div className="middle">
        <Projects />
        </div>
        <div className='homeFooter'>
        <Footer  />
        </div>
    </main>
    );
  }