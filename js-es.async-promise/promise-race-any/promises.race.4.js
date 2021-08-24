var foreverPendingPromise = Promise.race([]);
console.log(foreverPendingPromise);
setTimeout(function () {
	console.log('the stack is now empty');
	console.log(foreverPendingPromise);
});

// logs, in order:
// Promise { <state>: "pending" }
// the stack is now empty
// Promise { <state>: "pending" }