// ways of array map 

const list = [1, 2, 3];
const double = (a) => a * 2;

console.log(list.map(double));
console.log([].map.call(list, double));  // decoupling
console.log(Array.prototype.map.call(list, double));  // decoupling
