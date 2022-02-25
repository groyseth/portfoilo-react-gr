import React from "react";

import resumes from '../assets/projects/MyResume.pdf'

export default function footer() {
  return (


    <container className="footer" id="contact">
      <div class="container">

        <ul class=" d-flex-row ">

          <li><a href="mailto:groyseth@gmail.com">groyseth@gmail.com</a></li>
          <li ><a href="https://github.com/groyseth/Portfoilo-GR">GitHub</a>
          </li>
          <li><a
            href="https://www.linkedin.com/in/grant-royseth-83b08b220/">Linkedin</a>
          </li>
          {/* <li><a
            src="../assets/projects/MyResume2.pdf"target='_blank'>Resume</a>
          </li> */}
          {/* <embed src={resumes} type="application/pdf" width="100%" height="100%"></embed> */}

        </ul>


      </div>
    </container>
  )

}