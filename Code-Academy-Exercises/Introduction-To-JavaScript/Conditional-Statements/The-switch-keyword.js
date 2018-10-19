let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!');
    break;
  default:
    console.log('No medal awarded.')
    break;
        }


/* In this lesson I learned how to use the switch keyword, which is alternative syntax for else if statements.
The switch keyword initiates the statement, and the value to be compared is placed in parentheses. Each case in the statement
compares to the switch value, and if it returns true, the code runs. The break keyword tells the computer to stop checking the cases.
At the end of every switch statement is a default statement that runs if none of the cases return a true value. */
