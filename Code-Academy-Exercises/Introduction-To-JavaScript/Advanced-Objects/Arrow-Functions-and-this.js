const robot = {
  energyLevel: 100,
  checkEnergy(){
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

// arrow functions bind an already defined this value to a function, not the calling object.
//  It is best to avoid using arrow functions when using the this keyword in a method.
