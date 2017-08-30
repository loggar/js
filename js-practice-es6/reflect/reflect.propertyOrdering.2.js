var o = { a: 1, b: 2 };
var p = Object.create(o);
p.c = 3;
p.d = 4;

for (var prop of Reflect.enumerate(p)) {
	console.log(prop);
}
// c d a b

for (var prop in p) {
	console.log(prop);
}
// c d a b

JSON.stringify(p);
// {"c":3,"d":4}

Object.keys(p);
// ["c","d"]