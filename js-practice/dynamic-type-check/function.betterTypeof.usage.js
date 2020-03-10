const typeOfB = require("./function.betterTypeof");

console.log(typeOfB(true));
// "boolean"
console.log(typeOfB(1));
// "number"
console.log(typeOfB(100.22));
// "number"
console.log(typeOfB("Hello"));
// "string"
console.log(typeOfB(new Date()));
// "date"
console.log(typeOfB([1, 2, 3, 4]));
// "array"
console.log(typeOfB({ name: "Damian", age: 32 }));
// "object"
console.log(typeOfB(undefined));
// "undefined"
console.log(typeOfB(null));
// "null"
