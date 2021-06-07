const o = {
  prop: 90,
};

console.log("prop" in o); // true
console.log("prop1" in o); // false

const employee = {
  name: "Chris",
  age: 25,
};

console.log("name" in employee); // true.
console.log("age" in employee); // true.
console.log("experience" in employee); // false.
