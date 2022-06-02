import React from "react";
import { Col, Image } from "react-bootstrap";
import pic from "../assets/profile/ProfilePic.png"
import "../styles/about.scss"
import { FaMailBulk, FaGithub, FaLinkedin } from 'react-icons/fa';
export default function About() {

  return (
    <section id="about" >
      <Col>
        <div className="container moving">
          <h1>ABOUT ME:</h1>
          <p className="wraped">Full Stack Web developer and a U.S National Guard vet ready to get out there. Received a certificate in Full Stack Web Development University of Minnesota with skills in Javascript, CSS, Html, Node.js and Bootstrap responsive designs. Very motivated to solve problems with a focused mindset and ultimately love to be creative with designs. Worked in a team of 3 to develop a Department of Natural Resources app to find information about specific natural areas for outdoor enthusiasts. Made sure to implement friendly UI and UX aspects when developing a design for an app. Ready to learn new things and meet people, as a part of the technical workforce!
          </p>

        </div>
      </Col>
      <div className="imagePlace">
        <Image src={pic} alt="Profile" className="profile-pic styleBehind"  ></Image>
      </div>
      <div className="linkedIn">
        <a href="https://www.linkedin.com/in/grant-royseth-83b08b220/"><FaLinkedin /></a>
        <a href="https://github.com/groyseth"><FaGithub /></a>
        <a href="mailto:groyseth@gmail.com"  ><FaMailBulk /></a>
      </div>
    </section>
  );
}
