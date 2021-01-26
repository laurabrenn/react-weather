import React from "react";
import FormatDate from "./FormatDate"
import WeatherIcon from "./WeatherIcon"
import "./Today.css";


export default function Today(props) {

  function convertToF(event) {
    event.preventDefault()
    props.setUnit("fahrenheit");
  }
  function convertToC(event) {
    event.preventDefault()
    props.setUnit("celcius")
  }
  function fahrenheit(value) {
    return Math.round((value * 9/5)+32)
  }
  if (props.dayIndex===0) {
    if (props.unit==="celcius") {
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
  } else {
    let forecastData = {
    date: props.forecastDay.daily[props.dayIndex].dt,
    temp: props.forecastDay.daily[props.dayIndex].temp.day,
    low: props.forecastDay.daily[props.dayIndex].temp.min,
    high: props.forecastDay.daily[props.dayIndex].temp.max,
    feels: props.forecastDay.daily[props.dayIndex].feels_like.day,
    humidity: props.forecastDay.daily[props.dayIndex].humidity,
    wind: props.forecastDay.daily[props.dayIndex].wind_speed,
    icon: props.forecastDay.daily[props.dayIndex].weather[0].icon,
    description: props.forecastDay.daily[props.dayIndex].weather[0].description,
    time: (props.forecastDay.daily[props.dayIndex].dt+props.forecastDay.timezone_offset)*1000
  }
    if (props.unit==="celcius") {
    return(
      <div>
        <div className="Today">
          <div className="row ml-2">
            <h1>
              Forecasted weather in {props.data.name}:
            </h1>
          </div>
          <div className="row ml-2">
            <h2 className="text-capitalize">{forecastData.description}</h2>
          </div>
          <div className="row ml-2">
            <div className="col-3 large-icon-container">
              <WeatherIcon code={forecastData.icon} alt={forecastData.description} />
            </div>
          <div className="col-5 info">
           <FormatDate date={new Date(forecastData.time)} />
            <p className="temp-today">{Math.round(forecastData.temp)}°</p>
            <p>low <span className="temp-high-low-today"> {Math.round(forecastData.low)}° / {Math.round(forecastData.high)}°</span> high</p>
          </div>
          <div className="col-4 pr-3 percentages">
            <p>
              °C 
              |
              <a href="/" id="fahrenheit" onClick={convertToF}>°F</a>
            </p>
            <p>Feels like:  {Math.round(forecastData.feels)}° </p>
            <p>Humidity: {forecastData.humidity}%</p>
            <p>Wind speed: {forecastData.wind} m/s</p>
          </div>
        </div>
        </div>
      </div>
    )
    } else {
      return(
      <div>
        <div className="Today">
          <div className="row ml-2">
            <h1>
              Forecasted weather in {props.data.name}:
            </h1>
          </div>
          <div className="row ml-2">
            <h2 className="text-capitalize">{forecastData.description}</h2>
          </div>
          <div className="row ml-2">
            <div className="col-3 large-icon-container">
              <WeatherIcon code={forecastData.icon} alt={forecastData.description} />
            </div>
          <div className="col-5 info">
           <FormatDate date={new Date(forecastData.time)} />
            <p className="temp-today">{fahrenheit(forecastData.temp)}°</p>
            <p>low <span className="temp-high-low-today"> {fahrenheit(forecastData.low)}° / {fahrenheit(forecastData.high)}°</span> high</p>
          </div>
          <div className="col-4 pr-3 percentages">
            <p>
              <a href="/" id="celcius" onClick={convertToC}>°C</a>{" "}
              |
              °F
            </p>
            <p>Feels like:  {fahrenheit(forecastData.feels)}° </p>
            <p>Humidity: {forecastData.humidity}%</p>
            <p>Wind speed: {forecastData.wind} m/s</p>
          </div>
        </div>
        </div>
      </div>
    )
    }
}
}
/*
let forecastData = { 
    date: props.forecastDay.daily[props.dayIndex].dt,
    temp: props.forecastDay.daily[props.dayIndex].temp.day,
    low: props.forecastDay.daily[props.dayIndex].temp.min,
    high: props.forecastDay.daily[props.dayIndex].temp.max,
    feels: props.forecastDay.daily[props.dayIndex].feels_like.day,
    humidity: props.forecastDay.daily[props.dayIndex].humidity,
    wind: props.forecastDay.daily[props.dayIndex].wind_speed,
    icon: props.forecastDay.daily[props.dayIndex].weather[0].icon,
    description: props.forecastDay.daily[props.dayIndex].weather[0].description,
    time: (props.forecastDay.daily[props.dayIndex].dt+props.forecastDay.timezone_offset)*1000
  }
          */
          