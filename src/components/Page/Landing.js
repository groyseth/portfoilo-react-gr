import React from 'react'
import "./Landing.scss"
import pic from "../../assets/textback/noght.png"
export default function Landing() {

  return (
    <>
    <div className='landingStyle'>
     
      <h1 className='title'>Grant Royseth<br /> Front-End Developer</h1>
     
    </div>
    <div >
    <img src={pic} className='astro' alt=''></img>
    </div>
    </>
  )
}
