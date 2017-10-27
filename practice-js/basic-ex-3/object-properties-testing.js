var o = {
	a: "something",
	b: 1,
	c: true,
	d: new Date()
};

console.log("a" in o);
console.log("x" in o);
console.log("toString" in o);

console.log(o.hasOwnProperty("a"));
console.log(o.hasOwnProperty("x"));
console.log(o.hasOwnProperty("toString")); // false : toString was inheited.

var o2 = Object.create(o);
o2.e = 1.1;

console.log(o2);
console.log(o2.propertyIsEnumerable("e"));
console.log(o2.a);
console.log(o2.propertyIsEnumerable("a")); // false : o2.a is not o2's own property.
console.log(o2.propertyIsEnumerable("toString")); // false : toString is not enumerable.
console.log(Object.prototype.propertyIsEnumerable("toString")); // false : toString has been set as not enumerable.

console.log(o2.e !== undefined); // true : o2 has a property e.
console.log(o2.z !== undefined); // false : o2 does not have a property z.
console.log(o2.toString !== undefined); // false : o2 has a property toString.