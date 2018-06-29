// the execution: catch -> catch -> then
new Promise(function (resolve, reject) {
	throw new Error("Whoops!");
}).catch(function (error) { // (*)
	if (error instanceof URIError) {
		// handle it
	} else {
		console.log("Can't handle such error");
		throw error; // throwing this or another error jumps to the next catch
	}
}).then(function () {
	/* never runs here */
}).catch(error => { // (**)
	console.error(`The unknown error has occurred: ${error}`);
	// don't return anything => execution goes the normal way
});

/*
The handler (*) catches the error and just can’t handle it, because it’s not URIError, so it throws it again. Then the execution jumps to the next .catch down the chain (**).
*/
