new Promise(function (resolve, reject) {
	throw new Error("Whoops!");
}).catch(console.error); // Error: Whoops!

/*
…Works the same way as this:
*/

new Promise(function (resolve, reject) {
	reject(new Error("Whoops!"));
}).catch(console.error); // Error: Whoops!
