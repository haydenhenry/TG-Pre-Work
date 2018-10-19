let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

// Write your code below

const alienShip = {
  retreat () {
    console.log(retreatMessage);
  },
  takeOff () {
  console.log('Spim... Borp... Glix... Blastoff!');
}
};

alienShip.retreat();
alienShip.takeOff();


// A property is what an object has, while a method is what an object does. We can include methods in object literals with key-value pairs,
//  with the key serving as the method name and the value equating to an anonymous expression.
// The ES6 syntax lets us omit the colon and function keyword in the expression.
// The method is then invoked by using dot notation to write the object name and method name.
