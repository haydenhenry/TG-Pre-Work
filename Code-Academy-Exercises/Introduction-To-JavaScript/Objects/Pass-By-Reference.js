let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)

// Objects can be passed by reference, or when we pass a variable assigned to an object into a function as an argument,
// the parameter name is interpreted as being directed to the memory for that object. Because of this, functions that change an
// objects properties can mutate the object.
