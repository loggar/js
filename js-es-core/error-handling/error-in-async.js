var log = "";

function doWork() {
	log += "W";
	return Promise.resolve();
}

function doError() {
	log += "E";
	throw new Error("oops!");
}

function errorHandler(error) {
	log += "H";
}

doWork()
	.then(doWork)
	.then(doError)
	.then(doWork) // this will be skipped
	.then(doWork, errorHandler)
	.then(verify);

function verify() {
	expect(log)
		.toBe("This");
	done();
}

/*
What’s expected is that the log variable will contain “WWEH” when the code finishes executing, meaning the flow of calls with reach doWork , then doWork, then doError, then errorHandler. There are two things we can observe from this. The first is that when the call to doError throws an exception, execution jumps to the next rejection handler which is errorHandler and skips over any potential success handlers. This behavior is obvious once you think of promises as a tool to transform asynchronous code into a procedural flow of method calls. In synchronous code, an exception will jump over statements and up the stack to find a catch handler, and the asynchronous code in this example is no different.

The second observation is that the verify function will execute as a success handler after the error. Just like normal execution can resume in procedural code after a catch clause, normal execution can resume with promises after a handled error. The verify function executes because the error handler returns a successfully resolved promise. Remember that it’s the then method’s job to return a new promise, and unless the error handler explicitly rejects a new promise, the new promise resolves successfully.

A promise object also provides a catch clause to handle errors. Check out this example which is written using a catch clause:
*/

doWork()
.then(doWork)
.then(doError)
.then(doWork)
.then(doWork)
.catch(errorHandler)
.then(verify);

/*
The catch clause takes only a rejection handler method. There can be a difference in behavior between the following two code snippets:

.then(doWork, errorHandler)

and

.then(doWork)
.catch(errorHandler)


In the first snippet, if the success handler throws an exception or rejects a promise, execution will not go into the error handler since the promise was already resolved at this level. With catch, you can always see an error that was not handled from the previous success handler. Finally, imagine you have a rejected promise in your code, but there is no error handler attached. You can simulate this scenario with the following line of code:

Promise.reject("error!");

Some native environments and promise polyfills will warn you about unhandled promise rejections by displaying a message in the console of the developer tools. An unhandled promise rejection could spell doom your application as it might be leaving a critical error unattended to.
*/
