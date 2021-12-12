import {
  Route,
  BrowserRouter as Router,
  Routes,
  useParams,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Countries from "./Countries";
import About from "./About";
import CountrySingle from "./CountrySingle";
import "./index.css";
const App = () => {
  const RouteWrapper = (props) => {
    const params = useParams();
    return <CountrySingle params={params} {...props} />;
  };
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/countries" element={<Countries />} />
          <Route path="/countries/:name" element={<RouteWrapper />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
