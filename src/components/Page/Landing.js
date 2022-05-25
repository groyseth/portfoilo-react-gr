import React, {useEffect} from 'react'
import {  Row } from 'react-bootstrap'
import "./Landing.scss"
import Pic from "../../assets/textback/noght.png"
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Recon() {

  useEffect(() =>{
    AOS.init({ duration:2000  });
  }, []);

  return (
    <div className='landingStyle'>
      {/* <section> */}
        {/* <Row> */}
        {/* <img src={Pic} className='imageClass' alt='astro'></img> */}
      <h1 className='title'>Grant Royseth<br /> Front-End Developer</h1>
      {/* </Row> */}
      {/* </section> */}
    </div>
  )
}
