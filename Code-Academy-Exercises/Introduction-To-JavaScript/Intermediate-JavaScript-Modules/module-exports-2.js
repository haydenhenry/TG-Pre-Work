// airplane
const Airplane = {};

module.exports = {
  myAirplane: "CloudJet",
  displayAirplane: function() {
    return this.myAirplane;
  }
};

// mission control
const Airplane = require('./2-airplane.js');
console.log(Airplane.displayAirplane());

// We can export any collection of data and functions by wrapping them in an object and exporting them with module.exports.
