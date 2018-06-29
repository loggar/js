/*
If a promise resolves normally, then await promise returns the result. But in case of a rejection it throws the error, just if there were a throw statement at that line.
*/

async function f() {
	await Promise.reject(new Error("Whoops!"));
}

// …Is the same as this:

async function f2() {
	throw new Error("Whoops!");
}


/*
In real situations the promise may take some time before it rejects. So await will wait, and then throw an error.
We can catch that error using try..catch, the same way as a regular throw:
*/

async function f3() {

	try {
		let response = await fetch('http://no-such-url');
	} catch (err) {
		console.error(err); // TypeError: failed to fetch
	}
}

f3();

/*
In case of an error, the control jumps to the catch block. We can also wrap multiple lines:
*/

async function f4() {

	try {
		let response = await fetch('/no-user-here');
		let user = await response.json();
	} catch (err) {
		// catches errors both in fetch and response.json
		console.error(err);
	}
}

f4();

/*
If we don’t have try..catch, then the promise generated by the call of the async function f() becomes rejected. We can append .catch to handle it:
*/

async function f() {
	let response = await fetch('http://no-such-url');
}

// f() becomes a rejected promise
f().catch(console.log); // TypeError: failed to fetch

/*
If we forget to add .catch there, then we get an unhandled promise error (and can see it in the console)
*/


/*
async/await and promise.then/catch

When we use async/await, we rarely need .then, because await handles the waiting for us. And we can use a regular try..catch instead of .catch. That’s usually (not always) more convenient.

But at the top level of the code, when we’re outside of any async function, we’re syntactically unable to use await, so it’s a normal practice to add .then/catch to handle the final result or falling-through errors.
*/

/*
async/await works well with Promise.all

When we need to wait for multiple promises, we can wrap them in Promise.all and then await:

// wait for the array of results
let results = await Promise.all([
  fetch(url1),
  fetch(url2),
  ...
]);

In case of an error, it propagates as usual: from the failed promise to Promise.all, and then becomes an exception that we can catch using try..catch around the call.
*/