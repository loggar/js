new Promise(function () {
	noSuchFunction(); // Error here (no such function)
}); // no .catch attached
//(node:1096) UnhandledPromiseRejectionWarning: ReferenceError: noSuchFunction is not defined

// a chain of promises without .catch at the end
new Promise(function () {
	throw new Error("Whoops!");
}).then(function () {
	// ...something...
}).then(function () {
	// ...something else...
}).then(function () {
	// ...but no catch after it!
});
//(node:9068) UnhandledPromiseRejectionWarning: Error: Whoops!