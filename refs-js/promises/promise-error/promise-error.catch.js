var rs = () => console.log("resolved"),
	rj = (v) => {
		console.log("reject:" + v);
		throw v;
	},
	errHandler = (e) => console.error("error:" + e);

function fn_pormise(param) {
	console.log("fn_pormise with param: " + param);
	return new Promise(function (resolve, reject) {
		setTimeout(function () {
			var result = param ? true : false;
			if (result) {
				resolve();
			} else {
				reject(result);
			}
		}, 500);
	});
}

fn_pormise(0).then(rs, rj).catch(errHandler);