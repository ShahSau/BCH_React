import React, { Component } from "react";
import Box from "./Box";

class Boxes extends Component {
  state = {
    persons: [
      { id: 1, name: "XXXX", age: 25, title: "CEO" },
      { id: 2, name: "YYYY", age: 35, title: "Designer" },
      { id: 3, name: "ZZZZ", age: 40, title: "Developer" },
      { id: 4, name: "AAAA", age: 40, title: "Developer" },
    ],
  };

  changeNameHandler = () => {
    console.log("pressed");
  };

  render() {
    return (
      <>
        {this.state.persons.map((item) => (
          <Box
            key={item.id}
            name={item.name}
            age={item.age}
            title={item.title}
          />
        ))}
      </>
    );
  }
}

export default Boxes;
