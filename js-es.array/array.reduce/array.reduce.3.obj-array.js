const users = [
  { name: "John", age: 25 },
  { name: "Chris", age: 20 },
  { name: "James", age: 31 },
];

const sum = users.reduce(function (a, b) {
  return { age: a.age + b.age };
}).age;

console.log("sum", sum); // 76

var accounts = [
  { name: "James Brown", msgCount: 123 },
  { name: "Stevie Wonder", msgCount: 22 },
  { name: "Sly Stone", msgCount: 16 },
  { name: "Otis Redding", msgCount: 300 }, // Otis has the most messages
];

// get sum of msgCount prop across all objects in array
var msgTotal = accounts.reduce(function (prev, cur) {
  return prev + cur.msgCount;
}, 0);

console.log("Total Messages:", msgTotal); // Total Messages: 461
