/*
await accepts thenables

Like promise.then, await allows to use thenable objects (those with a callable then method). Again, the idea is that a 3rd-party object may be not a promise, but promise-compatible: if it supports .then, that’s enough to use with await.

For instance, here await accepts new Thenable(1):

*/

class Thenable {
	constructor(num) {
		this.num = num;
	}
	then(resolve, reject) {
		alert(resolve); // function() { native code }
		// resolve with this.num*2 after 1000ms
		setTimeout(() => resolve(this.num * 2), 1000); // (*)
	}
};

async function f() {
	// waits for 1 second, then result becomes 2
	let result = await new Thenable(1);
	alert(result);
}

f();

/*
If await gets a non-promise object with .then, it calls that method providing native functions resolve, reject as arguments. Then await waits until one of them is called (in the example above it happens in the line (*)) and then proceeds with the result.

*/