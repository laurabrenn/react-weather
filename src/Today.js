import React, {useState} from "react";
import axios from "axios"
import FormatDate from "./FormatDate"
import "./Today.css";

export default function Today(props) {
    const [weatherData, setWeatherData] = useState({ready: false})
    function handleResponse(response) {
    console.log(response.data)
    setWeatherData({
        ready: true,
        name: response.data.name,
        description: response.data.weather[0].description,
        date: new Date(response.data.dt*1000),
        time: "7.03pm",
        temp: Math.round(response.data.main.temp),
        low: Math.round(response.data.main.temp_min),
        high: Math.round(response.data.main.temp_max),
        feelsLike: Math.round(response.data.main.feels_like),
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
    })
    
}
    if (weatherData.ready) {
    return (
    <div className="Today">
    <div className="row ml-2">
        <h1>
          Current weather in {weatherData.name}:
        </h1>
      </div>
      <div className="row ml-2">
        <h2 className="text-capitalize">{weatherData.description}</h2>
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
        <FormatDate date={weatherData.date} />
        <p className="temp-today">{weatherData.temp}°</p>
        <p>
          low <span className="temp-high-low-today"> {weatherData.low}° / {weatherData.high}°</span> high
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
          Feels like:  {weatherData.feelsLike}° 
        </p>
        <p>
          Humidity: {weatherData.humidity}%
        </p>
        <p>
          Wind speed: {weatherData.windSpeed} m/s
        </p>
      </div>
    </div>
    </div>

  );
    } else {
    const apiKey = "cc994936908b08281fdf1a93f075f62a"
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiURL).then(handleResponse)
    return "Loading.."
    }
}
