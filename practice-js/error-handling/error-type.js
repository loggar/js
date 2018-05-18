try {
	eval('5 + / 3'); // will raise SyntaxError exception
}
catch (e) {
	// Compare as objects
	if (e.constructor == SyntaxError) {
		// There's something wrong with your code, bro
	}

	// Get the error type as a string for reporting and storage
	console.log(e.constructor.name); // SyntaxError
}