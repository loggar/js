var p = new Promise(function (resolve, reject) {

	// Do an async task async task and then...

	if (/* good condition */ true) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function () {
	/* do something with the result */
}).catch(function () {
	/* error :( */
});