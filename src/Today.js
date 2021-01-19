import React, {useState} from "react";
import FormatDate from "./FormatDate"
import WeatherIcon from "./WeatherIcon"
import "./Today.css";

export default function Today(props) {
  const [unit, setUnit] = useState("celcius")
  function convertToF(event) {
    event.preventDefault()
    setUnit("fahrenheit")
  }
  function convertToC(event) {
    event.preventDefault()
    setUnit("celcius")
  }
  function fahrenheit(value) {
    
    return Math.round((value * 9/5)+32)
  }
  if (unit==="celcius") {
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
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
        <div className="col-5 info">
          <FormatDate date={props.data.date} />
          <p className="temp-today">{props.data.temp}°</p>
          <p>low <span className="temp-high-low-today"> {props.data.low}° / {props.data.high}°</span> high</p>
        </div>
        <div className="col-4 pr-3 percentages">
          <p>
            °C 
            |
            <a href="/" id="fahrenheit" onClick={convertToF}>°F</a>
          </p>
          <p>Feels like:  {props.data.feelsLike}° </p>
          <p>Humidity: {props.data.humidity}%</p>
          <p>Wind speed: {props.data.windSpeed} m/s</p>
        </div>
      </div>
      </div>
    );
  } else {
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
            <WeatherIcon code={props.data.icon} alt={props.data.description} />
          </div>
        <div className="col-5 info">
          <FormatDate date={props.data.date} />
          <p className="temp-today">{fahrenheit(props.data.temp)}°</p>
          <p>low <span className="temp-high-low-today"> {fahrenheit(props.data.low)}° / {fahrenheit(props.data.high)}°</span> high</p>
        </div>
        <div className="col-4 pr-3 percentages">
          <p>
            <a href="/" id="celcius" onClick={convertToC}>°C</a>{" "}
            |
            °F
          </p>
          <p>Feels like:  {fahrenheit(props.data.feelsLike)}° </p>
          <p>Humidity: {props.data.humidity}%</p>
          <p>Wind speed: {props.data.windSpeed} m/s</p>
        </div>
      </div>
      </div>
    )
  }
}
