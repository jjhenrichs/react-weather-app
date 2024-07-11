import React, { useEffect, useState } from "react";
import { getGeolocation } from "../utils/Weather";

/**
 * Notes from Brendan:
 *  - I would recommend using TypeScript so you get type checking
 *          - Having a project without types is typically manageable for small projects. However, even
 *              for small projects it makes finding bugs a lot easier (e.g. bugs caused by typos, etc)
 *          - Take a look at https://create-react-app.dev/docs/adding-typescript/. It will define the steps
 *              to start a React project with typescript or convert an existing project to using typescript
 *              (which the latter would be your case)
 *
 * */


export default function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [locationError, setLocationError] = useState(null);
  useEffect(() => {
    const data = document.getElementById("data");

    getGeolocation()
        .then((locInfo) => {
            if (locInfo.locationError) {
                setLocationError(locInfo.locationError);
                return;
            }

            setLatitude(locInfo.latitude);
            setLongitude(locInfo.longitude);
        })

  }, []);

  return (
    <div className="App">
      <h1 className="App-header">Weather App</h1>
      <div id="data"></div>
        { locationError ?
            <LocationErrorDisplay error={ locationError } /> :
            <LocationDisplay latitude={ latitude } longitude={ longitude } />
        }
    </div>
  );
}

function LocationDisplay(props) {
    return (
        <div>
            <div>Latitude: { props.latitude }</div>
            <div>Longitude: { props.longitude }</div>
        </div>
    );
}

function LocationErrorDisplay(props) {
    return (
        <div>
            Some error occurred getting location: ERROR: { props.error }
        </div>
    )
}
