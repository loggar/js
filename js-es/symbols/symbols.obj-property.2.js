let id = Symbol("id");

/*
let obj = {
  id: 1 //This is string "id" as key. Not our Symbol
};
*/

let obj = {
  [id]: 1,
};

console.log(obj.id);
//undefined

console.log(obj[id]);
//1

// Symbols are skipped by common object inspection features
// As Symbols were designed to avoid collisions, Symbolic properties are skipped in JavaScript’s most common object-inspection features such as for-in loop. Symbols as property keys are also ignored in Object.keys(obj) and Object.getOwnPropertyNames(obj) .

// Also note that Symbol properties of an object are ignored when you use JSON.stringify().
