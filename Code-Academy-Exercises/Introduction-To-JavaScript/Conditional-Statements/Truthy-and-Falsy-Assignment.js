let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


/* Short-circuit evaluation is using the knowledge of logical operators to write a shorthand conditional statement.
Knowing that the or operator checks from left to right, we can check to see if the first value is true or truthy, and if that
statement returns false, we can then check the second value. */
