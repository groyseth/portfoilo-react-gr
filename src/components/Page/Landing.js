import React, {useEffect} from 'react'
import "./Landing.scss"
import AOS from "aos";
import 'aos/dist/aos.css';

export default function Landing() {

  useEffect(() =>{
    AOS.init({ duration:2000  });
  }, []);

  return (
    <div className='landingStyle'>
     
      <h1 className='title'>Grant Royseth<br /> Front-End Developer</h1>
     
    </div>
  )
}
