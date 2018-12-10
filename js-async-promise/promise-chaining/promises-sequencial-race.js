/*
Promise.race is an interesting function
-- instead of waiting for all promises to be resolved or rejected, Promise.race triggers as soon as any promise in the array is resolved or rejected:
*/

var req1 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 2000);
});
var req2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('Second!'); }, 1000);
});
Promise.race([req1, req2]).then(function(one) {
	console.log('Then: ', one);
}).catch(function(one, two) {
	console.log('Catch: ', one);
});

// From the console:
// Then: Second!

/*
A use case could be triggering a request to a primary source and a secondary source (in case the primary or secondary are unavailable).
*/
