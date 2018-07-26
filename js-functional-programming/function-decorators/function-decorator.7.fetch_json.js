/*
When using fetch it is common to see code like this sprinkled throughout your codebase:
*/

fetch(url)
	.then(response => response.json())
	.then(data => console.log(data))


// function decorator
const withJson = f => url =>
	f(url).then(response => response.json())

// decorated function
const fetchJson = withJson(fetch)

// now all your fetch calls are simplified
fetchJson(url)
	.then(data => console.log(data))
	