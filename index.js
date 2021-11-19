const { fetchMyIP, fetchCoordsByIP } = require('./iss');

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