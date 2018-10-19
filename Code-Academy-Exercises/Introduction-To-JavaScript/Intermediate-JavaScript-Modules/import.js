import Airplane from './airplane';

function displayFuelCapacity() {
  Airplane.availableAirplanes.forEach(function(element){
  console.log('Fuel Capacity of ' + element.name + ': ' + element.fuelCapacity);
  });
}

displayFuelCapacity();

// Since ES6, we can also use the import keyword, which allows us to import an object by using the import keyword followed by the variable name.
// Following that, we use the from keyword to specify where the module is coming from, followed by the name of the module.
// If it is a local file, we can omit the extension.
