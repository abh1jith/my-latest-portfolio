import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import $ from "jquery";

import ProfileViews from "./elements/ProfileViews";
import Joke from "./elements/Joke";
import Weather from "./weather/Weather";

function Home(){
  const [role, setRole] = React.useState("Software developer");

  setTimeout(() => {
    if(role === "Software developer"){
      setRole("Data Scientist");
    }
    else{
      setRole("Software developer");
    }
  }, 2000)

  return(
    <div className="d-flex flex-column min-vh-100">
    <br />
      <h3 className="name">Hello! I am Abhijith. </h3>
      <h3 className="name role">A product-focused { role }.</h3>
    <br />
      <h3 className="name">Welcome to my portfolio. </h3>
      <h3 className="name"><span className="works">[ It is still in works ]</span></h3><br />
      

      <ProfileViews />

      <Joke />
    
      <Weather />
</div>);
}

export default Home;