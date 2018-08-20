var myFunc = function (cb) {
	doSomething(function (err, a) {
		if (err) return cb(err)
		doSomethingElse(function (err, b) {
			if (err) return cb(err)
			return cb(null, [a, b])
		})
	})
}
/*
What’s good about this kind of pattern? It forces programmers to handle errors. As the person writing the code, you always want to make sure you know when an operation can fail, especially if it’s an asynchronous operation.

What’s bad about this kind of pattern? It seems like a lazy way of writing code. Asides that, if part of the code fails, the entire operation will fail. Certain exceptions to this are retry logic, reverting changes, and advanced error reporting.
*/
