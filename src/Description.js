import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

import "./Description.css";

export default function Description() {
  let weatherData = {
    temperature: 19,
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Description">
      <div className="row mb-5">
        <div className="col-6">
          <ReactAnimatedWeather
            icon="CLOUDY"
            color="#ffffff"
            size={48}
            animate={true}
          />
          <span className="temperature">{weatherData.temperature}</span>
          <span className="units">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity:{weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
