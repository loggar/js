function asyncThing(value) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(value), 100)
	})
}

async function main() {
	return [1, 2, 3, 4].reduce(async (acc, value) => {
		return await acc + await asyncThing(value)
	}, Promise.resolve(0))
}

main()
	.then(v => console.log(v))
	.catch(err => console.error(err))

/*
Reducing is pretty straightforward. Bear in mind though that you need to wrap the initial value into Promise.resolve, as the returned accumulator will be wrapped as well and has to be await-ed.
*/

/*
If you wish to use functional patterns, `async/await` is probably not for you.

.. As it is pretty clearly intended to be used for imperative code styles.

To make your .then chains more "pure" looking, you can use Ramda's pipeP and composeP functions.
*/