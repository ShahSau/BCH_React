import Boxes from "./Boxes";
import Form from "./Form";
import { Switch, Route } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>This is the HOME page</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>This is the About page</h1>
    </div>
  );
};
const Contacts = () => {
  return (
    <div>
      <h1>This is the Contacts page</h1>
    </div>
  );
};
const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/form" component={Form} />
        <Route path="/boxes" component={Boxes} />
      </Switch>
    </main>
  );
};

export default Main;
