import React from "react";
import { FaMailBulk, FaGithub, FaLinkedin} from 'react-icons/fa';
import "./footer.scss"
export default function Footer() {

  return (
    <section className="footer" id="contact">
      <div  className="" >
        <ul className=" listStyle " >
          <li>
            <a href="mailto:groyseth@gmail.com"  ><FaMailBulk /></a>
          </li>
          <li >
            <a href="https://github.com/groyseth"><FaGithub /></a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/grant-royseth-83b08b220/"><FaLinkedin /></a>
          </li>
        </ul>
      </div>
    </section>
  )

}