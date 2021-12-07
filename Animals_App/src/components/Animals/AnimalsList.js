import React, { Component } from "react";
import { animals } from "./animals";
import AnimalsCard from "./AnimalsCard";

import { Switch, Route } from "react-router-dom";
import AnimalSingle from "./AnimalSingle";

class AnimalsList extends Component {
  state = {
    searchInput: "",
  };

  searchInputHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  render() {
    const new_animal = animals.filter((animal) =>
      animal.name.toLowerCase().includes(this.state.searchInput.toLowerCase())
    );
    const animalslisting = new_animal.map((item) => (
      <AnimalsCard key={item.name} name={item.name} />
    ));
    return (
      <div>
        <Switch>
          <Route exact path={this.props.match.path}>
            search animals:&nbsp;
            <input type="text" onChange={this.searchInputHandler} />
            {animalslisting.length === 0 && (
              <div className="non">oops! search again</div>
            )}
            <div className="animalsList">{animalslisting}</div>
          </Route>
          <Route path={`${this.props.match.path}/:animal`}>
            <AnimalSingle />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default AnimalsList;
