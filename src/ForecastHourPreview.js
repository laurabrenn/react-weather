import React from "react";
import WeatherIcon from "./WeatherIcon"


export default function ForecastHourPreview(props) {
    function hours() {
        let date = new Date((props.data.dt+props.timezone) *1000 )
        let hours = date.getHours()
        let weekdays = ["Sun", "Mon","Tue", "Wed","Thu", "Fri", "Sat"]
        let day = weekdays[date.getDay()]
        return `${day}, ${hours}:00`
    }
    function temp() {
        let temp = Math.round(props.data.main.temp)
        return `${temp}°C`
    }
    function tempF() {
        let tempF = Math.round((props.data.main.temp)*9/5+32)
        return `${tempF}°F`
    }
    if (props.unit==="celcius") {
    return(
        <div className="forecast-box col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        {temp()}
        </div>
    )   
    } else {
    return (   <div className="forecast-box col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} />
        {tempF()}
        </div>
    )
    }
}
