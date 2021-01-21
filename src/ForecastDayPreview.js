import React from "react";

export default function ForecastDayPreview(props) {
    function buttonResponse(event) {
        event.preventDefault()
        props.setDayIndex(props.number)
    }

    function day() {
        let date = new Date((props.data.dt+props.timezone) *1000 )
        let weekdays = ["Sun", "Mon","Tue", "Wed","Thu", "Fri", "Sat"]
        let day = weekdays[date.getDay()]
        return `${day}`
    }
    function temp() {
        let temp = Math.round(props.data.temp.day)
        return `${temp}°C`
    }
    function tempF() {
        let tempF = Math.round((props.data.temp.day)*9/5+32)
        return `${tempF}°F`
    }
    if (props.unit==="celcius") {
    return(
        <button className="forecast-box col"onClick={buttonResponse}>
        {day()}
        <br />
        {temp()}
        </button>
    )   
    } else {
    return (   <button className="forecast-box col" onClick={buttonResponse}>
        {day()}
        <br />
        {tempF()}
        </button>
    )
    }
}

