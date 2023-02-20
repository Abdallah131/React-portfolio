import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay} from '@fortawesome/free-solid-svg-icons'
import 'aos/dist/aos.css'


export default function ProjectCard(props) {
    let styles = {}
    let uniStyles = {}
    if(props.name === "Object Oriented Programming in Java") {
        styles = {
            color : "#b902d7",
            marginRight :"10px",
            marginBottom : "40px"
        }
        uniStyles ={
            marginRight :"30px"
        }
    }else if (props.name === "Front-End Web Development with React") {
        styles = {
            color : "#7150e8",
            marginRight :"50px",
            marginBottom : "40px"
        }
        uniStyles ={
            marginRight :"40px"
        }
    }else if (props.name === "Introduction to Back-End Development") {
        styles = {
            color : "#1ed7fe",
            marginRight :"50px",
            marginBottom : "40px"
        }
        uniStyles ={
            marginRight :"30px"
        }
    }else{
        styles = {
            color : "#118dff",
            marginRight : "10px",
            marginBottom : "25px"
        }
        uniStyles ={
            marginRight :"20px"
        }
    }
    return(
        <div>
            <div className="Certificates--arrow">
                <FontAwesomeIcon icon={faPlay} className="faPlay"/>
                <a href={props.url} target="_blank" rel="noreferrer"><button>{!props.language ? "Certificate link" : "Lien du certificat"}</button></a>
            </div>
            <div className="Certificates--Elements">
                <div className="Certificates--Details">
                    <h2 style={styles}>{props.name}</h2>
                    <p style={uniStyles}>{!props.language ? "University" : "Université"} : {props.university}</p>
                    <b>{props.date}</b>
                </div>
            </div>
        </div>
    )   
}
