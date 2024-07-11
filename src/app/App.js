import React, { useEffect, useState } from "react";
import { getGeolocation } from "../utils/Weather";

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationError, setLocationError] = useState(null);
  useEffect(() => {
    const data = document.getElementById("data");

    const { error, lat, long } = getGeolocation();
    console.log(error, lat, long);
  }, []);

  return (
    <div className="App">
      <h1 className="App-header">Weather App</h1>
      <div id="data"></div>
    </div>
  );
}

export default App;
