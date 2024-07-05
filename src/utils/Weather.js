let url = "";

const Weather = {
  fetchWeather() {
    let latitude = null;
    let longitude = null;
    let locationError = null;

    // success callback function
    const successCB = ({ coords }) => {
      latitude = coords.latitude;
      longitude = coords.longitude;
      url =
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}lon=${longitude}` +
        `&appid=635d9b0c3316e8567568637146fb5fbe`;
    };

    // error callback function
    const errorCB = ({ message }) => {
      locationError = message;
    };

    if (!locationError && !latitude && !longitude) {
      navigator.geolocation.getCurrentPosition(successCB, errorCB);
    }
  },
};

export default Weather;
