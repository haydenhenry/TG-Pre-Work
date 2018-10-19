const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';
robot.recharge();


// Privacy in regard to objects is the idea that certain properties should not change in value. JavaScript developers
// follow will commonly place an underscore in front of the name of a property to signal that the property should not be tampered with. 
