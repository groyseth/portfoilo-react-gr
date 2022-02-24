import React from "react";
import { Col, Row } from "react-bootstrap";
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
    <section id="about" className=" ">

      <Row>
        <Col>
          <div className="container moving">
            <h1 className=" ">Hello im Grant</h1>
            <h1 >About Me:</h1>
            <p >I am a student at the Minnesota State University becoming a full
              stack developer.
              I am a family man, ex truck driver and a vet. I feel motivated to work and create!
            </p>

          </div>
        </Col>
        <Col>
          <div className="profile-pic">
            <img style={styles.aboutTop} src={pic} alt="Profile"></img>
          </div>
        </Col>
      </Row>
    </section>
  );
}
