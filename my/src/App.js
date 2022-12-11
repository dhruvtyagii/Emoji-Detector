import logo from './logo.svg';
import './App.css';

import React, {useState} from "react";
import "./styles.css"

const emojiDictionary = {
  "😻": "love",
  "😇": "angelic",
  "🥰": "blushing",
  "😈": "devilish",
  "😊": "happy",
  "😸": "very happy",
  "😄": "laughing",
  "😙": "whistling",
  "🙂": "smiling",
}

function App() {
  var [meaning, setMeaning] = useState(" ")

  function inputChangeHandler(event){

    var userInput = event.target.value;

    meaning = emojiDictionary[userInput];

    if (meaning === undefined){
      meaning = "we don't have this in our database";
    }
    
    setMeaning(meaning);

    console.log(meaning);
    console.log(userInput);

  }

  function clickEmoji(event) {
    var userInput = event.target.name;
    meaning = userInput;

    if (meaning === undefined){
      meaning = "we don't have this in our database";
    }
    
    setMeaning(meaning);

    console.log(meaning);
    console.log(userInput);

  }
  

  return (
    <div className="App">
        <h1> Emoji Tracker </h1>
        <input onChange={inputChangeHandler}></input>
  
        <div> {meaning} </div>
        <div> Our Database is : 
                <button name= "love" onClick={clickEmoji}>😻</button> 
                <button name = "angelic" onClick={clickEmoji} >😇</button>
                <button name = "blushing" onClick={clickEmoji}>🥰</button>
                <button name = "devilish" onClick={clickEmoji}>😈</button>
                <button name = "happy" onClick={clickEmoji}>😊</button>
                <button name = "very happy" onClick={clickEmoji}>😸</button>
                <button name = "laughing" onClick={clickEmoji}>😄</button>
                <button name = "whistling" onClick={clickEmoji}>😙</button>
                <button name = "smiling" onClick={clickEmoji}>🙂</button>
       </div>
    </div>
  );
}

export default App;
