import React, { Component } from "react";

export default class Form extends Component {
  state = {
    fName: "",
    lName: "",
    num: "",
  };
  mgaicHandler = (event) => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    return (
      <div>
        <p>First name is: {this.state.fName}</p>
        <input type="text" name="fName" onChange={this.mgaicHandler}></input>

        <p>Second name is: {this.state.lName}</p>
        <input type="text" name="lName" onChange={this.mgaicHandler}></input>

        <p>Number is: {this.state.num}</p>
        <input type="text" name="num" onChange={this.mgaicHandler}></input>
      </div>
    );
  }
}
