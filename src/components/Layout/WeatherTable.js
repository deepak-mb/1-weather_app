import React from "react";
import axios from "axios";

const WeatherTable = props => {
  const { city, country, temperature, humidity, description, iconID } = props;
  return (
    <div className="my-2">
      <table>
        <tbody>
          <tr>
            <td>City:</td>
            <td>{city}</td>
          </tr>
          <tr>
            <td>Country:</td>
            <td>{country}</td>
          </tr>
          <tr>
            <td>Temperature:</td>
            <td>{((temperature-32)*5/9).toFixed(2)} &#8451;</td>
          </tr>
          <tr>
            <td>Humidity:</td>
            <td>{humidity}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td className="desc mr-2">{description}</td>
            <td>
              <img
                src={`http://openweathermap.org/img/w/${iconID}.png`}
                alt="Weather Icon"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default WeatherTable;
