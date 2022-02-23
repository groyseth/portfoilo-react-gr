import React from "react";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
// import Portfolio from "./components/Portfolio";


export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      {/* <Portfolio /> */}
      <Projects />
      <Contacts />
    </main>
  );
}