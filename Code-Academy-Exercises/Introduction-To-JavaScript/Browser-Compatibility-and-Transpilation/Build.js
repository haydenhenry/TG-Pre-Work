var pasta = "Spaghetti"; // ES5 syntax

const meat = "Pancetta"; // ES6 syntax

let sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were introduced in ES6
const carbonara = `You can make carbonara with ${pasta}, ${meat}, and a sauce made with ${sauce}.`;

// In order to transpile the code, we call the npm run build command, which runs the build script in package.json and writes the code to a
// file named main.js in a folder called lib. (For some reason, codecademy would
//   not load this lib folder after several tries and refreshes.)Then the npm run
//   build command transpiles all the JavaScript in the src folder.
