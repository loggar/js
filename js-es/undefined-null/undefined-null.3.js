// undefined is the default value of a variable that has not been assigned a specific value. Or a function that has no explicit return value ex. console.log(1). Or a property that does not exist in an object. The JavaScript engine does this for us the assigning of undefined value.

let _thisIsUndefined;
const doNothing = () => {};
const someObj = {
  a: "ay",
  b: "bee",
  c: "si"
};

console.log(_thisIsUndefined); //logs undefined
console.log(doNothing()); //logs undefined
console.log(someObj["d"]); //logs undefined
