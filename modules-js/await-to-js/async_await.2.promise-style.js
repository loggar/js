function asyncTask(cb) {

	asyncFuncA.then(AsyncFuncB)
		.then(AsyncFuncC)
		.then(AsyncFuncD)
		.then(data => cb(null, data))
		.catch(err => cb(err));
}