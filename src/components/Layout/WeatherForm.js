import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";
import axios from "axios";
import WeatherTable from "./WeatherTable";
import Error from "./Error";
// console.log(process.env.REACT_APP_DEEPAK_WEATHER_API_KEY);

class WeatherForm extends Component {
  state = {
    city: "",
    country: "",
    temperature: "",
    humidity: "",
    description: "",
    iconID: "",
    error: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.city === "" || this.state.country === "") {
      this.setState({
        error: "Please enter the city and country."
      });
    } else {
      const { city, country } = this.state;
      this.getWeather(city, country);
    }
  };

  // onClear = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     city: "",
  //     country: "",
  //     temperature: "",
  //     humidity: "",
  //     description: "",
  //     error: ""
  //   });
  // };

  getWeather = async (city, country) => {
    await axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${
          process.env.REACT_APP_DEEPAK_WEATHER_API_KEY
        }&units=imperial`
      )
      .then(response => {
        // console.log(response);
        this.setState({
          temperature: response.data.main.temp,
          humidity: response.data.main.humidity,
          description: response.data.weather[0].description,
          iconID: response.data.weather[0].icon,
          error: null
        });
      })
      .catch(err => {
        if (err) {
          this.setState({
            city: "",
            country: "",
            temperature: "",
            humidity: "",
            description: "",
            iconID: "",
            error: "Please enter the correct city and country."
          });
        }
      });
  };

  render() {
    const {
      city,
      country,
      temperature,
      humidity,
      description,
      iconID,
      error
    } = this.state;
    return (
      <div>
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
            <Button field="Get Weather" />
            {/* <Button field="Clear" onClick={this.onClear} /> */}
          </form>
        </div>
        <div className="col-12 p-0">
          {temperature ? (
            <WeatherTable
              city={city}
              country={country}
              temperature={temperature}
              humidity={humidity}
              description={description}
              iconID={iconID}
            />
          ) : null}
          {error ? <Error message={error} /> : null}
        </div>
      </div>
    );
  }
}

export default WeatherForm;
