/*
Transforming callbacks into promises
*/

// node style callback.
const fs = require('fs');
const f = './package.json'

fs.readFile(f, (err, data) => {
	if (err) throw err;
	console.log(data);
});

/*
But this is how I want to access the method:

fs.readFile(f)
  .then(data => console.log(data))

*/

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