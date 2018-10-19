let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

// Write your code below
spaceship.color = 'glorious gold';
spaceship.numEngines = 5;
delete spaceship['Secret Mission'];

// Objects are mutable and can be altered after they are created. We can add new key pairs or change existing properties using
// the assignment operator. An object declared with const cant be reassigned, be it can be mutated.
