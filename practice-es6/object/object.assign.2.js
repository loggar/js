var o1 = {
	foo() { console.log("foo"); }
};

var o2 = Object.assign(
	Object.create(o1),
	{
		// .. o2's definition ..
	}
);

// delegates to `o1.foo()`
o2.foo();                            // foo