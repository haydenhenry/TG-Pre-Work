const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below

let currentCard;
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
       };

       // A while loop is similar to a for loop, with some key differences. A while loop can use a variable within the global scope of the page,
       // while a for loop stays within the block. It is possible to create a infinite loop by not creating a valid stopping condition, and
       // this can prove disatrous as it can freeze a computer. It is best to use a while loop when the amount of times the loop is needed to
       // run is not certain.
