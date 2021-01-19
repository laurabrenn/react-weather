import React, {useState} from "react";
import axios from "axios"
import Today from "./Today";
import ForecastHour from "./ForecastHour";
import ForecastDay from "./ForecastDay";

export default function WeatherApp(props) {
  const [weatherData, setWeatherData] = useState({ready: false})
  const [city, setCity] = useState(props.defaultCity)
  const [unit, setUnit] = useState("celcius")

  

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
        icon: response.data.weather[0].icon,
        lat: response.data.coord.lat,
        lon: response.data.coord.lon 
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
  function getCurrentLocation(event) {
    event.preventDefault()
    navigator.geolocation.getCurrentPosition(current);
  }
  function current(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    let apiKey = "cc994936908b08281fdf1a93f075f62a";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
              onClick={getCurrentLocation}
            />
          </div>
        </form>
        <div className="row">
          <div className="col-2">
            <ForecastDay lat={weatherData.lat} lon={weatherData.lon} unit={unit}/>
          </div>
          <div className="col-10">
            <Today data={weatherData} unit={unit} setUnit={setUnit}/>
            <ForecastHour city={weatherData.name} unit={unit}/>
          </div>
        </div>
      </div>
    );
  } else {
    search()
    return "Loading.."
  }
}

