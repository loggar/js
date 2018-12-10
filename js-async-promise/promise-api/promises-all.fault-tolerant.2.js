require('isomorphic-fetch');

// Improve the solution of the previous task Fault-tolerant Promise.all. Now we need not just to call fetch, but to load the JSON objects from given URLs.

let urls = [
	'https://api.github.com/users/loggar',
	'https://api.github.com/users/webnlog',
	'https://api.github.com/users/no_such_user_id',
	'https://no_such_url_addr'
];

Promise.all(urls.map(url => fetch(url).catch(err => err)))
	.then(res => Promise.all(
		res.map(r => r.json())
	))
	.then(users => {
		for (let user of users) {
			console.log(user.name);
		}
	});


// solution

Promise.all(
	urls.map(url => fetch(url).catch(err => err))
)
	.then(responses => Promise.all(
		// if it's an error then pass on
		// otherwise response.json() and catch errors as results
		responses.map(r => r instanceof Error ? r : r.json().catch(err => err))
	))
	.then(results => {
		console.log(results[0].name); // Ilya Kantor
		console.log(results[1]); // SyntaxError: Unexpected token < in JSON at position 0
		console.log(results[2]); // TypeError: failed to fetch (text may vary)
	});