import React from "react";
import Linkedin from "../assets/images/linkedinLogo.png"
import Github from "../assets/images/githubLogo.png"
import Instagram from "../assets/images/instaLogo.png"

export default function Home(props) {
    return(
        <div className="Footer" id="Footer">
            <a href="MyCV.pdf" target="_blank" rel="noreferrer"><button data-aos="flip-left">{!props.language ? "Download my Resume" : "Télécharger mon CV"}</button></a>
            <div className="Footer--Social">
                <a href="https://www.linkedin.com/in/abdallah-zaghouane/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="Linkedin"/></a>
                <a href="https://github.com/Abdallah131" target="_blank" rel="noreferrer"><img src={Github} alt="Github" /></a>
                <a href="https://www.instagram.com/abdallahzaghouane/" target="_blank" rel="noreferrer"><img src={Instagram} alt="Instagram" /></a>
                <small style={{userSelect:"none"}}>@Hypex All rights reserved. 2022.</small>
            </div>
        </div>
    )
}