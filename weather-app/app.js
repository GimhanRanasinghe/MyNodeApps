//const request = require("request");
const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");
const yargs = require("yargs");

// const url =
//   "http://api.weatherstack.com/current?access_key=cf616deeaae0d9fd43a01c3e6823ffbf&query=6.714360,80.059219&units=m";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("Cannot connect to the weather service!");
//   } else if (response.body.error) {
//     console.log("Wrong Location");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         ". It is currently " +
//         response.body.current.temperature +
//         " degrees out. It feels like " +
//         response.body.current.feelslike +
//         " degrees out."
//     );
//   }
// });

// const urlGeo =
//   "https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1IjoiZ2ltaGFuIiwiYSI6ImNrb2k3YXZncDB3cjgyb3BscWZ6NWhiaXEifQ.5w-4zkwZ_LzdHCVb4j2j5A&limit=1";

// request({ url: urlGeo, json: true }, (error, response) => {
//   if (error) {
//     console.log("Unable to connect!");
//   } else if (response.body.message === "Not Found") {
//     console.log(response.body.message);
//   } else if (!response.body.features) {
//     console.log("Enter a correct location!");
//   } else {
//     const longitude = response.body.features[0].center[0];
//     const latitude = response.body.features[0].center[1];
//     console.log(latitude, longitude);
//   }
// });

const address = yargs.argv._[0];
//const address = process.argv[2]

// if (!address) {
//   console.log("Please enter a address!");
// } else {
//   geocode(address, (error, data) => {
//     if (error) {
//       return console.log(error);
//     }
//     forecast(data.logitude, data.latitude, (error, forecastData) => {
//       if (error) {
//         return console.log(error);
//       }
//       console.log(data.location);
//       console.log(forecastData);
//     });
//   });
// }

//Short hand

if (!address) {
  console.log("Please enter a address!");
} else {
  geocode(address, (error, { location, longitude, latitude }) => {
    if (error) {
      return console.log(error);
    }
    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}
