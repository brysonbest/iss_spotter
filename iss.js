const request = require("request");


const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', (error,response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const myIp = JSON.parse(body).ip;
    callback(null,myIp);
    return;
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request('https://api.freegeoip.app/json/' + ip + '?apikey=3c5bf790-48de-11ec-b898-d522e6f43d97', (error,response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching location. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const myGeo = {
      latitude: JSON.parse(body).latitude,
      longitude: JSON.parse(body).longitude
    };
    callback(null,myGeo);
    return;
  });
};

module.exports = {fetchMyIP, fetchCoordsByIP};