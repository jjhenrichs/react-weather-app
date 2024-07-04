import React, { useEffect, useState } from "react";
import useGeolocation from "../hooks/useGeolocation";

function App() {
  const [latitude, longitude, error] = useGeolocation();

  useEffect(() => {
    const data = document.getElementById("data");

    if (error) {
      console.log(error);
    } else {
      console.log(latitude, longitude);
    }
  }, []);

  return (
    <div className="App">
      <h1 className="App-header">Weather App</h1>
      <div id="data"></div>
    </div>
  );
}

export default App;
