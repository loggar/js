/*
Think about JavaScript loaders: there are times when you trigger multiple async interactions but only want to respond when all of them are completed
-- that's where Promise.all comes in.  The Promise.all method takes an array of promises and fires one callback once they are all resolved:
*/

Promise.all([promise1, promise2]).then(function(results) {
	// Both promises resolved
})
.catch(function(error) {
	// One or more promises was rejected
});
