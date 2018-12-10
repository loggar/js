// node style callback.
const fs = require('fs');
const f = './package.json'

function promisify(func) {
	return (...args) =>
		new Promise((resolve, reject) => {
			const callback = (err, data) => err ? reject(err) : resolve(data)
			func.apply(this, [...args, callback])
		})
}

const readFile = promisify(fs.readFile)
readFile(f)
	.then(data => console.log(data))


/*
Transforming promises into callbacks
*/

function callbackify(func) {
	return (...args) => {
		const onlyArgs = args.slice(0, args.length - 1)
		const callback = args[args.length - 1]

		func.apply(this, onlyArgs)
			.then(data => callback(null, data))
			.catch(err => callback(err))
	}
}

const readFileWithCallback = callbackify(readFile)

readFileWithCallback(f, (err, data) => {
	if (err) throw err;
	console.log(data);
});