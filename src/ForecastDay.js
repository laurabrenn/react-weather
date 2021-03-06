import React, {useState} from "react";
import "./Forecast.css";
import axios from "axios"
import ForecastDayPreview from "./ForecastDayPreview";




export default function ForecastDay(props) {
  const [loaded, setLoaded] = useState(false)
  

  function handleForecastDayResponse(response) {
    props.setForecastDay(response.data)
    setLoaded(true)
  }
  if (loaded && props.lat === props.forecastDay.lat) {
    return (
      <div>

      <div className="Forecast row"><ForecastDayPreview data={props.forecastDay.daily[0]} number={0} dayIndex={props.dayIndex} setDayIndex={props.setDayIndex} unit={props.unit} timezone={props.forecastDay.timezone_offset} /></div>
      <div className="Forecast row"><ForecastDayPreview data={props.forecastDay.daily[1]} number={1} dayIndex={props.dayIndex} setDayIndex={props.setDayIndex} unit={props.unit} timezone={props.forecastDay.timezone_offset} /></div>
      <div className="Forecast row"><ForecastDayPreview data={props.forecastDay.daily[2]} number={2} dayIndex={props.dayIndex} setDayIndex={props.setDayIndex} unit={props.unit} timezone={props.forecastDay.timezone_offset} /></div>
      <div className="Forecast row"><ForecastDayPreview data={props.forecastDay.daily[3]} number={3} dayIndex={props.dayIndex} setDayIndex={props.setDayIndex} unit={props.unit} timezone={props.forecastDay.timezone_offset} /></div>
      <div className="Forecast row"><ForecastDayPreview data={props.forecastDay.daily[4]} number={4} dayIndex={props.dayIndex} setDayIndex={props.setDayIndex} unit={props.unit} timezone={props.forecastDay.timezone_offset} /></div>
      
      </div>
    )
  } else {
    let apiKey = "cc994936908b08281fdf1a93f075f62a"
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}&units=metric`   
    axios.get(url).then(handleForecastDayResponse)
    return "loading..."
  }
}
//