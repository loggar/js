const half_if_even = function (v) {
	return v % 2 == 0 ? (v / 2) : v
}

const r1 = [2, 3, 4].map(half_if_even);
const r2 = [1, 3, 5].map(half_if_even);
const r3 = [].map(half_if_even);

console.log(r1);
console.log(r2);
console.log(r3);

// also can chain these calls:

const r4 = [10, 20, 40]
	.map(half_if_even)
	.map(half_if_even)
	.map(half_if_even);

console.log(r4);
