process.on('unhandledRejection', (reason) => {
	console.error(reason);
});

new Promise(function () {
	throw new Error("Whoops!");
}); // no catch to handle the error
