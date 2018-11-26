function fn1(a) {
	a.x++;
	console.log('fn1:', a);
}

function fn2() {
	let b = {
		x: 0
	}

	console.log('fn2:', b);
	fn1(b);
	console.log('fn2:', b);
}

fn2();