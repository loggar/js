doSomething(foo); // used before
var foo; // declared later

function doSomething(a) {
	console.log(a);
}

/*
1. First scan the program, collect all the variable and function declarations and assign memory spaces for it.
2. Run the program now by filling variable values assigned any, if not, fill undefined
*/

/*
var : hoisted in the scope it belongs to
let : not hoisted
*/

/* before hoisting
test(a);
var a = 3;
*/
/* after hoisting
var a;
test(a);   // a : undefined ( it has been declared, but has no defined value yet.)
a = 3;
*/