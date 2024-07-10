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
  const latitude = null;
  const longitude = null;
  let locationError = null;

  const getLocation = () => {
    return new Promise((resolve, reject) => {
      const successFn = (res) => {
        console.log(res);
        resolve();
      };

      const errorFn = (res) => {
        const { message } = res;
        locationError = message;
        console.log(locationError);
        reject(message);
      };

      if (!locationError && !latitude && !longitude)
        navigator.geolocation.getCurrentPosition(successFn, errorFn);
    });
  };

  try {
    await getLocation();
  } catch (error) {
    console.error(error);
  }

  console.log(locationError);
};
