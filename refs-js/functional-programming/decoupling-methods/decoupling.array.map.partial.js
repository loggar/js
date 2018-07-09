const map = f => x => Array.prototype.map.call(x, f) // now method map is detached from Array object by currying.

/*
Decoupling (with curry) allows us to partially apply the function arguments and create new functions.
*/

const increaseOne = x => x + 1

// partially applied map increase
const increaseMany = map(increaseOne)

const result = increaseMany([1, 2, 3])
console.log(result)
