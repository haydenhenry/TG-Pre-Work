let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth',
  numCrew: 5
 };

let propName =  'Active Mission';

// Write your code below
let isActive = spaceship['Active Mission'];
console.log(spaceship[propName]);


// Another way to access a key's value is by using bracket notation. Bracket notation must be used when accessing keys with numbers,
// spaces or special characters in them. We can also use brackets to use a variable to select a key. 
