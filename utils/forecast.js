const request = require("postman-request");

const forecast = (latitude, longtitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=d7637e7e350eb0a34cad5e9f90f69d4c&query=" +
    latitude +
    "," +
    longtitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find locattion", undefined);
    } else {
      callback(
        undefined,
        body.current.weather_descriptions[0] +
          ". It is currentlly " +
          body.current.temperature +
          " degrees, feelslike " +
          body.current.feelslike
      );
    }
  });
};

module.exports = forecast;
