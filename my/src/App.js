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
  

  return (
    <div className="App">
        <h1> Emoji Tracker </h1>
        <input onChange={inputChangeHandler}></input>

        <div> {meaning} </div>
        <div> Our Database is : 
                😻
                😇
                🥰
                😈
                😊
                😸
                😄
                😙
                🙂
       </div>
    </div>
  );
}

export default App;
