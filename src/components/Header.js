import React from "react";
import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
    return(
        <div className="Page--Header" id="Home">
            <input 
                type="checkbox"
                id="menu--bar"
            />
            <label htmlFor="menu--bar"><FontAwesomeIcon icon={faBars}/></label>
            <img src={logo} alt="logo"/>
            <div className="Header--elements">
                <a href="#Home">{!props.language ? "Home" : "Accueil"}</a>
                <a href="#Skills">{!props.language ? "Skills" : "Compétences "}</a>
                <a href="#Projects">{!props.language ? "Projects" : "Projets"}</a>
                <a href="#Certificates">{!props.language ? "Certificates" : "Certificats"}</a>
                <a href="#Contact">{!props.language ? "Contact" : "Contact"}</a>
            </div>
            <div className="Languages">
                {props.language && <p onClick={props.handleClick}>EN</p>}
                {!props.language && <p onClick={props.handleClick}>FR</p>}
            </div>
        </div>
    )
}