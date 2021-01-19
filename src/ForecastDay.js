import React, {useState} from "react";
import "./Forecast.css";
import axios from "axios"
import ForecastDayPreview from "./ForecastDayPreview";




export default function ForecastDay(props) {
  const [loaded, setLoaded] = useState(false)
  const [forecastDay, setForecastDay] = useState(null)

  function handleForecastDayResponse(response) {
    setForecastDay(response)
    setLoaded(true)
  }
  if (loaded) {
    return (
      <div>

      <div className="Forecast row"><ForecastDayPreview data={forecastDay.daily[0]} unit={props.unit} timezone={forecastDay.timezone_offset} /></div>
      
      </div>
    )
  } else {
    let apiKey = "cc994936908b08281fdf1a93f075f62a"
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`   
    axios.get(url).then(handleForecastDayResponse)
    return "loading..."
  }
}
//&& props.lat === forecastDay.lat