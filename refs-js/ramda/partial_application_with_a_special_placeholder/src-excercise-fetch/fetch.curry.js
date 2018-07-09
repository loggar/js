import fetch from 'node-fetch'

const url_get = 'https://loggar.github.io/js/docs/sample-res/sample.1.json'

fetch(url_get, { method: 'GET' })
	.then(res => res.text())
	.then(body => console.log(body));

const fetchGet = null // create a partial application of 'fetch' with special placeholder of ramda
const fetchPost = null // create a partial application of 'fetch'  with special placeholder of ramda
