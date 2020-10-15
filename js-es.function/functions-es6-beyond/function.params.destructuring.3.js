// destructing - get name property only
// assign default empty object {}

function printVegetableName({ name } = {}) {
  console.log(name || "unknown");
}

printVegetableName(undefined); // unknown
printVegetableName({}); // unknown
printVegetableName({ name: "cabbage", quantity: 2 }); // cabbage
