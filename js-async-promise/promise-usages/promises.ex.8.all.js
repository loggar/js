/*
An perfect way of thinking about Promise.all is firing off multiple AJAX (via fetch) requests at one time:
*/

var request1 = fetch('/users.json');
var request2 = fetch('/articles.json');

Promise.all([request1, request2]).then(function(results) {
	// Both promises done!
});

/*
You could combine APIs like fetch and the Battery API since they both return promises:
*/

Promise.all([fetch('/users.json'), navigator.getBattery()]).then(function(results) {
	// Both promises done!
});


/*
Dealing with rejection is, of course, hard. If any promise is rejected the catch fires for the first rejection:
*/

var req1 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve('First!'); }, 4000);
});
var req2 = new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { reject('Second!'); }, 3000);
});
Promise.all([req1, req2]).then(function(results) {
	console.log('Then: ', results);
}).catch(function(err) {
	console.log('Catch: ', err);
});

// From the console:
// Catch: Second!


/*
Promise.all will be super useful as more APIs move toward promises.
*/
