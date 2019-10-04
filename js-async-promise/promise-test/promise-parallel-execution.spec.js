require('isomorphic-fetch');

// Parallel execution of promises

it('you can use Promise.all([...]) to execute promises in parallel'
	, (done) => {
		const url = 'https://loggar.github.io/note/sample-res';
		const p1 = fetch(`${url}/sample.3.json`);
		const p2 = fetch(`${url}/sample.4.json`);

		Promise.all([p1, p2])
			.then(([res1, res2]) => {
				return Promise.all([res1.json(), res2.json()])
			})
			.then(([post1, post2]) => {
				expect(post1.id).toBe(1);
				expect(post2.id).toBe(2);
			})
			.then(done);
	});

it('Promise.all([...]) will fail if any of the promises fails'
	, (done) => {
		const p1 = Promise.resolve(1);
		const p2 = Promise.reject('Error');

		Promise.all([p1, p2])
			.then(() => {
				fail('I will not be executed')
			})
			.catch(done);
	});

it("if you don't want Promise.all() to fail, wrap the promises " +
	"in a promise that will not fail", (done) => {
		function iMayFail(val) {
			return Math.random() >= 0.5 ?
				Promise.resolve(val) :
				Promise.reject(val);
		}

		function promiseOr(p, value) {
			return p.then(res => res, () => value);
		}

		const p1 = iMayFail(10);
		const p2 = iMayFail(9);

		Promise.all([promiseOr(p1, null), promiseOr(p2, null)])
			.then(([val1, val2]) => {
				expect(val1 === 10 || val1 === null).toBe(true);
				expect(val2 === 9 || val2 === null).toBe(true);
			})
			.catch(() => {
				fail('I will not be executed')
			})
			.then(done);
	});

it('Promise.race([...]) will resolve as soon as ' +
	'one of the promises resolves o rejects', (done) => {
		const timeout =
			new Promise((resolve, reject) => setTimeout(reject, 100));
		const data =
			fetch('https://loggar.github.io/note/sample-res/sample.3.json');

		Promise.race([data, timeout])
			.then(() => console.log('Fetch OK'))
			.catch(() => console.log('Fetch timeout'))
			.then(done);
	});
