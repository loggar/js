var handlers = {
	get(target, key, context) {
		if (Reflect.has(target, key)) {
			return Reflect.get(
				target, key, context
			);
		}
		// fake circular `[[Prototype]]`
		else {
			return Reflect.get(
				target[
				Symbol.for("[[Prototype]]")
				],
				key,
				context
			);
		}
	}
},
	obj1 = new Proxy(
		{
			name: "obj-1",
			foo() {
				console.log("foo:", this.name);
			}
		},
		handlers
	),
	obj2 = Object.assign(
		Object.create(obj1),
		{
			name: "obj-2",
			bar() {
				console.log("bar:", this.name);
				this.foo();
			}
		}
	);

// fake circular `[[Prototype]]` link
obj1[Symbol.for("[[Prototype]]")] = obj2;

obj1.bar();
// bar: obj-1 <-- through proxy faking [[Prototype]]
// foo: obj-1 <-- `this` context still preserved

obj2.foo();
// foo: obj-2 <-- through [[Prototype]]