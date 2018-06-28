function AsyncTask() {
	asyncFuncA(function (err, resultA) {
		if (err) return cb(err);

		asyncFuncB(function (err, resultB) {
			if (err) return cb(err);

			asyncFuncC(function (err, resultC) {
				if (err) return cb(err);

				// And so it goes....
			});
		});
	});
}