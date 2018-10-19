const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();


groceryList.unshift('popcorn');
console.log(groceryList);

console.log(groceryList.slice(1, 4));

console.log(groceryList);

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


// In this lesson I learned about more array methods, including .shift, .unshift, .slice, and .indexOf. There are many methods that
// can be used with arrays, some of which are non-mutating. These are listed in the MDN website.
