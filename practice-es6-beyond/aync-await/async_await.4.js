async function f() {
	return 1;
}

f().then(console.log); // 1

/*
…We could explicitly return a promise, that would be the same:
*/

async function f2() {
	return Promise.resolve(1);
}

f2().then(console.log); // 1