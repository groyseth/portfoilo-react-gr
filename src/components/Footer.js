import React, {useEffect} from "react";
import { FaMailBulk, FaGithub, FaLinkedin} from 'react-icons/fa';
// import logo from "./video/GR.mp4"
import "./footer.css"
import resumes from '../assets/projects/MyResume.pdf'

export default function Footer() {
 
  // const test = () =>{}



  return (


    <container className="footer" id="contact">
      <div  class="container" >

        <ul class=" d-flex listStyle " >

          <li>
            <a href="mailto:groyseth@gmail.com"  ><FaMailBulk /></a>
          </li>
          <li >
            <a href="https://github.com/groyseth"><FaGithub /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/grant-royseth-83b08b220/"><FaLinkedin /></a>
          </li>
          {/* <il>
          <video autoPlay ><source src={logo} type='video/mp4' /></video>
          </il> */}
          

        </ul>


      </div>
    </container>
  )

}