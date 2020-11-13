function asyncThing(value) {
	return new Promise((resolve, reject) => {
		setTimeout(() => resolve(value), 100)
	})
}

async function main() {
	return [1, 2, 3, 4].filter(async (value) => {
		const v = await asyncThing(value)
		return v % 2 === 0
	})
}

main()
	.then(v => console.log(v))
	.catch(err => console.error(err))

/*
Well, you guessed it: even though the returned values are [ false, true, false, true ], they will be wrapped in promises, which are truthy, so you'll get back all the values from the original array.
Unfortunately, all you can do to fix this is to resolve all the values and then filter them.
*/
