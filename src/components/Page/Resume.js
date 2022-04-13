import React from "react";
import resumes from '../../assets/projects/MyResume.pdf'
import "./Resume.css"
// import NavBar from "../Navbar";
export default function EmbedRes(){

    return(

        <div style={{height: "600px"}} id="resume">
     <embed src={resumes} type="application/pdf" width="100%" height="100%" style={{marginTop: "40px"}}></embed> 
     </div>
    )
}
