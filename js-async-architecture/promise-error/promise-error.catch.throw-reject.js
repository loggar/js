/*
That’s so not only in the executor, but in handlers as well. If we throw inside .then handler, that means a rejected promise, so the control jumps to the nearest error handler.
*/

new Promise(function (resolve, reject) {
	resolve("ok");
}).then(function (result) {
	throw new Error("Whoops!"); // rejects the promise
}).catch(console.error); // Error: Whoops!

/*
That’s so not only for throw, but for any errors, including programming errors as well:
*/

new Promise(function (resolve, reject) {
	resolve("ok");
}).then(function (result) {
	blabla(); // no such function
}).catch(console.error); // ReferenceError: blabla is not defined
