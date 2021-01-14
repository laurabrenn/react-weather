import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherApp from "./WeatherApp";
import Today from "./Today";
import Forecast from "./Forecast";
import CodedBy from "./CodedBy";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <WeatherApp />
      <Today defaultCity="London"/>
      <Forecast />
      <CodedBy />
      </div>
    </div>
  );
}
