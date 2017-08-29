var arr = [1, 2, 3];

console.log(Symbol.iterator);
console.log(arr[Symbol.iterator]);

var it = arr[Symbol.iterator]();

console.log(it.next());        // { value: 1, done: false }
console.log(it.next());        // { value: 2, done: false }
console.log(it.next());        // { value: 3, done: false }

console.log(it.next());        // { value: undefined, done: true }



var m = new Map();
m.set("foo", 42);
m.set({ cool: true }, "hello world");

var it1 = m[Symbol.iterator]();
var it2 = m.entries();

it1.next();        // { value: [ "foo", 42 ], done: false }
it2.next();        // { value: [ "foo", 42 ], done: false }



var arr2 = [1, 2, 3];
var it3 = arr2[Symbol.iterator]();

for (var v of it3) {
	console.log(v);
}

/* To fully understand how such a loop works */
it4 = arr2[Symbol.iterator]();
for (var v, res; (res = it4.next()) && !res.done;) {
	v = res.value;
	console.log(v);
}