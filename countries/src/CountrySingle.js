import axios from "axios";
import React, { Component } from "react";
import Navbar from "./Navbar";

import { GrLocation } from "react-icons/gr";
import { FaTemperatureHigh } from "react-icons/fa";
import { FaTemperatureLow } from "react-icons/fa";
import { WiHumidity } from "react-icons/wi";
import { MdVisibility } from "react-icons/md";

function getCountry(capital) {
  return axios.get(`https://restcountries.com/v2/capital/${capital}`);
}

function getWeather(capital) {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
  );
}
class CountrySingle extends Component {
  state = {
    country: {},
    weather: {},
    isLoading: true,
  };
  componentDidMount() {
    Promise.all([
      getCountry(this.props.params.name),
      getWeather(this.props.params.name),
    ]).then((results) => {
      this.setState({
        country: results[0].data[0],
        weather: results[1].data,
        isLoading: false,
      });
      console.log("response", results);
      console.log(this.state.country);
      console.log(this.state.weather);
    });
  }
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      );
    }

    if (!this.state.isLoading) {
      return (
        // <div className="single">
        //   <Navbar />

        //   <div class="p-10">
        //     <div class=" w-full lg:max-w-full lg:flex">
        //       <div class="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
        //         <img
        //           src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
        //           alt={this.state.weather.weather[0].description}
        //         />
        //       </div>
        //       <div>
        //         <div className="mb-8">
        //           <p className="text-sm text-gray-600 flex items-center">
        //             <GrLocation /> {this.state.country.capital}
        //           </p>
        //           <div class="text-white-900 font-bold text-xl mb-2">
        //             Current Temperature: {this.state.weather.main.temp}&#8451;
        //             <br />
        //             {this.state.weather.weather[0].description} with feels like:
        //             {this.state.weather.main.feels_like}&#8451;
        //             <br />
        //             <div class="flex items-center">
        //               <div class="flex items-center">
        //                 <FaTemperatureHigh />
        //                 {this.state.weather.main.temp_max}&#8451;&nbsp;&nbsp;
        //               </div>
        //               <div></div>
        //               <div class="flex items-center">
        //                 <FaTemperatureLow />
        //                 {this.state.weather.main.temp_min}&#8451;
        //               </div>
        //             </div>
        //           </div>
        //           <p class="text-gray-700 text-base">
        //             {/* , humidity, visibility,  */}
        //             <div class="flex items-center">
        //               <WiHumidity /> {this.state.weather.main.humidity}
        //             </div>
        //             <div class="flex items-center">
        //               <MdVisibility /> {this.state.weather.visibility} meters
        //             </div>
        //           </p>
        //         </div>
        //         {/* </div> */}
        //       </div>
        //     </div>
        //   </div>

        // </div>
        <div id="cards_landscape_wrap-2">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3">
                <div className="card-flyer">
                  <div className="text-box">
                    <div className="image-box">
                      <img
                        src={`http://openweathermap.org/img/wn/${this.state.weather.weather[0].icon}@2x.png`}
                        alt="weather"
                      />
                    </div>
                    <div className="text-container">
                      <h6>{this.state.country.capital}</h6>
                      <p>
                        Current Temperature: {this.state.weather.main.temp}
                        &#8451;
                        <br />
                        {this.state.weather.weather[0].description} weather with
                        feels like:
                        {this.state.weather.main.feels_like}&#8451;
                        <div class="flex items-center">
                          <FaTemperatureHigh />
                          {this.state.weather.main.temp_max}&#8451;&nbsp;&nbsp;
                        </div>
                        <div></div>
                        <div class="flex items-center">
                          <FaTemperatureLow />
                          {this.state.weather.main.temp_min}&#8451;
                        </div>
                        <div class="flex items-center">
                          <WiHumidity /> {this.state.weather.main.humidity} %
                        </div>
                        <div class="flex items-center">
                          <MdVisibility /> {this.state.weather.visibility}{" "}
                          meters
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        // </div>
      );
    }
  }
}

export default CountrySingle;
