const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" }
];

function test() {
  // condition: short way, all fruits must be red
  const isAllRed = fruits.every(f => f.color == "red");

  console.log(isAllRed); // false
}
