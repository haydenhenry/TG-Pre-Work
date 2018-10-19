const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);

console.log(concept);

function removeElement(newArr) {
  newArr.pop();
}

removeElement(concept);

console.log(concept);

// In this lesson, I learned that arrays that are mutated within a function maintain their updated status outside of the function.
