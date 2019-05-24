import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";

console.log(process.env.REACT_APP_WEATHER_API_KEY);


class WeatherForm extends Component {
  state = {
    city: "",
    country: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    // const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

    const { city, country } = this.state;
    this.getWeather(city, country);
  };

  getWeather = async (city, country) => {
    console.log(process.env.REACT_APP_WEATHER_API_KEY);
    // Deepak key: c8ba6c107afe6c81bb0bc7bb6301b949
    // Shante key: bc36f5b94179a769aae519f61e89018d
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`
      )
      .then(response => {
        console.log(response);
      })
      .catch(err => {
        if (err) {
          alert("screwed");
        }
      });
  };
  render() {
    const { city, country } = this.state;
    return (
      <div>
        <h5>Enter city and Country</h5>
        <form onSubmit={this.onSubmit}>
          <Input
            type="text"
            name="city"
            placeholder="City"
            value={city}
            onChange={this.onChange}
          />
          <Input
            type="text"
            name="country"
            placeholder="Country"
            value={country}
            onChange={this.onChange}
          />
          <Button />
        </form>
      </div>
    );
  }
}

export default WeatherForm;
