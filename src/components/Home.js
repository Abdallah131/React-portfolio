import React from "react";
import reactlogo from '../assets/images/reactlogo.png';
import javalogo from '../assets/images/javalogo.png';
import mypic from '../assets/images/avatar7.png'

export default function Home(props) {
    return(
        <div className="Home">
            <div className="Home--Description" data-aos="fade-right" >
                <h2>{!props.language ? "Hello, My name is" : "Bonjour , Je m'appelle"}</h2>
                <h1>Abdallah Zaghouane</h1>
                <div className="title">
                    <div className="title--wrapper">
                        <div className="title--element">{!props.language ? "Business" : "Ètudiant"}</div>
                        <div className="title--element">{!props.language ? "Computing" : "Informatique"}</div>
                        <div className="title--element">{!props.language ? "Student" : "De Gestion"}</div>
                        <div className="title--element">{!props.language ? "Fullstack Developper" : "Développeur FullStack"}</div>
                    </div>
                </div>
                <p>{!props.language ? "Team oriented critical thinker, motivated to use my skills in this field to learn more and expand my knowledge. I am driven by analysing, optimizing, and implementing solutions. Extremely passionate about coding especially backend using Java.": "Penseur critique orienté équipe, motivé à mettre mes compétences pour apprendre encore plus et élargir mes connaissances. J'ai une véritable soif d'analyse, d'optimisation et de mise en œuvre de solutions. Passionné de codage, surtout le backend en Java."}</p>
                <a href="#Contact"><button>{!props.language ? "Contact Me" : "Contactez moi"}</button></a>
            </div>
            <div className="Home--Images" data-aos="fade-left">
                <img src={mypic} alt="Myimg"/>
                <div className="Home--logos">
                <img src={reactlogo} alt="reactlogo"/>
                <img src={javalogo} alt="javalogo"/>
                </div>
            </div>
        </div>
    )
}