import React, { useEffect } from "react";

function App() {
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(successCallBack, errorCallBack);
  }, []);

  const successCallBack = (position) => {
    console.log(position);
  };

  const errorCallBack = (error) => {
    console.log(error);
  };

  return <div className="App">Hello World</div>;
}

export default App;
