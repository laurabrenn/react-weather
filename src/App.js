import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import WeatherApp from "./WeatherApp";



import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <WeatherApp defaultCity="London"/>
      
      </div>
      <footer className="p-3 CodedBy">
      <a
        href="https://github.com/laurabrenn/react-week4"
        target="_blank"
        rel="noreferrer"
      >
        Open source code
      </a>{" "}
      by laurabrenn 👸🏼
      </footer>
    </div>
  );
}
