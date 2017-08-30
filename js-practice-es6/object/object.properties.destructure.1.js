var o1 = { a: 1, b: 2 },
	o2 = { c: 3 },
	o3 = { ...o1, ...o2, d: 4 };

console.log(o3.a, o3.b, o3.c, o3.d);
// 1 2 3 4`