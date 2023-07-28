import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Joke from "./elements/Joke";
import Weather from "./weather/Weather";

function Home(){

    return(
    <body className="d-flex flex-column min-vh-100">
         <h1>Home</h1>
        <Joke />
        <Weather />
</body>);
}

export default Home;