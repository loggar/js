function fn1(n, s) {
	n++;
	s += 'a';
	console.log('fn1:', n, s);
}

function fn2() {
	let n = 0;
	let s = 'abc';

	console.log('fn2:', n, s);
	fn1(n, s);
	console.log('fn2:', n, s);
}

fn2();
