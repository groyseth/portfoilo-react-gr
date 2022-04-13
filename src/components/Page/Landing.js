import React, {useEffect} from 'react'
import { Col, Row } from 'react-bootstrap'
import "./Landing.css"
import Pic from "../../assets/textback/noght.png"
import Sat from "../../assets/textback/sat.jpg"
import AOS from "aos";
import 'aos/dist/aos.css';

// import pic from "../../assets/textback/sat.jpg"

export default function Recon() {

  useEffect(() =>{
    AOS.init({ duration:2000  });
  }, []);

  return (
    <div className='landingStyle'>
      <container>
        <Row>
        <img src={Pic} className='imageClass'></img>
      <h1 className='title'>Hello Im<br /> Grant Royseth</h1>
      </Row>
      </container>
      {/* <img src={Sat} className='Sat'></img> */}
    </div>
  )
}
