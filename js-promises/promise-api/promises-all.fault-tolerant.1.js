require('isomorphic-fetch');

// The problem is that if any of requests fails, then Promise.all rejects with the error, and we loose results of all the other requests.

let urls = [
	'https://api.github.com/users/loggar',
	'https://api.github.com/users/webnlog',
	'https://no_such_url_addr'
];

Promise.all(urls.map(url => fetch(url)))
	.then(res => {
		for (let r of res) {
			console.log(`${r.url}, ${r.status}`);
		}
	}).catch(function (err) {
		console.log(err);
	});


// solution

Promise.all(
	urls.map(url => fetch(url).catch(err => err))
).then(res => {
	for (let r of res) {
		console.log(`${r.url}, ${r.status}`);
	}
}).catch(function (err) {
	console.log(err);
});

