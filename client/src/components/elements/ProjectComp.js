import React from "react";
import "../Home.css";


function ProjectComp( props ){
    return <>
        <div className="projectDiv">
            <img className="projectImg" alt="Project" src={ props.imgUrl } />
            <h3 className="projectTitle">{ props.title }</h3>
            <hr />
            <b>TECH STACK: <em>{ props.techStack }</em>  </b>
            <p>{ props.content }</p>
            <div className="container">
                <div className="row">
                        {(props.demo === "N/A")
                        ? <a href={ props.github } target="_blank" rel="noopener noreferrer">
                            <button className="projectBtn1">View Code</button>
                          </a>
                        :(<> <div className="col-sm-7">
                            <a href={ props.demo } target="_blank" rel="noopener noreferrer"><button className="projectBtn1">View Demo</button></a>
                         </div>
                        <div className="col-sm-5">
                            <a href={ props.github } target="_blank" rel="noopener noreferrer"><button className="projectBtn2">View Code</button></a>
                            
                        </div>
                        </>)
                        }
                    
                </div>
            </div>
        </div>
    </>;
};

export default ProjectComp;