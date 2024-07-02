import React, { useEffect, useState } from "react";
import useGeolocation from "../hooks/useGeolocation";

function App() {
  const [locationInfo, locationError] = useGeolocation();
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const data = document.getElementById("data");

    if (locationError) {
      console.log(locationError);
      data.innerHTML = `${locationError}`;
    }

    if (locationInfo) {
      setLatitude(locationInfo.latitude);
      setLongitude(locationInfo.longitude);
      data.innerHTML = `Latitude: ${latitude}, Longitude: ${longitude}`;
    }
  }, [locationError, locationInfo, latitude, longitude]);

  return (
    <div className="App">
      <h1 className="App-header"> Weather App</h1>
      <div id="data"></div>
    </div>
  );
}

export default App;
