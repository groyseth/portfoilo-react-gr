import React from "react";
import About from "../About";
import Group from "./Group"
// import Footer from "../Footer";
import Navbar from "../Navbar";
import Projects from "../Projects";
import './page.css'
import Parolax from "./Parolax"
import Recon from "../Recon";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(), Move(), Sticky());

export default function Home() {
    return (
      <main>
      <div className="navBar">
        {/* <Navbar /> */}
        </div>
        <div className="top">
        <About />
       </div>
       <div className="middle">
        <Projects />
        </div>
        <Parolax />
        <div className="home">
        <Group />
        </div>
        {/* <Recon /> */}
    </main>
    );
  }