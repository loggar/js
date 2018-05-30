/*
First-class Functions

A programming language is said to have First-class functions when functions in that language are treated like any other variable.
For example, in such a language, a function can be passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.
*/

const jsonfile = {
	writeFile: function (file, obj, fn_fail) {
		console.log(file);
		console.log(obj);
		console.log('file write ', file, obj);
		if (typeof obj.age === 'undefined') {
			fn_fail('obj does not have age property');
		}
	}
}

const file = '/tmp/data.json'
const obj = { name: 'JP' }

jsonfile.writeFile(file, obj, (err) => console.error(err));
