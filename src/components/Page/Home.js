import React from "react";
import About from "../About";
import Group from "./Group"
import Projects from "../Projects";
import './page.css'
import Landing from "./Landing";


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
        <div className="home">
        <Group />
        </div>
    </main>
    );
  }