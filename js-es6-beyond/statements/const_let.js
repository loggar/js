// The scope of `let` is limited to the {} braces surrounding it.
if (true) {
	let a = 10;
} else {
	let a = 20;
}
console.log(a); // ReferenceError - out of scope

// Constants cannot be reassigned:
const MAGIC = 42;
MAGIC = 43; // Error!

// Properties of constant objects can be modified,
// but the object itself cannot be reassigned:
const credentials = {
	login: 'anton',
	password: '123',
};

credentials.password = '456'; // works fine
credentials = null; // Error!