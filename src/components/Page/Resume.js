import React from "react";
import resumes from '../../assets/projects/MyResume.pdf'
import "./page.scss"
export default function EmbedRes() {

    return (
        <div className="resBack">
            <div style={{ height: "600px" }} id="resume">
                <embed src={resumes} type="application/pdf" width="100%" height="100%" style={{ marginTop: "40px" }}></embed>
             
            </div>
        </div>

    )
}
