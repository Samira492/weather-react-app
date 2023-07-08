import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecast.temperature.maximum);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecast.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function minTemperature() {
    let temperature = Math.round(props.forecast.temperature.minimum);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
      <WeatherIcon icon={props.forecast.condition.icon} size={36} />
      <div className="weatherForecast-temperatures">
        <span className="weatherForecast-temperature-max">
          {maxTemperature()}
        </span>
        <span className="weatherForecast-temperature-min">
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
