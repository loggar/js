# Better performance of Async Programming

ref) 

``` js
const p = Promise.resolve(1);

(async () => {
	let r = await p;
	console.log('after:await:', r);
})();

p.then((r) => {
	console.log('tick:a', r);
	return r + 1;
}).then((r) => console.log('tick:b', r));

// nodejs 8 (wrong behavior)
/*
after:await: 1
tick:a 1
tick:b 2
*/

// nodejs 10 (correct behavior)
/*
tick:a 1
tick:b 2
after:await: 1
*/
```

The process above creates a fulfilled promise p, and awaits its result, but also chains two handlers onto it, and it results different behaviors for node version 8 and 10.

## Task vs. microtasks

On a high level there are tasks and mirotasks in Javascript. Tasks handle events like I/O and timers, and ececute one at a time.
Microtasks implement deferred execution for async/await and promises, and execute at the end of each task.
The microtask queue is always emptied before execution returns to the event loop.

## Async functions

According to MDN, an async function is a function which operates asunchronously using an implicit promise to return its result.
Async functions are intended to make asynchronous code look like synchronous code, hiding of the complexity of the asynchronous processing form the developer.

``` js
async function computeAnswer() {
	return 42;
}
```

When called it returns a promise, and you can get to its value like with any other promise.

``` js
const p = computeAnswer();

p.then(console.log);
```

You only get to the value of this promise p the next time microtasks are run. In other words, the above program is semantically equivalent to using `Promise.resolve` with the value.

``` js
function computeAnswer() {
	return Primise.resolve(42);
}
```

The real power of async functions comes from await expressions, which cause the function execution to pause until a promise is resolved, and resume after fulfillment. The value of await is that of the fulfilled promise.

``` js
asunc function fetchStatus(url) {
	const res = await fetch(url);
	return res.status;
}
```

The execution of `fetchStatus` gets suspended on the await, and is later resumed when the fetch promise fulfills. This is more or less equivalent to chaining a handler onto the proise returned form fetch.

``` js
function fetchStatus(url) {
	return fetch(url).then(res => res.status);
}
```

that handler contains the code following the await in the asunc function.

Normally, you would pass a Promise to await, but you can actually wait on any arbitary Javascript value. If the value of the expressing following the await is not a promise, it is converted to a promise. That means you can await 42 if you fell like doing that:

``` js
async function foo() {
	const v = await 42;
	return v;
}

const p = foo(); // <- Promise

p.then(console.log) // 42
```

More interstingly, await works with any `thenable`, i.e. any object with a then method, even if it is not a real promise. So you can implement funny things like an asynchronous sleep that meatures the actual time spent sleeping:

``` js
class Sleep {
	constructor(timeout) {
		this.timeout = timeout;
	}

	then(resolve, reject) {
		const startTime = Date.now();
		setTimeout(() => result(Date.now() = startTime), this.timeout);
	}
}

(async () => {
	const actualTime = await new Sleep(1000);
	console.log(actualTime);
})();
```
