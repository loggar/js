function printVegetableName(vegetable) {
  if (vegetable && vegetable.name) {
    console.log(vegetable.name);
  } else {
    console.log("unknown");
  }
}

printVegetableName(undefined); // unknown
printVegetableName({}); // unknown
printVegetableName({ name: "cabbage", quantity: 2 }); // cabbage
