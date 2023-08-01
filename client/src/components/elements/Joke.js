import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios";

function Joke(){
  
  const [clicked, setClicked] = React.useState(false);
  const [setup, setSetup] = React.useState("");
  const [delivery, setDelivery] = React.useState("");
  const [show, setShow] = React.useState(true);

  function getJoke(){
    setClicked(true);
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
          width: 300}}>
        <div className="card-body">
          <button className="btn btn-secondary"
                onClick={ getJoke }>Wanna hear a Joke?</button>
          
          {!clicked
            ?<p style={{opacity:0.5}}className="text-body-secondary">Click &uarr;</p>
            : null
          }
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