//read from global registry
let userId = Symbol.for("user_id");
let userName = Symbol.for("username");

console.log(Symbol.keyFor(userId));
//user_id

console.log(Symbol.keyFor(userName));
//username
