function outer() {
	var x = 0;

	return function () { return ++x; };
}

var x = -1;

console.log(outer());
console.log(outer());
console.log(outer());

var f = outer();
console.log(f());
console.log(f());
console.log(f());

var f2 = outer();

console.log(f2());
console.log(f2());

console.log(f());
console.log(f());

