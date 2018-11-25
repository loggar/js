window.addEventListener('unhandledrejection', function (event) {
	// the event object has two special properties:
	console.error(event.promise); // [object Promise] - the promise that generated the error
	console.error(event.reason); // Error: Whoops! - the unhandled error object
});

new Promise(function () {
	throw new Error("Whoops!");
}); // no catch to handle the error
