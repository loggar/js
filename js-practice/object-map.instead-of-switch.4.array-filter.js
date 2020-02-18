const fruits = [
  { name: "apple", color: "red" },
  { name: "strawberry", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "pineapple", color: "yellow" },
  { name: "grape", color: "purple" },
  { name: "plum", color: "purple" }
];

function printFruits(color) {
  return fruits.filter(fruit => fruit.color === color);
}
