import logo from './logo.svg';
import './App.css';

import React, {useState} from "react";
import "./styles.css"

var welcome = 'Tanay';

function App() {
  const [likeCounter, setLikeCounter] = useState(0)
  var  [userInput, setUserInput] = useState("")

      function likeButtonClicked() {

        var newLikeCounter = likeCounter + 1;
        setLikeCounter(newLikeCounter);
        console.log(likeCounter);

      }

      function inputChangeHandler(event) {
        setUserInput(event.target.value);

      }
  
  return (
    <div className="App">
        <h1>Welcome <span style = {{color:'blue'}}> {welcome} </span></h1> {likeCounter}
        <button onClick={likeButtonClicked}>Click Me</button>
        <input onChange={inputChangeHandler}></input> {userInput}
    </div>
  );
}

export default App;
