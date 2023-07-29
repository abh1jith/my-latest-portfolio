import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Home.css";

import Joke from "./elements/Joke";
import Weather from "./weather/Weather";

function Home(){
    return(
    <div className="d-flex flex-column min-vh-100">
    <div className="jumbotron">
  <h1 className="display-3 name" >ABHIJITH DAMERUPPALA</h1>
  </div>
         <h1>Home</h1>
        <Joke />
        <Weather />
</div>);
}

export default Home;