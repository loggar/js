var handlers = {
	get() {
		throw "No such property/method!";
	},
	set() {
		throw "No such property/method!";
	}
},
	pobj = new Proxy({}, handlers),
	obj = {
		a: 1,
		foo() {
			console.log("a:", this.a);
		}
	};

// setup `obj` to fall back to `pobj`
Object.setPrototypeOf(obj, pobj);

obj.a = 3;
obj.foo();            // a: 3

obj.b = 4;            // Error: No such property/method!
obj.bar();            // Error: No such property/method!