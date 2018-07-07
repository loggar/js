import fetch from 'node-fetch'

const url_get = 'https://loggar.github.io/js/docs/sample-res/sample.1.json'

/*
fetch(url_get, { method: 'GET' })
	.then(res => res.text())
	.then(body => console.log(body));
*/

const fetchGet = (url, option = {}) => {
	const o = Object.assign({ method: 'GET' }, option);
	return fetch(url, o)
}

fetchGet(url_get)
	.then(res => res.text())
	.then(body => console.log(body));
