import curry from 'ramda/src/curry'
import __ from 'ramda/src/__'
import fetch from 'node-fetch'

const url_get = 'https://loggar.github.io/note/sample-res/sample.1.json'

/*
fetch(url_get, { method: 'GET' })
	.then(res => res.text())
	.then(body => console.log(body));
*/

const crFetch = curry(fetch)

const fetchGet = crFetch(__, { method: 'GET' })

fetchGet(url_get)
	.then(res => res.text())
	.then(body => console.log(body));
