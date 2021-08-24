/*
A class method can also be async, just put async before it.
*/

class Waiter {
	async wait() {
		return await Promise.resolve(1);
	}
}

new Waiter()
	.wait()
	.then(console.log); // 1
