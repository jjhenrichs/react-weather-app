import { useState } from "react";

export default function useGeolocation() {
  const [locationInfo, setLocationInfo] = useState(null);
  const [locationError, setLocationError] = useState(null);

  // Success Callback Function
  const successCB = ({ coords }) => {
    console.log(coords);
    setLocationInfo({ latitude: coords.latitude, longitude: coords.longitude });
  };

  // Error Callback Function
  const errorCB = ({ message }) => {
    console.log(message);
    setLocationError(message);
  };

  if (!locationError && !locationInfo) {
    navigator.geolocation.getCurrentPosition(successCB, errorCB);
  }

  return [locationInfo, locationError];
}
