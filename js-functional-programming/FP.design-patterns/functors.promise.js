Promise.resolve(1)
	.then(function (v) {
		return v + 1
	}, function (r) {
		console.log(r)
	})
	.then(function (v) {
		console.log(v)
	})

Promise.reject(1)
	.then(function (v) {
		return v + 1
	}, function (r) {
		console.log(r)
		return 0
	})
	.then(function (v) {
		console.log(v)
	})

// Promises have an interface where we can apply a function to its wrapped value.
// A promise is a functor.
