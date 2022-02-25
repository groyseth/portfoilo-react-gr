import React from "react";
import { Col, Row } from "react-bootstrap";
// import { Image } from "react-bootstrap";
// import Style from './mystyle.module.css'
import pic from "../assets/projects/UpdatedProfile.jpg"
// const styles = {
//   aboutTop: {
//     width: '30%'
//   }
// }

export default function About() {
  return (
    <section id="about" className=" ">

      <Row>
        <Col>
          <div className="container moving">
            <h1 className=" ">Hello im Grant</h1>
            <h1>About Me:</h1>
            <p className="wraped">Full stack web developer and a U.S National Guard vet ready to get out there. Fresh out of the University of Minnesota and earning a certificate in full stack development with newly developed skills in Javascript, CSS, Html, Node.js and Bootstrap responsive designs. Very motivated to solve problems with a focused mindset and ultimately love to be creative with designs. I worked in a team of 3 to develop a DNR app to find information about specific natural areas for outdoor enthusiasts. I make sure to implement friendly UI and UX aspects when developing a design for an app. Ready to learn new things and meet people, as a part of the virtual workforce!
            </p>

          </div>
        </Col>
        <Col>
          <div >
            <img  src={pic} alt="Profile" className="profile-pic"></img>
          </div>
        </Col>
      </Row>
    </section>
  );
}
