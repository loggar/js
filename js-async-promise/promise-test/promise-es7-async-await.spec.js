// New await/async syntax
it('you can use the new await/async syntax', async () => {
	function timeout(ms) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	const start = Date.now();
	const delay = 200;

	await timeout(delay + 2); // Just some ms tolerance

	expect(Date.now() - start).toBeGreaterThanOrEqual(delay);
});

it('an async function returns a promise', (done) => {
	async function iAmAsync() {
		return 1;
	}

	iAmAsync()
		.then((val) => expect(val).toBe(1))
		.then(done);
});

it('await just awaits a promise resolution', async (done) => {
	await Promise.resolve();
	done();
});

it('await will throw an error if the promise fail', async (done) => {
	try {
		await Promise.reject();
		fail('I will not be executed');
	} catch (err) {
		done();
	}
});
