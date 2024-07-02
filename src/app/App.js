import React from "react";
import useGeolocation from "../hooks/useGeolocation";

function App() {
  const [locationInfo, locationError] = useGeolocation();

  return (
    <div className="App">
      <h1 className="App-header"> Weather App</h1>
      {console.log(locationInfo, locationError)}
    </div>
  );
}

export default App;
