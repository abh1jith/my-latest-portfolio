import React, { useState, useEffect } from "react";
import Axios from "axios";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import Joke from "./elements/Joke";

function Home(){

    const [ setup, setSetup ] = useState("");
    const [ delivery, setDelivery ] = useState("");
    const [ temp, setTemp ] = useState(0);

    useEffect(() => {
    Axios.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist&type=twopart")
        .then((response => {
        setSetup(response.data.setup);
        setDelivery(response.data.delivery);
        }))
    }, [temp])


    return(
    <body className="d-flex flex-column min-vh-100">
         <h1>Home</h1>
        <Joke
            ques={setup}
            ans={delivery} />
        <Button onClick={() => {
            setTemp(temp + 1)
        }}>Another Joke</Button>
</body>);
}

export default Home;