/* pre ES6 */

function Foo() { }

var a = new Foo();

a.toString();                // [object Object]
a instanceof Foo;            // true


/* ES6 Symbol.toStringTag and Symbol.hasInstance */

function Foo(greeting) {
	this.greeting = greeting;
}

Foo.prototype[Symbol.toStringTag] = "Foo";

Object.defineProperty(Foo, Symbol.hasInstance, {
	value: function (inst) {
		return inst.greeting == "hello";
	}
});

var a = new Foo("hello"),
	b = new Foo("world");

b[Symbol.toStringTag] = "cool";

a.toString();                // [object Foo]
String(b);                // [object cool]

a instanceof Foo;            // true
b instanceof Foo;            // false