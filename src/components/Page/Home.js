import React from "react";
import About from "../About";
import Group from "./Group"
// import Footer from "../Footer";
// import NavTabs from "../Navtab";
// import Navbar from "../Navbar";
import Projects from "../Projects";
import './page.css'
// import Parolax from "./Parolax"
import Landing from "./Landing";
// import { batch, Fade, FadeIn, Move,  Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

// const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
// const FadeUp = batch(Fade(), Move(), Sticky());

export default function Home() {
    return (
      <main>
      <div >
        <Landing />
        </div>
        
        <div className="top">
        <About />
       </div>
       <div className="middle">
        <Projects />
        </div>
        <div className="home">
        <Group />
        </div>
    </main>
    );
  }