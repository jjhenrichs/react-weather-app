import { useState } from "react";

export default function useGeolocation() {
  const [locationInfo, setLocationInfo] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  // Success Callback Function
  const successCB = ({ coords }) => {
    console.log(coords);
    setLocationInfo({ latitude: coords.latitude, longitude: coords.longitude });
    setLatitude(coords.latitude);
    setLongitude(coords.longitude);
  };

  // Error Callback Function
  const errorCB = ({ message }) => {
    console.log(message);
    setLocationError(message);
  };

  // Getting the coordinates through Geolocation API
  if (!locationError && !locationInfo) {
    navigator.geolocation.getCurrentPosition(successCB, errorCB);
  }

  return [latitude, longitude, locationError];
}
