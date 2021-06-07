const users = [
  { name: "John", age: 25 },
  { name: "Chris", age: 20 },
  { name: "James", age: 31 },
];

const sum = users.reduce(function (a, b) {
  return { age: a.age + b.age };
}).age;

console.log("sum", sum); // 76
