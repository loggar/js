/*
All promise instances get a then method which allows you to react to the promise.  The first then method callback receives the result given to it by the resolve() call:
*/

new Promise(function(resolve, reject) {
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(result) {
	console.log(result);
});

// From the console:
// 10