const message = "hello!";
typeof message; // => 'string'

const number = 5;
typeof number; // => 'number'
typeof NaN; // => 'number'

const ok = true;
typeof ok; // => 'boolean'

const symbol = Symbol("key");
typeof symbol; // => 'symbol'

const nothing = undefined;
typeof nothing; // => 'undefined'

const object = { name: "Batman" };
typeof object; // => 'object'
const array = [1, 4, 5];
typeof array; // => 'object'
const regExp = /Hi/;
typeof regExp; // => 'object'
const missingObject = null;
typeof missingObject; // => 'object'

function greet(who) {
  return `Hello, ${who}!`;
}
typeof greet; // => 'function'

// notDefinedVar is not defined
typeof notDefinedVar; // => 'undefined'
