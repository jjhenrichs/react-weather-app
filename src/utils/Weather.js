// export const getGeolocation = () => {
//   const latitude = null;
//   const longitude = null;
//   let locationError = null;

//   const successFn = (res) => {
//     console.log(res);
//   };

//   const errorFn = (res) => {
//     const { message } = res;
//     locationError = message;
//     console.log(locationError);
//   };

//   if (!locationError && !latitude && !longitude)
//     navigator.geolocation.getCurrentPosition(successFn, errorFn);

//   console.log(locationError);
// };

export const getGeolocation = async () => {
  let latitude = null;
  let longitude = null;
  let locationError = null;

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      const successFn = (res) => {
        const { coords } = res;
        console.log(coords);
        latitude = coords.latitude;
        longitude = coords.longitude;
        resolve();
      };

      const errorFn = (res) => {
        const { message } = res;
        locationError = message;
        console.log(locationError);
        reject(message);
      };

      if (!locationError && !latitude && !longitude)
        navigator.geolocation.getCurrentPosition(successFn, errorFn); // asynchronous function
    });
  };

  try {
    await getLocation();
  } catch (error) {
    console.error(`${error}.\n I need access to your location to work.`);
  } finally {
    console.log(locationError, latitude, longitude);
    return { locationError, latitude, longitude };
  }
};
