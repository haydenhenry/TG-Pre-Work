const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator , currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);
console.log(newSum);


// The .reduce() method returns a single value after iterating through an array and reduces the array.
// The reduce method can take a second parameter that will set a starting value for the callback function.
