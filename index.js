const {nextISSTimesForMyLocation} = require('./iss');


const nextPassTimes = function(passTimes) {
  for (let time of passTimes) {
    const date = new Date(0);
    date.setUTCSeconds(time.risetime);
    const length = time.duration;
    console.log(`Next pass at ${date} for ${length} seconds!`);
  }
};



nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("it didn't work!", error);
  }
  nextPassTimes(passTimes);
});

// const fetch = fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!" , error);
//     return;
//   }
//   console.log('It worked! Returned IP:' , ip);
// });

// fetchCoordsByIP(fetch, (error, data) => {
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

module.exports = {nextPassTimes};