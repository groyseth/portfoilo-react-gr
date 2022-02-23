import React from "react";
import About from "../About";
// import Contacts from "./components/Contacts";
// import NavTabs from "../Navtab";
import Navbar from "../Navbar";
import Projects from "../Projects";

export default function Home() {
    return (
      <main>
        {/* <NavTabs /> */}
        <Navbar />
        <About />
        {/* <Portfolio /> */}
        <Projects />
        {/* <Contacts /> */}
      </main>
    );
  }