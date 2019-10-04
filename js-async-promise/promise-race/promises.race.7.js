/*
Similar to Promise.all takes an iterable of promises, but instead of waiting for all of them to finish – waits for the first result (or error), and goes on with it.
*/

Promise.race([
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
	new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).then(console.log); // 1
