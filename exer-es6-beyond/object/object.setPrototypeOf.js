var o1 = {
	foo() { console.log("foo"); }
};
var o2 = {
	// .. o2's definition ..
};

Object.setPrototypeOf(o2, o1);

// delegates to `o1.foo()`
o2.foo();                            // foo




/* Alternatively: */

var o1 = {
	foo() { console.log("foo"); }
};

var o2 = Object.setPrototypeOf({
	// .. o2's definition ..
}, o1);

// delegates to `o1.foo()`
o2.foo();                            // foo