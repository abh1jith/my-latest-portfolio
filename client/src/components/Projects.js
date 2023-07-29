import React from "react";
import "./Home.css";

function Projects(){
    return <>
    <div className = "d-flex flex-column min-vh-100">
        <h1>Projects </h1>
        <div className="jumbotron">
            <h1 className="display-3 name" >ABHIJITH DAMERUPPALA</h1>
            <div className="card" style={{
                                        width: 250}}>
                <div className="card-body">
                    <h4 className="card-title">My Career So Far</h4>
                    <p>Being always up for a challenge, I completed my Engineering from <a href="https://vce.ac.in/" target="_blank"> Vasavi College of Engineering</a> <br />
                    one of many reputed colleges in India.
                    I worked as an Intern at a start-up <br/>
                    based in New York</p>
                </div>
            </div>
        </div>
    </div>
    </>
}

export default Projects;
