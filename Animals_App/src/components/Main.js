import React from "react";
import AnimalsList from "./Animals/AnimalsList";

import Home from "./Home";
import About from "./About";
import { Switch, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/animals" component={AnimalsList} />
        <Route path="/about" component={About} />
      </Switch>
    </main>
  );
};

export default Main;
