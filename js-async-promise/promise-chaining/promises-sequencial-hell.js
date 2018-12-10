new Promise(function (resolve, reject) {
	setTimeout(function () {
		resolve(1);
	}, 1000);
}).then(function (r) {
	new Promise(function (resolve, reject) {
		console.log(r);
		setTimeout(function () {
			resolve(r + 1);
		}, 1000);
	}).then(function (r) {
		new Promise(function (resolve, reject) {
			console.log(r);
			setTimeout(function () {
				resolve(r + 1);
			}, 1000);
		}).then(function (r) {
			console.log(r);
			console.log("done");
		});
	});
});