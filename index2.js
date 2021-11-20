const {nextISSTimesForMyLocation} = require('./iss_promised');
const {nextPassTimes} = require('./index');

nextISSTimesForMyLocation()
  .then((passes) => {
    nextPassTimes(passes);
  })
  .catch((error) => {
    console.log("It didn't work!", error.message);
  });
