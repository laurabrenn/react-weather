import React, {useState} from "react";
import "./Forecast.css";
import axios from "axios"
import ForecastHourPreview from "./ForecastHourPreview";




export default function ForecastHour(props) {
  const [loaded, setLoaded] = useState(false)
  const [forecast, setForecast] = useState(null)

  function handleForecastResponse(response) {
    setForecast(response.data)
    setLoaded(true)
  }
  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="Forecast row">
       <ForecastHourPreview data={forecast.list[(0+props.dayIndex*8)]} unit={props.unit} timezone={forecast.city.timezone}/>
       <ForecastHourPreview data={forecast.list[(1+props.dayIndex*8)]} unit={props.unit} timezone={forecast.city.timezone}/>
       <ForecastHourPreview data={forecast.list[(2+props.dayIndex*8)]} unit={props.unit} timezone={forecast.city.timezone}/>
       <ForecastHourPreview data={forecast.list[(3+props.dayIndex*8)]} unit={props.unit} timezone={forecast.city.timezone}/>
       <ForecastHourPreview data={forecast.list[(4+props.dayIndex*8)]} unit={props.unit} timezone={forecast.city.timezone}/>


      </div>
    )
  } else {
    let apiKey = "cc994936908b08281fdf1a93f075f62a"
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
    axios.get(url).then(handleForecastResponse)
    return "loading"
  }
}
