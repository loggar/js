require('isomorphic-fetch');

let names = ['loggar', 'webnlog'];

let requests = names.map(name => fetch(`https://api.github.com/users/${name}`));

Promise.all(requests)
	.then(responses => {
		// all responses are ready, we can show HTTP status codes
		for (let response of responses) {
			console.log(`${response.url}: ${response.status}`); // shows 200 for every url
		}

		return responses;
	})
	// map array of responses into array of response.json() to read their content
	.then(responses => Promise.all(responses.map(r => r.json())))
	// all JSON answers are parsed: "users" is the array of them
	.then(users => users.forEach(user => console.log(user.name)));
