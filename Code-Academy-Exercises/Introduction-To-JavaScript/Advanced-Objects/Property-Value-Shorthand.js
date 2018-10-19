const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)


// We can use shorthand when assigning property values by destructing a function. We can omit the colon and value for a key if the key and
// value are the same. This helps us save time and write less code.
