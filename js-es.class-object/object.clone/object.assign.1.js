var target = {},
	o1 = { a: 1 }, o2 = { b: 2 },
	o3 = { c: 3 }, o4 = { d: 4 };

// setup read-only property
Object.defineProperty(o3, "e", {
	value: 5,
	enumerable: true,
	writable: false,
	configurable: false
});

// setup non-enumerable property
Object.defineProperty(o3, "f", {
	value: 6,
	enumerable: false
});

o3[Symbol("g")] = 7;

// setup non-enumerable symbol
Object.defineProperty(o3, Symbol("h"), {
	value: 8,
	enumerable: false
});

Object.setPrototypeOf(o3, o4);


/* Only the properties a, b, c, e, and Symbol("g") will be copied to target: */

Object.assign(target, o1, o2, o3);

target.a;                            // 1
target.b;                            // 2
target.c;                            // 3

Object.getOwnPropertyDescriptor(target, "e");
// { value: 5, writable: true, enumerable: true,
//   configurable: true }

Object.getOwnPropertySymbols(target);
// [Symbol("g")]