import React from "react";
import "./Home.css";

function AboutMe() {
    const [show, setShow] = React.useState(false);

    return <div className = "d-flex flex-column min-vh-100">
        <h1> Namaste🙏! </h1><br />
        <p> I'm Abhijith Dameruppala, a highly motivated <mark>Data Science graduate student</mark> with a strong interest in Software Engineering. </p>
        <p>Currently pursuing a Master's degree in Data Science at <mark><a href="https://bloomington.iu.edu/index.html" target="_blank" rel="noopener noreferrer">Indiana University - Bloomington</a></mark>, I am eager to graduate in May 2024. 
        Throughout my academic journey, I've gained extensive knowledge in various aspects of Data Science, Software Engineering, and Advanced Database Technologies. 
        </p>
        <p>Additionally, I've had the opportunity to intern as a <mark>Front-End Web Developer</mark> at <mark><a href="https://www.radicalx.co/" target="_blank" rel="noopener noreferrer">RadicalX</a></mark>, a New York based start-up company that enables developers from round the globe to learn, earn, and connect with other developers.<br />
        This is where I honed my expertise in NextJS, React JS, Material UI, integrating APIs and collaborated with an amazing team using Git and GitHub for version control.</p>
        <p>My achievements include securing a <u><span id="dsa" onClick={() => {setShow(!show)}}>top position in a DSA hackathon</span></u>, leading the graphic designing team for Electrrico Revisita, and also Representing Electrical department by being a part of the Code-Chef's Executive Team for Vasavi College chapter.</p>
        
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