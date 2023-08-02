import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Home.css";
import ProjectComp from "./elements/ProjectComp";

function Projects(){
    const [projectList, setProjectList] = React.useState([
        {title: "Project 1",
         content: "Content 1",
         img: "src",
         demo: "demo"}, 
        {title: "Project 2",
         content: "Content 2",
         img: "src",
         demo: "demo"} 
    ]);

    return <>
    <div className = "d-flex flex-column min-vh-100">
        <h1>Projects </h1>
        <br />
        <div className="container">
            <div className="row">
                {projectList.map((project) => {
                    return <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3"><ProjectComp 
                                                                            title = { project.title }
                                                                            content = { project.content }
                                                                            img = { project.img }
                                                                            demo = { project.demo }
                                                                            />
                    </div>
                })}
            </div>
        </div>
        <h4 className="card-title">My Career So Far</h4>
        <p>Being always up for a challenge, I completed my Engineering from <a href="https://vce.ac.in/" target="_blank" rel="noopener noreferrer"> Vasavi College of Engineering</a> one of many reputed colleges in India.
        I worked as an Intern at a start-up
        based in New York</p>
    </div>
    </>
}

export default Projects;
