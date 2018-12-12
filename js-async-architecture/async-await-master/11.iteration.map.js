function asyncThing(value) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(value), 100)
	})
}

async function main() {
	return [1, 2, 3, 4].map(async (value) => {
		const v = await asyncThing(value)
		return v * 2
	})
}

main()
	.then(v => console.log(v))
	.catch(err => console.error(err))

/*
If you log the returned values of the iteratee with map you will see the array we expect: [ 2, 4, 6, 8 ]. The only problem is that each value is wrapped in a Promise by the AsyncFunction.
So if you want to get your values, you'll need to unwrap them by passing the returned array to a Promise.all.
Originally, you would first wait for all your promises to resolve and then map over the values:
*/

function main2() {
	return Promise.all([1, 2, 3, 4].map((value) => asyncThing(value)))
}

main2()
	.then(values => values.map((value) => value * 2))
	.then(v => console.log(v))
	.catch(err => console.error(err))

/*
The async/await version can still be useful if you have some long running synchronous logic in your iteratee and another long-running async task.

This way you can start calculating as soon as you have the first value - you don't have to wait for all the Promises to be resolved to run your computations.
Even though the results will still be wrapped in Promises, those are resolved a lot faster then if you did it the sequential way.
*/