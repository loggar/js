let a;

console.log(parseInt("abc"));
console.log(parseInt(null));
console.log(parseInt(undefined));
console.log(parseInt(++a));
console.log(parseInt({} * 10));
console.log(parseInt("abc" - 2));
console.log(parseInt(0 / 0));
console.log(parseInt("10a" * 10));

console.log(isNaN()); //logs true
console.log(isNaN(undefined)); //logs true
console.log(isNaN({})); //logs true
console.log(isNaN(String("a"))); //logs true
console.log(isNaN(() => {})); //logs true

// use Number.isNaN in ES2015 and above spec.
