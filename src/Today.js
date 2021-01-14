import React from "react";
import FormatDate from "./FormatDate"
import "./Today.css";

export default function Today(props) {
    return (
      <div className="Today">
        <div className="row ml-2">
          <h1>
            Current weather in {props.data.name}:
          </h1>
        </div>
        <div className="row ml-2">
          <h2 className="text-capitalize">{props.data.description}</h2>
        </div>
        <div className="row ml-2">
          <div className="col-3 large-icon-container">
            <img
              id="image"
              src="https://openweathermap.org/img/wn/10d@2x.png"
              alt="cloud"
            />
          </div>
        <div className="col-5 info">
          <FormatDate date={props.data.date} />
          <p className="temp-today">{props.data.temp}°</p>
          <p>low <span className="temp-high-low-today"> {props.data.low}° / {props.data.high}°</span> high</p>
        </div>
        <div className="col-4 pr-3 percentages">
          <p>
            <a href="/" id="celcius" className="active">°C</a>{" "}
            |
            <a href="/" id="fahrenheit">°F</a>
          </p>
          <p>Feels like:  {props.data.feelsLike}° </p>
          <p>Humidity: {props.data.humidity}%</p>
          <p>Wind speed: {props.data.windSpeed} m/s</p>
        </div>
      </div>
      </div>
  );
}
