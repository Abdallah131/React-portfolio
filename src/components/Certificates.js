import React from "react";
import CertificatesCard from './CertificatesCard'
import Certpic from "../assets/images/Certs-pic.png"

export default function ProjectCard(props) {
    return(
        <div className="Certificates" id="Certificates">
            <div className="Certificates--title" data-aos="fade-left">
                <span>{!props.language ? "Certifciates" : "Certificats"}</span><br/>
                <img src={Certpic} alt="certspic"/>
            </div>   
            <div className="Certificates--Container" data-aos="fade-left">
                    <CertificatesCard 
                        name="Object Oriented Programming in Java"
                        university = "UC San Diego"
                        date="Jan 2023"
                        language = {props.language}
                        url = "https://www.coursera.org/account/accomplishments/verify/6DPT2X8258Z8"
                    />
                    <CertificatesCard 
                        name="Front-End Web Development with React"
                        university = "The Hong Kong University of Science and Technology"
                        date="Dec 2022"
                        language = {props.language}
                        url = "https://www.coursera.org/account/accomplishments/verify/ZURJHH7PPY4K"
                        />
                    <CertificatesCard 
                        name="Introduction to Back-End Development"
                        university = "Meta"
                        date="Nov 2022"
                        language = {props.language}
                        url = "https://www.coursera.org/account/accomplishments/verify/8J5D5N5BKBFP"
                    />
                    <CertificatesCard 
                        name="Programming Foundations with JavaScript, HTML and CSS"
                        university = "Duke University"
                        date="Nov 2022"
                        language = {props.language}
                        url = "https://www.coursera.org/account/accomplishments/verify/9GRSDKLC9VGM"
                    />
            </div> 
        </div>
    )
}
