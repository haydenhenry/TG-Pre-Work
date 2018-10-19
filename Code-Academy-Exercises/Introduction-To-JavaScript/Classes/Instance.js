class Surgeon {
  constructor(name, department) {
    this.name = name;
    this.department = department;
  }
}

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

// We can create a class instance by creating a new variable and equating it to the class name preceded by the keyword new.
// Following the class name in parentheses are the parameters we will set for this variable.
