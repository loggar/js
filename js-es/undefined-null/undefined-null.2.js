// They belong to JavaScript's 7 primitive types.
let primitiveTypes = [
  "string",
  "number",
  "null",
  "undefined",
  "boolean",
  "symbol",
  "bigint"
];

// They are falsy values. Values that evaluated to false when converting it to boolean using Boolean(value) or !!value.

console.log(!!null); //logs false
console.log(!!undefined); //logs false

console.log(Boolean(null)); //logs false
console.log(Boolean(undefined)); //logs false
