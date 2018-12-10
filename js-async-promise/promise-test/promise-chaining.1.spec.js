require('isomorphic-fetch');

// Chaining promises
it('you can chain promise because .then(...) returns a promise'
	, (done) => {
		fetch('https://loggar.github.io/js/docs/sample-res/sample.3.json')
			.then(response => response.json())
			.then(json => expect(json.userId).toBe(1))
			.then(done);
	});

it('you can use the fail callback of .then(success, fail) to ' +
	'handle rejected promises', (done) => {
		Promise.reject()
			.then(function success() {
				throw 'I must not be executed';
			}, function fail() {
				done();
			});
	});

it('... or you can use .catch() to handle rejected promises'
	, (done) => {
		Promise.reject()
			.then(function success() {
				throw 'I must not be executed';
			})
			.catch(done);
	});

it('also .catch() returns a promise, allowing promise chaining'
	, (done) => {
		Promise.reject()
			.catch(() => undefined)
			.then(done);
	});

it('you must return a rejected promise if you want to ' +
	'execute the next fail callback', (done) => {
		function someApiCall() {
			return Promise.reject('Error');
		}

		someApiCall()
			.catch((err) => {
				console.error(err);

				// Without the line below, .catch gets not called
				return Promise.reject(err);
			})
			.catch(done);
	});

it('... or you can throw an error if you want to ' +
	'execute the next fail callback', (done) => {
		function someApiCall() {
			return Promise.reject('Error');
		}

		someApiCall()
			.catch((err) => {
				console.error(err);
				throw err; // Without this line, .catch gets not called
			})
			.catch(done);
	});

it('values returned inside .then()/.catch() callbacks ' +
	'are provided to the next callback', (done) => {
		Promise.resolve(1)
			.then(value => value + 1)
			.then(value => expect(value).toBe(2));

		Promise.reject(1)
			.catch(value => value + 1)
			.then(value => expect(value).toBe(2));

		setTimeout(() => {
			done();
		}, 1);
	});
