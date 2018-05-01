/*
It's up to the developer to manually call resolve or reject within the body of the callback based on the result of their given task.
A realistic example would be converting XMLHttpRequest to a promise-based task:
*/

// From Jake Archibald's Promises and Back:
// http://www.html5rocks.com/en/tutorials/es6/promises/#toc-promisifying-xmlhttprequest

function get(url) {
	// Return a new promise.
	return new Promise(function (resolve, reject) {
		// Do the usual XHR stuff
		var req = new XMLHttpRequest();
		req.open('GET', url);

		req.onload = function () {
			// This is called even on 404 etc
			// so check the status
			if (req.status == 200) {
				// Resolve the promise with the response text
				resolve(req.response);
			}
			else {
				// Otherwise reject with the status text
				// which will hopefully be a meaningful error
				reject(Error(req.statusText));
			}
		};

		// Handle network errors
		req.onerror = function () {
			reject(Error("Network Error"));
		};

		// Make the request
		req.send();
	});
}

// Use it!
get('story.json').then(function (response) {
	console.log("Success!", response);
}, function (error) {
	console.error("Failed!", error);
});