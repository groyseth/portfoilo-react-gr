import React, {useEffect, useState} from "react"
import satImg from "../../assets/cover/satillite.png"
import "./page.css"

function Parolax() {
const [offsetY, setOffsetY]= useState(0)
const handleScroll = () => setOffsetY(window.pageYOffset)
useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
}, [])

return(
    <div className="satilite"></div>
);

};
export default Parolax