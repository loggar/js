/*
The then callback is triggered when the promise is resolved.  You can also chain then method callbacks:
*/

new Promise(function(resolve, reject) { 
	// A mock async action using setTimeout
	setTimeout(function() { resolve(10); }, 3000);
})
.then(function(num) { console.log('first then: ', num); return num * 2; })
.then(function(num) { console.log('second then: ', num); return num * 2; })
.then(function(num) { console.log('last then: ', num);});

// From the console:
// first then:  10
// second then:  20
// last then:  40


/*
Each then receives the result of the previous then's return value.

If a promise has already resolved but then is called again, the callback immediately fires. If the promise is rejected and you call then after rejection, the callback is never called.
*/