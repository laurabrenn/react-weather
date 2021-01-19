import React from "react";

export default function ForecastDayPreview(props) {

    function day() {
        let date = new Date((props.data.dt+props.timezone) *1000 )
        let day = date.getDay()
        return `${day}`
    }
    function temp() {
        let temp = Math.round(props.data.temp.day)
        return `${temp}°C`
    }
    function tempF() {
        let tempF = Math.round((props.data.temp.day)*9/5+32)
        return `${tempF}°C`
    }
    if (props.unit==="celcius") {
    return(
        <div className="forecast-day col">
        {day()}
        
        {temp()}
        </div>
    )   
    } else {
    return (   <div className="forecast-day col">
        {day()}
        
        {tempF()}
        </div>
    )
    }
}

