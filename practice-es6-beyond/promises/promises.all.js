var p1 = Promise.resolve(42);
var p2 = new Promise(function pr(resolve) {
	setTimeout(function () {
		resolve(43);
	}, 100);
});
var v3 = 44;
var p4 = new Promise(function pr(resolve, reject) {
	setTimeout(function () {
		reject("Oops");
	}, 10);
});


Promise.all([p1, p2, v3])
	.then(function fulfilled(vals) {
		console.log(vals);            // [42,43,44]
	});

Promise.all([p1, p2, v3, p4]).then(
	function fulfilled(vals) {
		// never gets here
	},
	function rejected(reason) {
		console.log(reason);      // Oops
	});