require('isomorphic-fetch');

let urls = [
	'https://loggar.github.io/note/docs/sample-res/sample.1.json',
	'https://loggar.github.io/note/docs/sample-res/sample.2.json',
	'https://loggar.github.io/note/docs/sample-res/sample.3.json'
];

// map every url to the promise fetch(github url)
let requests = urls.map(url => fetch(url));

// Promise.all waits until all jobs are resolved
Promise.all(requests)
	.then(responses => responses.forEach(
		response => console.log(`${response.url}: ${response.status}`)
	));
