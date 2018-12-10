require('isomorphic-fetch');

fetch('https://loggar.github.io/note/sample-res/sample.1.json')
	// .then below runs when the remote server responds
	.then(function (response) {
		// response.text() returns a new promise that resolves with the full response text
		// when we finish downloading it
		return response.text();
	})
	.then(function (text) {
		// ...and here's the content of the remote file
		console.log(text);
	});

/*
arrow functions for brevity:
*/
// same as above, but response.json() parses the remote content as JSON
fetch('https://loggar.github.io/note/sample-res/sample.1.json')
	.then(response => response.json())
	.then(user => console.log(user.id));
	