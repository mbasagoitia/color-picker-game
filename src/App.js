import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button';
import ColorSquare from './components/ColorSquare';
function App() {

  const [color1, setcolor1] = useState("");
  const [color2, setcolor2] = useState("");
  const [color3, setcolor3] = useState("");
  const [squareColor, setSquareColor] = useState("#FFFFFF");

  function startGame () {
    const startGameBtn = document.querySelector("#start-game");
    startGameBtn.classList.add("hidden");
    
    const gameBtns = document.querySelectorAll(".game-btn");
    gameBtns.forEach((btn) => btn.classList.remove("hidden"));

    assignNewColors();
  }

  function getRandomColor () {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
     return randomColor; 
  }

  function assignNewColors () {

    let colorOne = getRandomColor();
    setcolor1(colorOne);
    let colorTwo = getRandomColor();
    setcolor2(colorTwo);
    let colorThree = getRandomColor();
    setcolor3(colorThree);

    let randomIndex = Math.floor(Math.random()*3);
    let matchingColor;
    if(randomIndex === 0) {matchingColor = colorOne} else if(randomIndex === 1) {matchingColor = colorTwo} else {matchingColor = colorThree};
    setSquareColor(matchingColor);
  }

  function checkColor (color, matchingColor) {
    const message = document.querySelector("#message");

    if (color === matchingColor) {
      message.setAttribute("style", "color: green");
      message.textContent = "Correct!"
    } else {
      message.setAttribute("style", "color: red");
      message.textContent = "Incorrect!"
    }
    assignNewColors();
  }

  return (
    <>
    <h1 id="title">Hex Color Game</h1>
    <div className="game-wrapper">
      <ColorSquare color={squareColor} />
      <button id="start-game" onClick={startGame}>Start Game</button>
      <span id="message"></span>
      <div id="game-btn-wrapper">
        <Button color={color1} handleClick={() => checkColor(color1, squareColor)}></Button>
        <Button color={color2} handleClick={() => checkColor(color2, squareColor)}></Button>
        <Button color={color3} handleClick={() => checkColor(color3, squareColor)}></Button>
      </div>
    </div>
    </>
  );
}

export default App;
