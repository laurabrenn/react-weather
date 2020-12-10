import React from "react";
import "./Current.css";

export default function Current() {
  return (
    <div className="Current">
      <div className="row ml-2">
        <h1>
          Current weather in <span className="city"> </span>:
        </h1>
      </div>
      <div className="row ml-2">
        <h2>Cloudy</h2>
      </div>
    </div>
  );
}
