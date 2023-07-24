// getCurrentPosition()

function curSuccess(pos) {
  const coords = pos.coords;
  console.log(`Latitude ${coords.latitude}`);
  console.log(`Longitude ${coords.longitude}`);
  console.log(
    `Accuracy is within ${(coords.accuracy * 3.281).toFixed(2)} feet`
  );
}

function curError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const curOptions = {
  enableHighAccuracy: true, //use gps if available
  timeout: 5000, //Time to wait to satop trying for location
  maximumAge: 0, //Do not use a cached position
};

navigator.geolocation.getCurrentPosition(curSuccess, curError, curOptions);

// watchPosition()

function watchSuccess(pos) {
    const coords = pos.coords;
    console.log(coords);
  const target = {
    latitude: 40.4291584,
    longitude: -80.1538048,
  };

    if(target.latitude === coords.latitude && target.longitude === coords.longitude){
        console.log(`You've reached your destination`);
        navigator.geolocation.clearWatch(id)
    }
}

function watchError(err) {
  console.log(`Error: ${err.code} - ${err.message}`);
}

const watchOptions = {
  enableHighAccuracy: true, //use gps if available
  timeout: 5000, //Time to wait to satop trying for location
  maximumAge: 0, //Do not use a cached position
};



const id = navigator.geolocation.watchPosition(
    watchSuccess,
    watchError,
    watchOptions
  );
  