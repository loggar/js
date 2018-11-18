// Monads have a function flatMap to do "returns a wrapped value to a wrapped value"

Array.prototype.flatmap = function (lamda) {
	return [].concat.apply([], this.map(lamda));
}

const half_if_even = function (v) {
	return v % 2 == 0 ? [v / 2] : []
}

const r1 = [2, 3, 4].flatmap(half_if_even);
const r2 = [1, 3, 5].flatmap(half_if_even);
const r3 = [].flatmap(half_if_even);

console.log(r1);
console.log(r2);
console.log(r3);

// also can chain these calls:

const r4 = [10, 20, 40]
	.flatmap(half_if_even)
	.flatmap(half_if_even)
	.flatmap(half_if_even);

console.log(r4);
