const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write you code below
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] ===  'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");


// The break keyword can be used to break out of a loop even when the specified stopping condition isn't met. The break
// stops the running of the code if a separate condition is met, rather than letting the program run it's full course.
