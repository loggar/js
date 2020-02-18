let arrayList = [];
let r = Array.isArray(arrayList);
console.log(r);

console.log(Array.isArray(5)); //logs false
console.log(Array.isArray("")); //logs false
console.log(Array.isArray()); //logs false
console.log(Array.isArray(null)); //logs false
console.log(Array.isArray({ length: 5 })); //logs false

console.log(Array.isArray([])); //logs true
