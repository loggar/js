const fruits = [
  { name: "apple", color: "red" },
  { name: "banana", color: "yellow" },
  { name: "grape", color: "purple" }
];

function test() {
  // condition: if any fruit is red
  const isAnyRed = fruits.some(f => f.color == "red");

  console.log(isAnyRed); // true
}
