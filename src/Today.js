import React from "react";
import "./Today.css";

export default function Today() {
  return (
    <div className="Today">
    <div className="row ml-2">
        <h1>
          Current weather in <span className="city"> </span>:
        </h1>
      </div>
      <div className="row ml-2">
        <h2>Cloudy</h2>
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
        <p className="date">Sunday October 4th</p>
        <p className="time">7.03pm</p>
        <p className="temp-today">°</p>
        <p>
          low <span className="temp-high-low-today"> °</span> high
        </p>
      </div>
      <div className="col-4 pr-3 percentages">
        <p>
          <a href="/" id="celcius" className="active">
            °C
          </a>{" "}
          |
          <a href="/" id="fahrenheit">
            °F
          </a>
        </p>
        <p>
          Feels like: <span id="feels"> ° </span>
        </p>
        <p>
          Humidity: <span id="humidity"> % </span>
        </p>
        <p>
          Wind speed: <span id="wind"></span> <span id="wind-units">m/s</span>
        </p>
      </div>
    </div>
    </div>

  );
}
