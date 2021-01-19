import React, {useState} from "react";
import axios from "axios"
import Today from "./Today";
import Forecast from "./Forecast";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ready: false})
  const [city, setCity] = useState(props.defaultCity)

  function handleResponse(response) {
    setWeatherData({
        ready: true,
        name: response.data.name,
        description: response.data.weather[0].description,
        date: new Date((response.data.dt+response.data.timezone)*1000),
        temp: Math.round(response.data.main.temp),
        low: Math.round(response.data.main.temp_min),
        high: Math.round(response.data.main.temp_max),
        feelsLike: Math.round(response.data.main.feels_like),
        humidity: response.data.main.humidity,
        windSpeed: response.data.wind.speed,
        icon: response.data.weather[0].icon
    })  
  }
  function search() {
    const apiKey = "cc994936908b08281fdf1a93f075f62a"
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiURL).then(handleResponse)
  }

  function handleSubmit(event) {
    event.preventDefault()
    search(city)
  }

  function handleCityChange(event) {
    setCity(event.target.value)
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherApp">
        <form onSubmit={handleSubmit}>
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control"
              placeholder="Enter a city"
              id="city-input"
              autoComplete="off"
              autoFocus="on"
              onChange={handleCityChange}
            />
            <input
              className="btn btn-secondary"
              type="submit"
              id="search-button"
              value="Search"
            />
            <input
              className="btn btn-success ml-2"
              type="button"
              id="location-button"
              value="My location"
            />
          </div>
        </form>
        <Today data={weatherData} unit="celcius"/>
        <Forecast city={weatherData.name}/>
      </div>
    );
  } else {
    search()
    return "Loading.."
  }
}

