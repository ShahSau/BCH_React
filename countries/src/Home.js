import React from "react";
import Navbar from "./Navbar";

function Home() {
  return (
    <div className="home">
      <h2>Welcome to country app</h2>
      <Navbar />
      <p className="pHome">
        Country details were obtained uisng Rest Country
        <a
          href="https://restcountries.com/"
          target="_blank"
          rel="noreferrer"
          className="aHome"
        >
          {" "}
          Api
        </a>{" "}
        and weather were optained using open weather{" "}
        <a
          href="https://openweathermap.org/"
          target="_blank"
          rel="noreferrer"
          className="aHome"
        >
          {" "}
          Api
        </a>
      </p>
    </div>
  );
}

export default Home;
