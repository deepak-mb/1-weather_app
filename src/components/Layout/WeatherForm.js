import React, { Component } from "react";
import Input from "./Input";
import Button from "./Button";

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
    console.log(this.state);
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
