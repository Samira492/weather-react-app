import ReactAnimatedWeather from "react-animated-weather";

export default function Forecast() {
  let forecast = (
    <div className="col-2">
      <ul>
        <li>Sat</li>
        <li>
          <ReactAnimatedWeather
            icon="RAIN"
            color="#ffffff"
            size={48}
            animate={true}
          />
        </li>

        <li>-2°/9°</li>
      </ul>
    </div>
  );

  return (
    <div className="forecast">
      <div className="row">
        {forecast}
        {forecast}
        {forecast}
        {forecast}
        {forecast}
      </div>
    </div>
  );
}
