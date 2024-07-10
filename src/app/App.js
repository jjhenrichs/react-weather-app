import React, { useEffect, useState } from "react";
import { getGeolocation } from "../utils/Weather";

function App() {
  useEffect(() => {
    const data = document.getElementById("data");

    getGeolocation();
  }, []);

  return (
    <div className="App">
      <h1 className="App-header">Weather App</h1>
      <div id="data"></div>
    </div>
  );
}

export default App;
