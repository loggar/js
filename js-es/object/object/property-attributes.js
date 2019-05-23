// Returns {value: 1, writable:true, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor({ x: 1 }, "x");
// Now query the octet property of the random object defined above.
// Returns { get: /*func*/, set:undefined, enumerable:true, configurable:true}
Object.getOwnPropertyDescriptor(random, "octet");
// Returns undefined for inherited properties and properties that don't exist.
Object.getOwnPropertyDescriptor({}, "x"); // undefined, no such prop
Object.getOwnPropertyDescriptor({}, "toString"); // undefined, inherited


var o = {}; // Start with no properties at all
// Add a nonenumerable data property x with value 1.
Object.defineProperty(o, "x", {
	value: 1,
	writable: true,
	enumerable: false,
	configurable: true
});
// Check that the property is there but is nonenumerable
o.x; // => 1
Object.keys(o) // => []
// Now modify the property x so that it is read-only
Object.defineProperty(o, "x", { writable: false });
// Try to change the value of the property
o.x = 2; // Fails silently or throws TypeError in strict mode
o.x // => 1
// The property is still configurable, so we can change its value like this:
Object.defineProperty(o, "x", { value: 2 });
o.x // => 2
// Now change x from a data property to an accessor property
Object.defineProperty(o, "x", { get: function () { return 0; } });
o.x // => 0


var p = Object.defineProperties({}, {
	x: { value: 1, writable: true, enumerable: true, configurable: true },
	y: { value: 1, writable: true, enumerable: true, configurable: true },
	r: {
		get: function () { return Math.sqrt(this.x * this.x + this.y * this.y) },
		enumerable: true,
		configurable: true
	}
});
