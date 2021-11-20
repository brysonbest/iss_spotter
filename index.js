const { fetchMyIP, fetchCoordsByIP, fetchISSFlyOverTimes } = require('./iss');

// const fetch = fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP("192.103.210.223", (error, data) => {
//   if (error) {
//     console.log('oops', error);
//     return;
//   }
//   console.log('data', data);
// });


// fetchISSFlyOverTimes({latitude: 47.2, longitude: -122.3153}, (error, data) => {
//   if (error) {
//     console.log('oops', error);
//     return;
//   }
//   console.log('data', data);
// });