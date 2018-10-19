const Airplane = require('./1-airplane.js');
function displayAirplane() {
  console.log(Airplane.myAirplane);
}

displayAirplane();

// In this lesson I learned how to import a module using the require() function. In the file we want to import the module to,
// we create a const variable and equate it to require with the file path of the modules file in the parentheses.
// We can then have access to the module and it's properties.
