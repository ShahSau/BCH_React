import React, { Component } from "react";
import "./App.css";
import Circle from "./Circle";
import { circles } from "./circles";
import GameOver from "./GameOver";
import "./index.css";

import endSound from "./assets/sounds/end.mp3";
import startSound from "./assets/sounds/game.mp3";

let gameendSound = new Audio(endSound);
let gamestartSound = new Audio(startSound);
const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
class App extends Component {
  state = {
    score: 0,
    current: 0,
    gameover: false,
    pace: 1500,
    rounds: 0,
    gamestart: false,
  };

  timer = undefined;

  clickHandler = (id) => {
    this.setState({
      score: this.state.score + 10,
    });
    console.log({ id });
    if (id !== this.state.current) {
      this.stopHandler();
    } else {
      this.setState({
        rounds: 0,
      });
    }
  };

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.stopHandler();
      return;
    }
    let nextActive;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);
    console.log("active circle is", this.state.current);
  };

  startHandler = () => {
    this.nextCircle();
    this.setState({
      gamestart: true,
    });
    gamestartSound.play();
    gameendSound.pause();
  };

  stopHandler = () => {
    clearTimeout(this.timer);
    gameendSound.play();
    gamestartSound.pause();
    this.setState({
      gameover: true,
      current: 0,
      pace: 1500,
    });
  };
  closeHandler = () => {
    this.setState({
      gameover: false,
      score: 0,
      rounds: 0,
      pace: 1500,
      gamestart: false,
    });
  };
  render() {
    return (
      <div className={`${this.state.gameover ? "overlay" : ""}`}>
        <h1>Speed Game</h1>
        <h4>Your Score: {this.state.score}</h4>
        <div className="circles">
          {circles.map((circle) => (
            <Circle
              key={circle.id}
              id={circle.id}
              color={circle.color}
              onClick={() => this.clickHandler(circle.id)}
              disabled={this.state.gamestart}
              active={this.state.current === circle.id}
            />
          ))}
        </div>
        <div>
          <button disabled={this.state.gamestart} onClick={this.startHandler}>
            Start
          </button>
          <button onClick={this.stopHandler}>Stop</button>
        </div>

        {this.state.gameover && (
          <GameOver point={this.state.score} closeHandler={this.closeHandler} />
        )}
      </div>
    );
  }
}
export default App;
