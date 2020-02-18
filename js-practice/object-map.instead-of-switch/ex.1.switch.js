function printFruits(color) {
  // use switch case to find fruits by color
  switch (color) {
    case "red":
      return ["apple", "strawberry"];
    case "yellow":
      return ["banana", "pineapple"];
    case "purple":
      return ["grape", "plum"];
    default:
      return [];
  }
}

printFruits(null); // []
printFruits("yellow"); // ['banana', 'pineapple']
