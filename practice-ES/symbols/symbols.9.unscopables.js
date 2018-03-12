var o = { a: 1, b: 2, c: 3 },
	a = 10, b = 20, c = 30;

o[Symbol.unscopables] = {
	a: false,
	b: true,
	c: false
};

with (o) {
	console.log(a, b, c);     // 1 20 3
}