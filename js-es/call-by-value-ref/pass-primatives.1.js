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

function fn3() {
	let o = {
		n: 0,
		s: 'xyz'
	}

	console.log('fn3:', o.n, o.s);
	fn1(o.n, o.s);
	console.log('fn3:', o.n, o.s);
}

fn3();
