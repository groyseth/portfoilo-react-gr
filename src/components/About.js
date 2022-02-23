import React from "react";
// import { Image } from "react-bootstrap";
// import Style from './mystyle.module.css'
import pic from "../assets/profile/newPicOfMe.jpg"
const styles = {
  aboutTop: {
   width: '25%'
  }
}

export default function About() {
  return (
    <section id="about" className=" box ">
    <h1 className="d-flex justify-content-center ">Hello im Grant</h1>

    <div className="container-lg ">
            <h1 className="d-flex justify-content-center ">About Me:</h1>
            <p className="d-flex justify-content-center ">I am a student at the Minnesota State University becoming a full
              stack developer.
              I am a family man, ex truck driver and a vet. I feel motivated to work and create!
            </p>
            <img style={styles.aboutTop} src={pic} alt="Profile"></img>
          </div>
    </section>
  );
}
