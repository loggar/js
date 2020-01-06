/*
The keyword await makes JavaScript wait until that promise settles and returns its result.
*/

async function f() {
	let promise = new Promise((resolve, reject) => {
		setTimeout(() => resolve("done!"), 1000)
	});

	let result = await promise; // wait till the promise resolves
	console.log(result); // "done!"
}

f();

/*
Can’t use await in regular functions

function f() {
  let promise = Promise.resolve(1);
  let result = await promise; // Syntax error
}
*/
