var obj1 = {
	name: "obj-1",
	foo() {
		console.log("obj1.foo:", this.name);
	},
},
	obj2 = {
		name: "obj-2",
		foo() {
			console.log("obj2.foo:", this.name);
		},
		bar() {
			console.log("obj2.bar:", this.name);
		}
	},
	handlers = {
		get(target, key, context) {
			if (Reflect.has(target, key)) {
				return Reflect.get(
					target, key, context
				);
			}
			// fake multiple `[[Prototype]]`
			else {
				for (var P of target[
					Symbol.for("[[Prototype]]")
				]) {
					if (Reflect.has(P, key)) {
						return Reflect.get(
							P, key, context
						);
					}
				}
			}
		}
	},
	obj3 = new Proxy(
		{
			name: "obj-3",
			baz() {
				this.foo();
				this.bar();
			}
		},
		handlers
	);

// fake multiple `[[Prototype]]` links
obj3[Symbol.for("[[Prototype]]")] = [
	obj1, obj2
];

obj3.baz();
// obj1.foo: obj-3
// obj2.bar: obj-3