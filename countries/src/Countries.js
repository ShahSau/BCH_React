import "./index.css";
import axios from "axios";
import React, { Component } from "react";
import Navbar from "./Navbar";
import CountryCard from "./CountryCard";

class Countries extends Component {
  state = {
    data: [],
    my_data: [],
    searchInput: "",
    isLoding: true,
  };

  componentDidMount() {
    axios
      .get(
        "https://restcountries.com/v2/all?fields=name,capital,flags,languages,population,currencies"
      )

      .then((res) => {
        this.setState({ data: res.data, isLoding: false });
        console.log(this.state.data.map((i) => i.population).sort());
        console.log(this.state.data);
      });
  }
  searchHandler = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
    console.log(this.state.searchInput);
  };

  render() {
    return (
      <div className="header">
        {this.state.isLoding && <h1 className="loader">loading...</h1>}
        <Navbar />
        {/* <h1>Countries of the world</h1>; Search for{" "} */}
        <input
          value={this.state.searchInput}
          onChange={this.searchHandler}
          type="text"
          className="in"
          placeholder="Search"
        />

        <div className="container mt-2">
          <div className="row" style={{}}>
            {this.state.data
              .filter((country) => {
                return country.name
                  .toLocaleLowerCase()
                  .includes(this.state.searchInput.toLowerCase());
              })
              .map((country) => (
                <CountryCard {...country} key={country.name} />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Countries;
