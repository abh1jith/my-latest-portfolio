import React, { useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Joke(props){
    
  const [ show, setShow ] = useState(false);

  function showAns(){
    return <p>{ props.ans }</p>
  }

  return <>
    <div className="text-center" >
      { props.ques }<br />
      {show 
          ? showAns()
          : <Button onClick={() => {
                                  setShow(true)
                              }}>
                              Because
              </Button>}    
    </div>
  </>
};

export default Joke;