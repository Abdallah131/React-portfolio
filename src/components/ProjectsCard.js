import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesUp} from '@fortawesome/free-solid-svg-icons'

export default function ProjectCard(props) {
    let styles = {}
    if(props.title === "E-commerce") {
        styles = {
            color : "white"
        }
    }else if (props.title === "Bookstore") {
        styles = {
            color : "white"
        }
    }else{
        styles = {
            color : "white"
        }
    }
    return(
        <div className="Elements--body">
            <FontAwesomeIcon icon={faAnglesUp} className="doublearrow" /> <br/>
            <span style={styles}>{props.title}</span>
            <p>{!props.language ?" Tools" : "Outils"}:</p>
            {props.tools.map((tool) => {
                return(
                    <p style={{ marginBottom:"30px", fontSize:"16px"}}>{tool}</p>
                )
            })}
           <a href={props.url} target="_blank" rel="noreferrer"><button>{!props.language ? "Github Repository": "Github"}</button></a>
        </div>
    )
}