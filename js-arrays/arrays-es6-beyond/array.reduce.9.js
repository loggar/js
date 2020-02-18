/*
Running Promises in Sequence
*/

/**
 * Runs promises from promise array in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequense(arr) {
	return arr.reduce((promiseChain, currentPromise) => {
		return promiseChain.then((chainedResult) => {
			return currentPromise(chainedResult)
				.then((res) => res)
		})
	}, Promise.resolve());
}

// promise function 1
function p1() {
	return new Promise((resolve, reject) => {
		resolve(5);
	});
}

// promise function 2
function p2(a) {
	return new Promise((resolve, reject) => {
		resolve(a * 2);
	});
}

// promise function 3
function p3(a) {
	return new Promise((resolve, reject) => {
		resolve(a * 3);
	});
}

const promiseArr = [p1, p2, p3];
runPromiseInSequense(promiseArr)
	.then((res) => {
		console.log(res);   // 30
	});