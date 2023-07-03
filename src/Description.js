import React from "react";

import "./Description.css";

export default function Description() {
  let weatherData = {
    temperature: 19,
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Description">
      <div className="row">
        <div className="col-6">
          <img
            src={weatherData.imgUrl}
            alt="Sunny icon"
            className="weather-icon"
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
