import React from "react";
import "./WeatherApp.css";

export default function WeatherApp() {
  return (
    <div className="WeatherApp">
    <form>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter a city"
          id="city-input"
          autoComplete="off"
          autoFocus="on"
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
    </div>
  );
}
