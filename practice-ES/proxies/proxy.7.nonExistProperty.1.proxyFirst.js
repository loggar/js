/* A common complaint about JS is that objects aren't by default very defensive in the situation where you try to access or set a property that doesn't already exist. You may wish to predefine all the properties/methods for an object, and have an error thrown if a nonexistent property name is subsequently used. */

var obj = {
	a: 1,
	foo() {
		console.log("a:", this.a);
	}
},
	handlers = {
		get(target, key, context) {
			if (Reflect.has(target, key)) {
				return Reflect.get(
					target, key, context
				);
			}
			else {
				throw "No such property/method!";
			}
		},
		set(target, key, val, context) {
			if (Reflect.has(target, key)) {
				return Reflect.set(
					target, key, val, context
				);
			}
			else {
				throw "No such property/method!";
			}
		}
	},
	pobj = new Proxy(obj, handlers);

pobj.a = 3;
pobj.foo();            // a: 3

pobj.b = 4;            // Error: No such property/method!
pobj.bar();            // Error: No such property/method!

