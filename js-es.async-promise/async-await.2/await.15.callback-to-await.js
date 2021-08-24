const fs = require('fs');
const f = './package.json'

const logger = {
	error: console.error
}

// callback to promise

function promisify(func) {
	return (...args) =>
		new Promise((resolve, reject) => {
			const callback = (err, data) => err ? reject(err) : resolve(data)
			func.apply(this, [...args, callback])
		})
}

const readFile = promisify(fs.readFile)
/*
readFile(f)
	.then(data => console.log(data))
*/

// promise to await
async function asyncTask() {
	try {
		const valueA = await readFile(f)
		console.log(valueA)
	} catch (err) {
		logger.error(err)
	}
}

asyncTask()
