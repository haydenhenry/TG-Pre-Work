const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars= 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());
console.log(stars);

// Scope pollution is what happens when there are too many variables existing in the global scope. Global variables stay in the global namespace
// until the program ends, meaning it can fill up quickly. Too many global variables can cause problems with the program, and can be hard to find
// making them bad practice.
