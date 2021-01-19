import React, {useState} from "react";
import "./Forecast.css";
import axios from "axios"
import ForecastPreview from "./ForecastPreview";




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
       <ForecastPreview data={forecast.list[0]} unit={props.unit} timezone={forecast.city.timezone}/>
       <ForecastPreview data={forecast.list[1]} unit={props.unit} timezone={forecast.city.timezone}/>
       <ForecastPreview data={forecast.list[2]} unit={props.unit} timezone={forecast.city.timezone}/>
       <ForecastPreview data={forecast.list[3]} unit={props.unit} timezone={forecast.city.timezone}/>
       <ForecastPreview data={forecast.list[4]} unit={props.unit} timezone={forecast.city.timezone}/>
       <ForecastPreview data={forecast.list[5]} unit={props.unit} timezone={forecast.city.timezone}/>


      </div>
    )
  } else {
    let apiKey = "cc994936908b08281fdf1a93f075f62a"
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`
    axios.get(url).then(handleForecastResponse)
    return "loading"
  }
}
