import React, { useEffect, useState } from "react";
import Weather from "../utils/Weather";

function App() {
  useEffect(() => {
    const data = document.getElementById("data");

    Weather.fetchWeather();
  }, []);

  return (
    <div className="App">
      <h1 className="App-header">Weather App</h1>
      <div id="data"></div>
    </div>
  );
}

export default App;
