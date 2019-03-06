// from a Not JSON format string

let object_literal = { property: 1, meth: () => {} };

console.log(object_literal);

let s = JSON.stringify(object_literal);

console.log(s);
