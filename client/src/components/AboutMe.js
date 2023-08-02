import React from "react";
import "./Home.css";

function AboutMe() {
    const [show, setShow] = React.useState(false);
    const [showResume, setShowResume] = React.useState(false);

    return <div className = "d-flex flex-column min-vh-100">
        <h1> Namaste🙏! </h1><br />
        <p> I'm Abhijith Dameruppala, a highly motivated <mark>Data Science graduate student</mark> with a strong interest in Software Engineering. </p>
        <p>Currently pursuing a Master's degree in Data Science at <mark><a href="https://bloomington.iu.edu/index.html" target="_blank" rel="noopener noreferrer">Indiana University - Bloomington</a></mark>, I am eager to graduate in May 2024. 
        Throughout my academic journey, since my engineering from <mark><a href="https://vce.ac.in/" target="_blank" rel="noopener noreferrer">Vasavi College of Engineering</a></mark>, I have been gaining extensive knowledge in various aspects of Problem Solving, Data Science, Software Engineering, Advanced Database Technologies, and <u><span className="dsa" onClick={() => {setShowResume(!showResume);}}>more</span></u>. 
        </p>
        {showResume
        ? <div style={{ display: "flex", 
                        margin: "5px auto",
                        paddingBottom: "15px"}}>
        <a 
            href="https://drive.google.com/file/d/1HOUIQMRHxz7PwywHB93yWuwenC53jlh-/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
                <button 
                    style={
                        {marginRight: "15px"}} 
                    className="btn btn-secondary btn-sm">
                    SDE Resume
                </button>
        </a>
        <a 
            href="https://drive.google.com/file/d/1S8vmomHmBlxCsH2EWuYFTfRf59pnE0dI/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer">
                <button 
                    className="btn btn-secondary btn-sm">DS Resume
                </button>
        </a>
        </div>

        : null}
        
        <p>Additionally, I've had the opportunity to intern as a <mark>Front-End Web Developer</mark> at <mark><a href="https://www.radicalx.co/" target="_blank" rel="noopener noreferrer">RadicalX</a></mark>, a New York based start-up company that enables developers from round the globe to learn, earn, and connect with other developers.<br />
        This is where I honed my expertise in NextJS, React JS, Material UI, integrating APIs and collaborated with an amazing team using Git and GitHub for version control.</p>
        <p>My achievements include securing a <u><span className="dsa" onClick={() => {setShow(!show)}}>top position in a DSA hackathon</span></u>, leading the graphic designing team for Electrrico Revisita, and also Representing Electrical department by being a part of the Code-Chef's Executive Team for Vasavi College chapter.</p>
        
        <p> I'm passionate about delivering innovative solutions and I'm excited to leverage my skills and dedication to contribute to the fields of data science and software development.
        </p>

        {
            show
            ? <iframe 
                id="iframe"
                src="https://www.linkedin.com/embed/feed/update/urn:li:share:6987967580489625600" 
                height="380" 
                width="550" 
                frameborder="0" 
                allowfullscreen="" 
                title="Embedded post" />
            : null
        }
        
        
    </div> ;
};

export default AboutMe;