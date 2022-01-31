const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=cf616deeaae0d9fd43a01c3e6823ffbf&query=45,75&units=m";

http.request(url, (response) => {});
