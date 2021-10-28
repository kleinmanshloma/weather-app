const request = require("postman-request");

const geocode = (address, callback) => {
  const url =
    "https://api.mapbox.com/geocoding/v5/mapbox.places/" +
    encodeURIComponent(address) +
    ".json?access_token=pk.eyJ1Ijoic2hsb21hIiwiYSI6ImNrdXZxa2o4MDA4czcyb21yMHhlMzA4NWMifQ.3566K8bWMhEZu3lwVvcVBw&limit=1";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect weather server!", undefined);
    } else if (body.features.length === 0) {
      callback("Unable to find locattion. try another search", undefined);
    } else {
      callback(undefined, {
        latitude: body.features[0].center[1],
        longtitude: body.features[0].center[0],
        location: body.features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
