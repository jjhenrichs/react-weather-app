import React, { useEffect, useState } from "react";
import useGeolocation from "../utils/fetchWeather";

function App() {
  const [latitude, longitude, locationError] = useGeolocation();

  useEffect(() => {
    const data = document.getElementById("data");

    if (locationError) {
      data.innerHTML = locationError;
    } else {
      console.log(latitude);
      console.log(longitude);
    }
  }, [latitude, longitude, locationError]);

  return (
    <div className="App">
      <h1 className="App-header">Weather App</h1>
      <div id="data"></div>
    </div>
  );
}

export default App;
