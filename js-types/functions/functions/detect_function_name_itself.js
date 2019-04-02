/*
does not work in strict mode
ES5 will remove this feature(callee, callee.caller, ...)
*/

function functionA() {
	console.log('callee', arguments.callee.toString().match(/function ([^\(]+)/)[1]);
}

function functionB() {
	console.log('callee', arguments.callee.toString().match(/function ([^\(]+)/)[1]);
}

function functionC() {
	console.log('callee', arguments.callee.toString().match(/function ([^\(]+)/)[1]);
	functionB();
}

functionA();
functionC();