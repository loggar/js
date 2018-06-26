const fs = require("fs");
const nl = (process.platform === "win32" ? "\r\n" : "\n");

const readFileAsArray = function (file, cb = () => { }) {
	return new Promise((resolve, reject) => {
		fs.readFile(file, function (err, data) {
			if (err) {
				reject(err);
				return cb(err);
			}
			const lines = data.toString().trim().split(nl);
			resolve(lines);
			cb(null, lines);
		});
	});
};

const testFile = "./docs/sample-res/sample.1.txt";

async function countOdd() {
	try {
		const lines = await readFileAsArray(testFile);
		const numbers = lines.map(Number);
		const oddCount = numbers.filter(n => n % 2 === 1).length;
		console.log('Odd numbers count:', oddCount);
	} catch (err) {
		console.error(err);
	}
}
countOdd();

/*
We can use the async/await feature with any function that supports a promise interface. However, we can’t use it with callback-style async functions (like setTimeout for example).
*/
