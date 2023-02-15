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
            marginLeft :"10px"
        }
        uniStyles ={
            marginLeft :"30px"
        }
    }else if (props.name === "Front-End Web Development with React") {
        styles = {
            color : "#7150e8",
            marginLeft :"50px"
        }
        uniStyles ={
            marginLeft :"40px"
        }
    }else if (props.name === "Introduction to Back-End Development") {
        styles = {
            color : "#1ed7fe",
            marginLeft :"50px"
        }
        uniStyles ={
            marginLeft :"30px"
        }
    }else{
        styles = {
            color : "#118dff",
            marginLeft : "10px"
        }
        uniStyles ={
            marginLeft :"20px"
        }
    }
    return(
        <div className="Certificates--Elements">
            <div className="Certificates--arrow">
                <a href={props.url} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faPlay} className="faPlay"/></a>
            </div>
            <div className="Certificates--Details">
                <h2 style={styles}>{props.name}</h2>
                <p style={uniStyles}>{!props.language ? "University" : "Université"} : {props.university}</p>
                <b>{props.date}</b>
            </div>
        </div>
    )   
}
