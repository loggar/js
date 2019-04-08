let obj = { apple: 10, orange: 20, banana: 30 };
let entries = Object.entries(obj);
let fromEntries = Object.fromEntries(entries);

console.log(entries);
console.log(fromEntries); // { apple: 10, orange: 20, banana: 30 }
