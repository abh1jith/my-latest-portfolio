import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";

function Joke(){
  
  const [setup, setSetup] = React.useState("");
  const [delivery, setDelivery] = React.useState("");
  const [show, setShow] = React.useState(true);

  function getJoke(){
    Axios.get("https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist&type=twopart")
      .then((response) => {
          setSetup(response.data.setup);
          setDelivery(response.data.delivery);
          setShow(false);
        })
      .catch((err)=>{
        console.log(err);
        alert("API error. Try again later");
      })
  }
    return <>
     <div className="card" style={{
          width: 400}}>
        <div className="card-body">
          <button className="btn btn-secondary"
                onClick={ getJoke }>Get a Joke</button>
          
          <p className="card-text">{ setup } </p>
          {!show
            ?<button className="btn btn-light" onClick={()=>{setShow(true)}} >Because</button>
            : null}
            
          {show
            ?<p>{ delivery }</p>
            : null}

        </div>
      </div>
    </>
};

export default Joke;