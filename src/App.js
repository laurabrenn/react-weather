import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "./Search";
import Current from "./Current";
import Today from "./Today";
import Forecast from "./Forecast";
import CodedBy from "./CodedBy";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <Search />
      <Current />
      <Today />
      <Forecast />
      <CodedBy />
    </div>
  );
}
