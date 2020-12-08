let userId = Symbol.for("user_id");
//read from global registry
//create Symbol if not exists

let userID = Symbol.for("user_id");
//read from global registry

console.log(userId, userID);
console.log(userID === userId);
//true
