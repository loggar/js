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



// NOTE: re-setup all test values to avoid timing issues misleading you!

Promise.race([p2, p1, v3])
	.then(function fulfilled(val) {
		console.log(val);             // 42
	});

Promise.race([p2, p4])
	.then(
	function fulfilled(val) {
		// never gets here
	},
	function rejected(reason) {
		console.log(reason);      // Oops
	}
	);