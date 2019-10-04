const aBoolean = true;
const aNumber = 37;
const aString = "A String";
const wrappedString = new String("An 'Object-Wrapped' String");

console.log(typeof aBoolean); // "boolean"
console.log(typeof aNumber); // "number"
console.log(typeof aString); // "string"
console.log(typeof wrappedString); // "object"

const someString = "37"; // "37" is a string literal
const alsoSomeString = String(37); // Coerce the value of 37 to a string
const someBadBadString = new String(37); // Wrap the string in an object

// Not recommended (primitive object wrapper):
typeof new String(37); // object

// Safe (type coercion with wrapper function):
typeof String(37); // string

// Primitive strings:
"37" === "37"; // true

// Object-wrapped string:
"37" === new String(37); // false

// Type-coerced string:
"37" === String(37); // true


