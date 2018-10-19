
let availableAirplanes = [
{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
 },
 {name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants']
 }
];

let flightRequirements = {
  requiredStaff: 4
} ;

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true
  } else {
    return false
  }
};


export {availableAirplanes, flightRequirements, meetsStaffRequirements};


// We can use named exports to export data through a variable name. When we use this technique,
// we don't set the properties on an object, each export is stored in its own variable. We export objects by their variable names.
