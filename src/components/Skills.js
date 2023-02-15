import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faLaptopCode,faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Skills(props) {
    return(
        <div className="Skills" id="Skills">
            <div className="Skills--title">
            <h1>{!props.language ? "My" : "Mes"}</h1>
            <span>{!props.language ? "Skills" : "Compétences"}</span>
            </div>
            <div className="Skills--Container">
                <div className="Frontend--Skills" data-aos="fade-right">
                    <h2>Frontend</h2>
                    <FontAwesomeIcon icon={faCode} className="faCode"/>
                    <hr/>
                    <FontAwesomeIcon icon={faCheck} className="faCheckf"/>
                    <span>HTML</span><br/>
                    <FontAwesomeIcon icon={faCheck} className="faCheckf" style={{marginLeft:"-50px"}}/>
                    <span>CSS</span><br/>
                    <FontAwesomeIcon icon={faCheck} className="faCheckf" style={{marginLeft:"5px"}}/>
                    <span>Javascript</span><br/>
                    <FontAwesomeIcon icon={faCheck} className="faCheckf" style={{marginLeft:"-30px"}}/>
                    <span>React</span><br/>
                    <FontAwesomeIcon icon={faCheck} className="faCheckf" style={{marginLeft:"8px"}}/>
                    <span>Bootstrap</span><br/>
                </div>
                <div className="Backend--Skills" data-aos="fade-left">
                    <h2>Backend</h2>
                    <FontAwesomeIcon icon={faLaptopCode} className="faLaptop"/>
                    <hr/>
                    <FontAwesomeIcon icon={faCheck} className="faCheckb" style={{marginLeft:"-8px"}}/>
                    <span>Java</span><br/>
                    <FontAwesomeIcon icon={faCheck} className="faCheckb" style={{marginLeft:"-9px"}}/>
                    <span>Php</span><br/>
                    <FontAwesomeIcon icon={faCheck} className="faCheckb" style={{marginLeft:"8px"}}/>
                    <span>MySql</span><br/>
                    <FontAwesomeIcon icon={faCheck} className="faCheckb" style={{marginLeft:"13px"}}/>
                    <span>Python</span><br/>
                </div>
            </div>
        </div>
    )
}