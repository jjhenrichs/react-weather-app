const key = "635d9b0c3316e8567568637146fb5fbe";

const successCallBack = (position) => {
  console.log(position);
};

const errorCallBack = (error) => {
  console.log(error);
};

navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
