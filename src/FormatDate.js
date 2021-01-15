import React from "react";
import "./FormatDate.css";

export default function FormatDate(props) {
    let days = ["Sunday", "Monday","Tuesday", "Wednesday","Thursday", "Friday", "Saturday"]
    let months = ["January", "February","March", "April","May", "June","July", "August","September", "October","November", "December",]
    let day = days[props.date.getDay()]
    let date = props.date.getDate()
    let abbreviation = "th"
    let month = months[props.date.getMonth()]
    let hours = props.date.getHours()
    let minutes = props.date.getMinutes()
    if(minutes < 10) {
        minutes = `0${minutes}`
    }
    if(hours < 10) {
        hours = `0${hours}`
    }
     if(date === 1 || date === 21 || date ===31) {
        abbreviation = "st"
    }
    if(date === 2 || date === 22) {
        abbreviation = "nd"
    }
    if(date === 3 || date === 23) {
        abbreviation = "rd"
    }

    return (
    <div className="FormatDate">
    <p className="date"> {day}, {month} {date}{abbreviation}</p>  
    <p> {hours}:{minutes}</p>
    </div>
    );
}