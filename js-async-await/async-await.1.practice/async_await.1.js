// Before - callback hell:
function runTest(filename) {
	readFile(filename, function (data) {
		callApi(data, function (response) {
			console.log('Server returned: ' + response);
		});
	});
}

// After - async-await: 
async function runTest(filename) {
	let data = await readFile(filename);
	let response = await callApi(data);
	console.log(`Server returned: ${response}.`);
}

/*
await can only be placed inside a function marked async.
async-await uses Promises under the hood. That means you can await any function that returns a Promise.
You can usetry-catch as usual to catch errors in async functions.
*/