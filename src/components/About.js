import React, { useEffect} from "react";
import { Col, Image, Row, Carousel } from "react-bootstrap";
import AOS from "aos";
import 'aos/dist/aos.css';
import pic from "../assets/projects/UpdatedProfile.jpg"
import "./about.css"





export default function About() {

 
    // const [index, setIndex] = useState(0);
  
    // const handleSelect = (selectedIndex, e) => {
    //   setIndex(selectedIndex);
    // };

    useEffect(() =>{
      AOS.init({ duration:2000, anchorPlacement: 'center-bottom'  });
    }, []);


  return (
    <section id="about" className=" ">

      {/* <Row> */}
        <Col>
          <div className="container moving">
            <h1 className=" ">Hello, My Name Is Grant!</h1>
            <h1>About Me:</h1>
            <p className="wraped">Full Stack Web developer and a U.S National Guard vet ready to get out there. Received a certificate in Full Stack Web Development University of Minnesota with skills in Javascript, CSS, Html, Node.js and Bootstrap responsive designs. Very motivated to solve problems with a focused mindset and ultimately love to be creative with designs. Worked in a team of 3 to develop a Department of Natural Resources app to find information about specific natural areas for outdoor enthusiasts. Made sure to implement friendly UI and UX aspects when developing a design for an app. Ready to learn new things and meet people, as a part of the technical workforce!
            </p>

          </div>
        </Col>
        <Row>
          <div>
            <Image  src={pic} alt="Profile" className="profile-pic" data-aos="flip-left" ></Image>
</div>


            {/* <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
      <Carousel.Item className="carouselItem">
        <img
          className="d-block "
          src={pic}
          alt="First slide"
          
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        
      </Carousel.Item>
      
    </Carousel> */}

          
      
        </Row>
        <Row >
          <div className="aboutLink " data-aos="zoom-in" >
     <ul>
       <h1 className="explore">Explore!</h1>
     <li className="aboutHover">
        <a href="#about" className="aboutList" >About Me</a>
        <a href="#projects" className="aboutList">Projects</a>
        <a href="#groupProjects" className="aboutList">Group Projects</a>
        <a href="#contact" className="aboutList">Contact Me</a>
        
     </li>

     </ul>
     </div>
   </Row>
    </section>
  );
}
