/*
If any of the promises is rejected, Promise.all immediately rejects with that error.
*/

Promise.all([
	new Promise((resolve, reject) => setTimeout(() => resolve(1), 1000)),
	new Promise((resolve, reject) => setTimeout(() => reject(new Error("Whoops!")), 2000)),
	new Promise((resolve, reject) => setTimeout(() => resolve(3), 3000))
]).catch(alert); // Error: Whoops!