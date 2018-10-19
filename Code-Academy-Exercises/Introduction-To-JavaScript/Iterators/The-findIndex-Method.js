const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animals => {
  return animals === 'elephant';
});

const startsWithS = animals.findIndex(animals => {
  return animals[0] === 's';
});

// In this lesson I learned how to use the findIndex method to find the index of array items. This method returns the index of the first element
// that returns true in a callback function. 
