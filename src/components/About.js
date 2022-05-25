import React, { useEffect} from "react";
import { Col, Image } from "react-bootstrap";
import AOS from "aos";
import 'aos/dist/aos.css';
import pic from "../assets/profile/ProfilePic.png"
import "./about.scss"

export default function About() {
    useEffect(() =>{
      AOS.init({ duration:2000  });
    }, []);

  return (
    <section id="about" >
        <Col>
          <div className="container moving">
            <h1>About Me:</h1>
            <p className="wraped">Full Stack Web developer and a U.S National Guard vet ready to get out there. Received a certificate in Full Stack Web Development University of Minnesota with skills in Javascript, CSS, Html, Node.js and Bootstrap responsive designs. Very motivated to solve problems with a focused mindset and ultimately love to be creative with designs. Worked in a team of 3 to develop a Department of Natural Resources app to find information about specific natural areas for outdoor enthusiasts. Made sure to implement friendly UI and UX aspects when developing a design for an app. Ready to learn new things and meet people, as a part of the technical workforce!
            </p>

          </div>
        </Col>
          <div className="imagePlace">
            <Image  src={pic} alt="Profile" className="profile-pic styleBehind" data-aos="flip-left" ></Image>
</div>
    </section>
  );
}
