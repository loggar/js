it('Promise executor is run SYNCHRONOUSLY', () => {
	let executorRun = false;
	new Promise(function executor() {
		executorRun = true;
	});

	expect(executorRun).toBe(true);
});

it('you can resolve a promise', (done) => {
	new Promise((resolve) => setTimeout(resolve, 1))
		.then(done);
});

it('... or you can reject a promise', (done) => {
	new Promise((resolve, reject) => setTimeout(reject, 1))
		.then(undefined, done);
});

it('An error inside the executor, rejects the promise', (done) => {
	new Promise(function executor() {
		throw 'Error';
	}).catch(done);
});

it('you can use Promise.resolve() to wrap values or promises'
	, (done) => {
		function iMayReturnAPromise() {
			return Math.random() >= 0.5 ? Promise.resolve() : 5;
		}
		Promise.resolve(iMayReturnAPromise()).then(done);
	});

it('you can use Promise.resolve() to execute something just after'
	, (done) => {
		let arr = [];
		Promise.resolve().then(() => arr.push(2));
		arr.push(1);
		setTimeout(() => {
			expect(arr).toEqual([1, 2]);
			done();
		}, 1);
	});

/** @see
https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules
 **/
it('Promise.resolve() is normally executed before setTimeout(.., 0)'
	, (done) => {
		let arr = [];
		setTimeout(() => arr.push('timeOut'), 0);
		Promise.resolve().then(() => {
			arr.push('resolve');
		});
		setTimeout(() => {
			expect(arr).toEqual(['resolve', 'timeOut']);
			done();
		}, 1);
	});
	
it('you can create rejected promises', (done) => {
	Promise.reject('reason').catch(done);
});
it('pay attention to "Uncaught (in promise) ..."', () => {
	Promise.reject('The error');
	// Outputs in the console Uncaught (in promise) The error
});
