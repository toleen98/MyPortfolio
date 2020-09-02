import { div } from "prelude-ls";
import React, { Component } from "react";
import PROJECTS from "../data/projects";

class Project extends Component {
    render() {
        const { title, tech, github, image} = this.props.project
        return(
            <div style={{display: "inline-block", width:400,margin: 10}} className="card">
                <h3>{title}</h3>
                <img src={image} alt="profile" style={{width:300,height:200}} />
                <p style={{color:"hsl(210, 22%, 49%)", fontSize: "15px", marginTop: "10px"}}>{tech}</p>
                <a href={github} style={{fontSize: "20px", color:"hsl(205, 78%, 60%)"}}>Github</a>
            </div>
        )
    }
}

class Projects extends Component {
    render() {
        return( 
            <div>
                <h2>Highlighted Projects</h2>
                <div>
                    {
                        PROJECTS.map( PROJECT => {
                            return (
                                <Project key={PROJECT.id} project={PROJECT}/>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
};

export default Projects;