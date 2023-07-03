import React from "react";

import "./Information.css";

export default function Information() {
  let weatherData = {
    city: "Tehran",
    date: "Fri 21:28",
    description: "Cloudy",
  };
  return (
    <div className="Information">
      <h1>{weatherData.city}</h1>

      <ul>
        <li> Last updated at {weatherData.date}</li>
        <li>{weatherData.description}</li>
      </ul>
    </div>
  );
}
