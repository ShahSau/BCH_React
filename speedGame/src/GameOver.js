import React from "react";

function GameOver({ point, closeHandler }) {
  return (
    <div className="overlay">
      <div className="text">
        <h4>Game over</h4>
        <p>your score was: {point}</p>
        <button onClick={closeHandler}>X</button>
      </div>
    </div>
  );
}

export default GameOver;
