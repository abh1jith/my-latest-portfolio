import React from "react";
import "../Home.css";


function ProjectComp( props ){
    return <>
        <div className="projectDiv">
            <img className="projectImg" alt="Project" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg" />
            <h3 className="projectTitle">{ props.title }</h3>
            <hr />
            <p>{ props.content }</p>
            <div className="container">
                <div className="row">
                    <div className="col-sm-7">
                        <button className="projectBtn1">View Demo</button>
                    </div>
                    <div className="col-sm-5">
                        <button className="projectBtn2">More Details</button>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default ProjectComp;