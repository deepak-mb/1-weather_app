import React from "react";
import Image from "./Image.js";
import WeatherForm from "./WeatherForm.js";
export default function Weather() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <Image />
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
            <WeatherForm />
          </div>
        </div>
      </div>
    </div>
  );
}
