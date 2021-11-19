const request = require("request");


const fetchMyIP = function(callback) {
  request('https://api.ipify.org/?format=json', (error,response, body) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null,JSON.parse(body));
    }
  });
};

module.exports = {fetchMyIP};