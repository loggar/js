var p = new Promise(function (resolve, reject) {
	// Do an async task async task and then...

	var good = false;

	if (/* good condition */ good) {
		resolve('Success!');
	}
	else {
		reject('Failure!');
	}
});

p.then(function (r) {
	/* do something with the result */
	console.log(r);
}).catch(function (r) {
	/* error :( */
	console.log(r);
});