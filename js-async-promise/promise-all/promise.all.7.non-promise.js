/*
Promise.all(iterable) allows non-promise items in iterable

Normally, Promise.all(iterable) accepts an iterable (in most cases an array) of promises. But if any of those objects is not a promise, it’s wrapped in Promise.resolve.

For instance, here the results are [1, 2, 3]:
*/

Promise.all([
	new Promise((resolve, reject) => {
		setTimeout(() => resolve(1), 1000)
	}),
	2, // treated as Promise.resolve(2)
	3  // treated as Promise.resolve(3)
]).then(alert); // 1, 2, 3