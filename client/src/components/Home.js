import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";
import $ from "jquery";

import ProfileViews from "./elements/ProfileViews";
import Joke from "./elements/Joke";
import Weather from "./weather/Weather";

function Home(){
  const [role, setRole] = React.useState("Software Developer");

  setTimeout(() => {
    if(role === "Software Developer"){
      setRole("Data Scientist");
    }
    else{
      setRole("Software Developer");
    }
  }, 2000)

  return(
    <div className="d-flex flex-column min-vh-100">
    <br />
      <h3 className="name">Welcome to my portfolio. <br /><br />
      I am Abhijith. A product-focused fullstack developer.</h3>

      <ProfileViews />

      <Joke />
    
      <Weather />
</div>);
}

export default Home;