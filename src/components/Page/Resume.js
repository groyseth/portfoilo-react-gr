import React from "react";
import resumes from '../../assets/projects/MyResume.pdf'


export default function EmbedRes(){

    return(

        <div style={{height: "600px"}}>
     <embed src={resumes} type="application/pdf" width="100%" height="100%"></embed> 
     </div>
    )
}
