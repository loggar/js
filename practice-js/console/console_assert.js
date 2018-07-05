var clt = function (a, b) {
	console.assert(a < b, { message: '!(a < b)', a: a, b: b })
}

clt(2,1)