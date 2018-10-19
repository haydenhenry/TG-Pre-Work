const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel(){
    if(typeof this._energyLevel === 'number'){
      return 'My current energy level is ' + this._energyLevel
    } else {
      return "System malfunction: cannot retrieve energy level"
    }
  }
};


console.log(robot.energyLevel);

// Getters are methods that 'get' the properties of an object and returns the value to you. They can also perform an action on data while getting
//  a property. They cannot share a name with the get or set function, or an infinite call error will occur.
