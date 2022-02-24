import React from "react";
import About from "../About";
// import Contacts from "./components/Contacts";
// import Footer from "../Footer";
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
        {/* <Footer /> */}
      </main>
    );
  }