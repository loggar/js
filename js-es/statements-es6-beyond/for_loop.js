var a = ["a", "b", "c", "d", "e"];

/* pre es6 */
var k = Object.keys(a);

for (var val, i = 0; i < k.length; i++) {
	val = a[k[i]];
	console.log(val);
}
// "a" "b" "c" "d" "e"


/* for of, for in */

for (var idx in a) {
	console.log(idx);
}
// 0 1 2 3 4

for (var val of a) {
	console.log(val);
}
// "a" "b" "c" "d" "e"


/*  the ES6 but non-for..of equivalent, which also gives a glimpse at manually iterating an iterator */

for (var val, ret, it = a[Symbol.iterator]();
	(ret = it.next()) && !ret.done;
) {
	val = ret.value;
	console.log(val);
}
// "a" "b" "c" "d" "e"


/* how to loop over the characters in a primitive string */

for (var c of "hello") {
	console.log(c);
}
// "h" "e" "l" "l" "o"


/* expression for value */

var o = {};

for (o.a of [1, 2, 3]) {
	console.log(o.a);
}
// 1 2 3

for ({ x: o.a } of [{ x: 1 }, { x: 2 }, { x: 3 }]) {
	console.log(o.a);
}
// 1 2 3