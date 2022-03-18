import React from "react";
import About from "../About";
// import Contacts from "./components/Contacts";
// import Footer from "../Footer";
import Navbar from "../Navbar";
import Projects from "../Projects";
import './page.css'

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

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