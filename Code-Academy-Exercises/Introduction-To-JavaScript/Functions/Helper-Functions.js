function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);


// Helper functions refers to functions that return a value within another function. This is a way of delegating small tasks
// to each function, and makes the code easier to understand.
