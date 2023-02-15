import React from "react";
import ProjectCard from "./ProjectsCard";

export default function Skills(props) {
    const Ecommerce = ["HTML", "CSS", "JAVASCRIPT","JAVA"]
    const Bookstore = ["HTML", "CSS", "JAVASCRIPT","JAVA"]
    const Triviaquiz = ["React"]
    return(
        <div className="Projects" id="Projects">
            <div className="Projects--title">
                <span>{!props.language ? "My":"Mes"}</span>
                <span>{!props.language ? "Projects":"Projets"}</span>
            </div>
            <div className="Projects--Container" data-aos="fade-down">
                <div className="Projects--elements">
                    <ProjectCard 
                        title = "E-commerce"
                        tools = {Ecommerce}
                        url = "https://github.com/Abdallah131/ecommerce"
                        language = {props.language}
                    />
                </div>
                <div className="Projects--elements">
                <ProjectCard 
                        title = "Bookstore"
                        tools = {Bookstore}
                        url = "https://github.com/Abdallah131/Bookstore"
                        language = {props.language}
                    />
                </div>
                <div className="Projects--elements">
                <ProjectCard 
                        title = "Trivia quiz"
                        tools = {Triviaquiz}
                        url = "https://github.com/Abdallah131/First-react-project"
                        language = {props.language}
                    />
                </div>                
            </div>
        </div>
    )
}