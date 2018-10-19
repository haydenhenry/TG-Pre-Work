const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;
functionality.beep();


// We can use a technique called destructured assignment to create a variable of an objects key wrapped in curly braces.
// We can use this variable to get the properties of an object.
