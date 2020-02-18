function printVegetablesWithQuantity(vegetable, quantity = 1) {
  // if quantity has no value, assign 1

  if (!vegetable) return;
  console.log(`We have ${quantity} ${vegetable}!`);
}

//results
printVegetablesWithQuantity("cabbage"); // We have 1 cabbage!
printVegetablesWithQuantity("potato", 2); // We have 2 potato!
